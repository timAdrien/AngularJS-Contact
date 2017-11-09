
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {AjouterContactComponent} from './ajouter-contact/ajouter-contact.component';
import {MajContactComponent} from './maj-contact/maj-contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contactList', component: ContactListComponent},
  { path: 'contact/:id', component: ContactComponent},
  { path: 'ajouterContact', component: AjouterContactComponent},
  { path: 'majContact/:id', component: MajContactComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  routes,
  {
    enableTracing: true
  }
);
