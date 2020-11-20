import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';/* 
import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component'; */
import { Index6Component } from './index6/index6.component';

const routes: Routes = [
    {
        path: '',
        component: Index6Component
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }/* 
    {
        path: 'index-1',
        component: Index1Component
    },
    {
        path: 'index-2',
        component: Index2Component
    },
    {
        path: 'index-3',
        component: Index3Component
    },
    {
        path: 'index-4',
        component: Index4Component
    },
    {
        path: 'index-5',
        component: Index5Component
    }, */
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
