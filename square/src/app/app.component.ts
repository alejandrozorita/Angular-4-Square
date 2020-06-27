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
    {nombre: "Floristería"},
    {nombre: "Pajarería"},
    {nombre: "Veterinario"}
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
