import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {RouterModule, Routes} from "@angular/router";

import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {LugaresService} from "./services/lugares/lugares.service";

import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {CrearComponent} from "./crear/crear.component";

const appRoutes: Routes = [
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear-lugar', component: CrearComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc1etgGo9gexg7uylvn2xu4f4DUhLd7rM'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
