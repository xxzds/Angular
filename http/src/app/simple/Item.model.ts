export  class Item{
  item_url:string;
  nick:string;
  num_iid:number;
  pict_url:string;
  title:string;

  constructor(obj?:any){
      this.item_url = obj && obj['item_url']       || null ;
      this.nick = obj && obj['nick']               || null;
      this.num_iid = obj && obj['num_iid']         || null;
      this.pict_url = obj && obj['pict_url']       || null;
      this.title = obj && obj['title']             || null;
  }



}
