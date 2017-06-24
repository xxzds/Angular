import { BrowserModule } from '@angular/platform-browser';
import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';

/**
 * 模型
 */
export  class Product {
  constructor(
    public sku : string,
    public name : string,
    public  imageUrl : string,
    public  department : string[],
    public price :number){}
}

/**
 * 图片组件
 */
@Component({
  selector:'product-image',
  inputs:['product'],
  host: {class: 'ui small image'},
   template:`
     <img class="product-image" [src]="product.imageUrl">
   `
})
export class ProductImage{
    product:Product;
}


/**
 * 产品分类组件
 */
@Component({
    selector:'product-department',
    inputs:['product'],
    template:`
      <div class="product-department">
        <span *ngFor="let name of product.department; let i=index">
          <a href="#">{{ name }}</a>
          <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
        </span>
      </div>
    `
})
export class ProductDepartment{
   product:Product;
}

/**
 * 价格组件
 */
@Component({
    selector:'price-display',
    inputs:['price'],
    template:`
      <div class="price-display">\${{price}}</div>
    `
})
export  class PriceDisplay{
    price:number;
}

/**
 * 行组件
 */
@Component({
  selector:'product-row',
  inputs:['product'],
  host: {'class': 'item'},
  template:`
    <product-image [product]="product"></product-image>
    <div class="content">
      <div class="header">{{ product.name }}</div>
      <div class="meta">
        <div class="product-sku">SKU #{{ product.sku }}</div>
      </div>
      <div class="description">
        <product-department [product]="product"></product-department>
      </div>
    </div>
    <price-display [price]="product.price"></price-display>
  `
})
export  class ProductRow{
  product:Product;
}


/**
 * 列表组件
 */
@Component({
  selector:'products-list',
  template:`
    <div class="ui items">
      <product-row
        *ngFor="let myProduct of productList"
        [product]="myProduct"
        (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
      </product-row>
  `
})
export class ProductsList{
  @Input() productList:Product[];

  private currentProduct: Product;

  @Output() onProductSelected: EventEmitter<Product>;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product):void{
      this.currentProduct = product;
      this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}


/**
 * 顶级组件
 */
@Component({
  selector:'inventory-app',
  template:`
    <div class="inventory-app">
        <products-list
          [productList]="products"
          (onProductSelected)="productWasSelected($event)">
        </products-list>
      </div>
  `
})
export class InventoryApp{
    products:Product[];

    constructor(){
      this.products = [
        new Product(
          'MYSHOES',
          'Black Running Shoes',
          'assets/images/products/black-shoes.jpg',
          ['Men', 'Shoes', 'Running Shoes'],
          109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          'assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          'assets/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99)
      ];
    }

  productWasSelected(product:Product):void{
    console.log('Product clicked: ', product);
  }
}


/**
 * 模块
 */
@NgModule({
  declarations: [
    InventoryApp,
    ProductsList,
    ProductRow,
    ProductImage,
    ProductDepartment,
    PriceDisplay
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryApp]
})
export class AppModule { }
