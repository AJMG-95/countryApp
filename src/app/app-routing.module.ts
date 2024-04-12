import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    //? Asigna un path para cargar el modulo countries
    path: 'countries',
    //? Esto es para importar las rutas de otro modulo como rutas hijas El import actúa como una promesa, que accede al path del modulo que se quiere cargar Notese que se importa el modulo principal, porque ese ya importa el modulo de rutas*/
    loadChildren: () => import('./countries/countries.module').then((m) => m.CountriesModule) //La m hace referencia al modulo y desde ahi carga el CountriesModule
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]

})

export class AppRoutingModule { }
