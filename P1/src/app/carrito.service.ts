import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: any[];

  constructor() {
    this.productos = [];
  }

  producto1: IProducto = {
    imagen: "https://images.footlocker.com/is/image/FLEU/317982633080_01?wid=630&hei=630&fmt=png-alpha",
    nombre: "Leggins",
    precio: 12,
  }

  add(product: any) {
    this.productos.push(product);
    console.log(this.productos)
  }

  get() {
    return this.productos;
  }

}

export interface IProducto {
  imagen: string;
  nombre: string;
  precio: number;
}
