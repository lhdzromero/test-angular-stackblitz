import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  FrutaComponent,
                  EmpleadoComponent,
                  VideojuegosComponent ],
  providers:    [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
