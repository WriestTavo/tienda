import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  constructor(public http: HttpClient) {
    console.log('Hello ProductosService Provider');
  }

}
