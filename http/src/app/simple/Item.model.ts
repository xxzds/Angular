export  class Item{
  item_url:string;
  nick:string;
  num_iid:number;
  pict_url:string;

  constructor(json:any){
      this.item_url =json['item_url'];
      this.pict_url=json['pict_url'];
  }



}
