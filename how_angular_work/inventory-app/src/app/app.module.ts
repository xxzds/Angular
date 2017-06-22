import { BrowserModule } from '@angular/platform-browser';
import {Component, Input, NgModule} from '@angular/core';

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
   template:`
     <img class="product-image" [src]="product.imageUrl"/>
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
      <div>
        <span *ngFor="let name of product.department; let i=index" >
          <a herf="#">{{name}}</a>
          <span>{{i < (product.department.length-1) ? '>' :''}}</span>
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
    <div >
      <product-image [product]="product"></product-image>
      <div style="clean:both; width: 80%">
        <div class="header">{{product.name}}</div>
        <div class="meta">SKU # {{product.sku}}</div>
        <div class="description">
          <product-department [product]="product"></product-department>
        </div>
      </div>
      <price-display [price]="product.price"></price-display>
    </div>
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
    <div>
      <product-row
        *ngFor="let myProduct of productList"
        [product]="myProduct">
      </product-row>
    </div>
  `
})
export class ProductsList{
  @Input() productList:Product[];
}


/**
 * 顶级组件
 */
@Component({
  selector:'inventory-app',
  template:`    
      <products-list [productList]="products">
      </products-list>
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
