import {PostlistComponent} from "./postlist/postlist.component";
import {Routes} from "@angular/router";
export const postRoutes:Routes=[
  {
		path:'',
		redirectTo:'page/1',
		pathMatch:'full'
	},
	{
		path:'page/:page',
		component:PostlistComponent
	}
];
