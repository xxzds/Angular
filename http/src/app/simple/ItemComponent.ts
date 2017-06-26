import {Component, Input} from "@angular/core";
import {Item} from "./Item.model";

@Component({
   selector:'item',
   template:`     
     <img [src]="item.pict_url"  width="20%" height="20%"/>
     
   `
})


export  class ItemComponent {
  @Input() item:Item;
}
