
import { Icontact } from '../icontact';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: Icontact},
  { path: 'contactList', component: Icontact},
  { path: 'contact/:id', component: Icontact}
];

/*
export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  routes,
  {
    enableTracing: true
  }
);
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

