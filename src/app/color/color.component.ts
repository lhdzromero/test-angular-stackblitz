import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'color',
  templateUrl: './color.component.html'
})

export class ColorComponent{
    public color:String = 'green';

    constructor(
      private _route:ActivatedRoute, 
      private _router: Router )
      { }

  ngOnInit(){
    this._route.params.forEach((p: Params) =>{
      this.color = p['color'];
    });
  }
}