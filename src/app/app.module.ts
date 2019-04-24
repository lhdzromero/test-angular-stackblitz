import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//Componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  FrutaComponent,
                  EmpleadoComponent,
                  VideojuegosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
