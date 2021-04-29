import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})

export class OfertasComponent implements OnInit {

  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
  }

}