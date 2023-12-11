import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
  {
      path: '',
      component: HomeComponent
    },
    {
      path:'editar/:id',
      component: EditarComponent
    }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
