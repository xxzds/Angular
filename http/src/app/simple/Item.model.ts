export  class Item{
  item_url:string;
  nick:string;
  num_iid:number;
  pict_url:string;
  title:string;

  constructor(json?:any){
      this.item_url = json['item_url'] || null ;
      this.nick = json['nick'] || null;
      this.num_iid = json['num_iid'] || null;
      this.pict_url = json['pict_url'] || null;
      this.title = json['title'] || null;
  }



}
