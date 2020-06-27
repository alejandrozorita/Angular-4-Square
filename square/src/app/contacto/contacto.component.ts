import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {

  lugares: any = [
    {
      id: 1,
      plan: 'gratuito',
      cercania: 1,
      distancia: 1,
      activo: true,
      nombre: "Floristería",
      description: 'Esta es la descripción del lugar'
    },
    {
      id: 2,
      plan: 'gratuito',
      cercania: 1,
      distancia: 1.8,
      activo: false,
      nombre: "Pajarería",
      description: 'Esta es la descripción del lugar'
    },
    {
      id: 3,
      plan: 'pago',
      cercania: 2,
      distancia: 5,
      activo: true,
      nombre: "Veterinario",
      description: 'Esta es la descripción del lugar'
    },
    {
      id: 4,
      plan: 'gratuito',
      cercania: 2,
      distancia: 10,
      activo: true,
      nombre: "Centro Comercia",
      description: 'Esta es la descripción del lugar'
    },
    {
      id: 5,
      plan: 'pago',
      cercania: 3,
      distancia: 30,
      activo: true,
      nombre: "Cine",
      description: 'Esta es la descripción del lugar'
    }
  ];
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.filter((lugar) => {
      return lugar.id == this.id
    })[0] || null;
  }
}
