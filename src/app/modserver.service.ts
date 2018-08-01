import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModserverService {

  private contac:any[];

  constructor() { 

    this.contac = [
      {nombre:'Maria', apellido:'Lopez', cargo:'Recepsionista', telefono:2355353},
      {nombre:'Luisa', apellido:'Yepes', cargo:'Recursos Humanos', telefono:5672345},
      {nombre:'Camila', apellido:'Gomez', cargo:'Administradora', telefono:9857382},
    ];

    console.log('Mod Server')
  }

  setContactos(){
    return this.contac;
  }

}
