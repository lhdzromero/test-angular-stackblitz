import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones Vaqueros';

  public coleccionRopa = ['Pantalon','Camisa','Abrigo'];

    GetNombrePrenda(){
      return this.nombrePrenda;
    }

    PrintPrenda(prenda){
      console.log(prenda);
    }

    addRopa(prenda:string):Array<string>{
      this.coleccionRopa.push(prenda);
      return this.getRopa();
    }

    deleteRopa(index:number){
      this.coleccionRopa.splice(index, 1);

      return this.getRopa();
    }

    getRopa(){
      return this.coleccionRopa;
    }



}