import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ActoresComponent } from './components/actores/actores.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ModalActorComponent } from './components/actores/modal-actor/modal-actor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ModalPeliculaComponent } from './components/peliculas/modal-pelicula/modal-pelicula.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActoresComponent,
    HomeComponent,
    ModalActorComponent,
    PeliculasComponent,
    ModalPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
