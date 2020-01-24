import  { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  template : `
  <h2>Power boost Calculator</h2>
  <div><strong>Normal power: </strong><input [(ngModel)]="power"></div>
  <br />
  <div> <strong>Boost factor: </strong> <input [(ngModel)]="factor"></div>
  <p>
   <strong> Super Hero Power: </strong>  <span style="color: red; font-weight:  bold;">{{power | exponentialStrength: factor}}</span>
  </p>
  `
})

export class CalculatorComponent {
  power = 1;
  factor = 1;
}