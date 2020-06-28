import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  constructor() {
  }

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

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {
      return lugar.id == id
    })[0] || null;
  }
}
