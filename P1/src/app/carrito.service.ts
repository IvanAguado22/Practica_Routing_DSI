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
    imagen: "https://images.footlocker.com/is/image/FLEU/317135040020_01?wid=630&hei=630&fmt=png-alpha",
    nombre: "Camiseta tirantes",
    descripcion: "",
    precio: 10,
  }

  producto2: IProducto = {
    imagen: "https://images.footlocker.com/is/image/FLEU/317982633080_01?wid=630&hei=630&fmt=png-alpha",
    nombre: "Leggins",
    descripcion: "",
    precio: 12,
  }

  producto3: IProducto = {
    imagen: "https://images.footlocker.com/is/image/FLEU/317983357210_01?wid=630&hei=630&fmt=png-alpha",
    nombre: "Sudadera",
    descripcion: "",
    precio: 20,
  }

  producto4: IProducto = {
    imagen: "https://images.footlocker.com/is/image/FLEU/317351340210_01?wid=630&hei=630&fmt=png-alpha",
    nombre: "Gorro pescador",
    descripcion: "",
    precio: 5,
  }

  oferta1: IProducto = {
    imagen: "https://image.freepik.com/foto-gratis/retrato-bella-modelo-sonriente-peinado-afro-rizos-vestido-ropa-hipster-verano-mujer-divertida-positiva-moda-muestra-signo-paz_158538-15645.jpg",
    nombre: "Mono",
    descripcion: "",
    precio: 15,
  }

  oferta2: IProducto = {
    imagen: "https://modaenpasarela.com/wp-content/uploads/2018/08/catalogo-shein-primavera-verano-2020-camisa-perlas-600x802.jpg",
    nombre: "Blusa",
    descripcion: "",
    precio: 12,
  }

  oferta3: IProducto = {
    imagen: "https://i.pinimg.com/originals/4d/93/22/4d9322d88e47f82fd273dbb970b5e9fd.jpg",
    nombre: "Camiseta griega",
    descripcion: "",
    precio: 7,
  }

  add(product: any) {
    this.productos.push(product);
    this.subtotal += product.precio;
    this.IVA = this.subtotal * 0.21;
    this.total = this.subtotal + this.IVA;
    alert("Producto añadido al carrito");
  }
}

export interface IProducto {
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
}
