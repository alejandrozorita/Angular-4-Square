import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'square';
  listo = false;
  nombre: string = '';
  lugares: any = [
    {plan: 'gratuito', cercania:1, distancia: 1, activo: true, nombre: "Floristería"},
    {plan: 'gratuito', cercania:1, distancia: 1.8, activo: false, nombre: "Pajarería"},
    {plan: 'pago', cercania:2, distancia: 5, activo: true, nombre: "Veterinario"},
    {plan: 'gratuito', cercania:2, distancia: 10, activo: true, nombre: "Centro Comercia"},
    {plan: 'pago', cercania:3, distancia: 30, activo: true, nombre: "Cine"}
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
