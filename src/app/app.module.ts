import { HttpClient, HttpClientModule } from '@Angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPokemonComponent } from './components/app-pokemon/app-pokemon.component';
import { ApiPokemonService } from  './services/api-pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    AppPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ApiPokemonService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
