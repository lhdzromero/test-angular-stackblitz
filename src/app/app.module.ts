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
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ColorComponent } from './color/color.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CochesComponent } from './coches/coches.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ContactoComponent,
                  ColorComponent,
                  HelloComponent,
                  FrutaComponent,
                  EmpleadoComponent,
                  VideojuegosComponent,
                  CalculatorComponent,
                  ConversorPipe,
                  CochesComponent,
                  ExponentialStrengthPipe ],
  providers:    [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
