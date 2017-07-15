import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  public panelTitle:string;

  @Input()
  public userId:string;

  constructor() {
    //构造组件的时候，@Input的属性还没有值
    console.log(this.panelTitle);
  }

  ngOnInit() {
    //组件初始化完成之后，panelTitle才会有值
    console.log(this.panelTitle);
  }

  followBtnClick(){

  }

}
