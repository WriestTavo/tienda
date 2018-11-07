import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// falta la conexion al servidor investigar seccion 12 (161.)

@Injectable()
export class CarritoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CarritoProvider Provider');
  }

}
