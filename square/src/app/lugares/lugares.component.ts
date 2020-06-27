import {Component} from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'square';
  listo = false;
  nombre: string = '';
  lugares: any = [
    {id: 1,plan: 'gratuito', cercania:1, distancia: 1, activo: true, nombre: "Floristería"},
    {id: 2,plan: 'gratuito', cercania:1, distancia: 1.8, activo: false, nombre: "Pajarería"},
    {id: 3,plan: 'pago', cercania:2, distancia: 5, activo: true, nombre: "Veterinario"},
    {id: 4,plan: 'gratuito', cercania:2, distancia: 10, activo: true, nombre: "Centro Comercia"},
    {id: 5,plan: 'pago', cercania:3, distancia: 30, activo: true, nombre: "Cine"}
  ];

  lat: number = 40.4381311;
  lng: number = -3.8196192;

  constructor() {
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }

  hacerAlgo() {
    alert('hacer')
  }
}
