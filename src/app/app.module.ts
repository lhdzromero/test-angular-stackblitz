import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleados/empleado.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  FrutaComponent,
                  EmpleadoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
