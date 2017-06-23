import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
/**
 *需要导入ReactiveFormsModule模块
 */
@Component({
  selector:'demo-form-sku-builder',
  template:`
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku with Builder</h2>
      <form [formGroup]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 [formControl]="myForm.controls['sku']">
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})

export class DemoFormSkuBuilder{
  myForm:FormGroup;

  constructor(fb:FormBuilder){
    this.myForm =fb.group({
        'sku':['sku']
    });
  }

  onSubmit(value:any):void{
     console.log('you submitted value:'+value);
  }
}
