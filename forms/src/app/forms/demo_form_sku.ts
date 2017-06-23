import {Component} from "@angular/core";
/**
 * 说明，使用ngForm、ngModel必须导入FormsModule模块,系统会自动创建formGroup、formControl
 */
@Component({
  selector:'demo-form-sku',
  template:`
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku</h2>
      <form #f="ngForm"
            (ngSubmit)="onSubmit(f.value)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 name="sku" ngModel>
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})

export class DemoFormSku{
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
