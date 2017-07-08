import { HomeComponent } from './home.component';
import { Routes} from "@angular/router";

export const homeRoutes:Routes=[
	{
        path:'',
        component:HomeComponent,
        children:[{
            path:'',
            loadChildren:'../post/post.module#PostModule'
        }]
    }
];
