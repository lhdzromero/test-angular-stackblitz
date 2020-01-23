import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones Vaqueros';

    GetNombrePrenda(){
      return this.nombrePrenda;
    }

    PrintPrenda(prenda){
      console.log(prenda);
    }



}