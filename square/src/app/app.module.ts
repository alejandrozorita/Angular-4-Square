import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc1etgGo9gexg7uylvn2xu4f4DUhLd7rM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
