import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleados/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ColorComponent } from './color/color.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:page', component: ContactoComponent},
  {path: 'color', component: ColorComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'color/:color', component: ColorComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);