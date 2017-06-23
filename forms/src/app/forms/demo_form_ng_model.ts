import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


/**
 * 模型的双向绑定
 */
@Component({
  selector:'demo-form-ng-model',
  template:`
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: with ng-model</h2>

      <div class="ui info message">
        The product name is: {{productName}}
      </div>

      <form [formGroup]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field">
          <label for="productNameInput">Product Name</label>
          <input type="text"
                 id="productNameInput"
                 placeholder="Product Name"
                 [formControl]="myForm.get('productName')"
                 [(ngModel)]="productName">
        </div>

        <div *ngIf="!myForm.valid"
             class="ui error message">Form is invalid</div>
        <button type="submit" class="ui button">Submit</button>
      </form>

    </div>
  `
})

export class DemoFormNgModel{
    myForm:FormGroup;

    constructor(fb:FormBuilder){
      this.myForm = fb.group({
        'productName':['',Validators.required]
      })
    }

  onSubmit(value:any){
    console.log('you submitted value: ', value);
  }

}
