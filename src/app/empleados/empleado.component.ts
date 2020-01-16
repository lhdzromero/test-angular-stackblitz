import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
  public titulo = 'Componente empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;

  constructor(){
    this.empleado = new Empleado('Veronica', 45, 'Cocinera', true);
    this.trabajadores = [
      new Empleado('Luis', 39, 'Programador', false),
      new Empleado('Pedro', 42, 'Analista', true),
      new Empleado('Yazmin', 28, 'Tester', true),
      new Empleado('Paola', 20, 'Becaria', true)
    ];
  }

  ngOnInit(){
    //this.empleado = new Empleado('Veronica', 45, 'Cocinera', true);
    console.log(this.trabajadores);
  }


}