import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : './Form/form.module#FormModule'
  },
  {
    path: 'search',
    loadChildren : './Search/search.module#SearchModule'
  },
  {
    path: '**',
    loadChildren : './Form/form.module#FormModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
