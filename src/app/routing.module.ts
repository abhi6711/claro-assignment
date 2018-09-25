/******************************* Description of Module *********************************
Routing module render the component according to the routes in the address bar.
************************************ END *************************************************/

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/tabs/home/home.component';
import { FavouriteComponent } from './component/tabs/favourite/favourite.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'favourites',
        component: FavouriteComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(ROUTES)]
})
export class RouterModuleComponent { }
