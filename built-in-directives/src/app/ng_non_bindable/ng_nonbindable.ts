import {Component} from "@angular/core";
@Component({
  selector:'ng-non-bindable-sample-app',
  template:`
    <div class='ngNonBindableDemo'>
      <span class="bordered">{{ content }}</span>
      <span class="pre" ngNonBindable>
        &larr; This is what {{ content }} rendered
      </span>
    </div>
  `
})

export class NgNonBindableSampleApp{
  content: string;

  constructor() {
    this.content = 'Some text';
  }
}
