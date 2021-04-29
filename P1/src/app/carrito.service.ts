import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: any[];
  subtotal: number = 0;
  IVA: number = 0;
  total: number = 0;

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
    this.subtotal += product.precio;
    this.IVA = this.subtotal * 0.21;
    this.total = this.subtotal + this.IVA;
    alert("Producto añadido al carrito");
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
