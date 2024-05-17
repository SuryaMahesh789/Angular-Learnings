import { Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';

export const routes: Routes = [
    {
        path:'admin',
        loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
        
    },

    // normal way of adding routes to components 
    // {
    //     path:'add-user',
    //     component:AddUserComponent
    // }

    // routes adding for lazy loading components 
    {
        path:'add-user',
        loadComponent:() => import('./admin/add-user/add-user.component').then(c=>c.AddUserComponent)
    }
];
