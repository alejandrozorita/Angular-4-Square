import {Component} from '@angular/core';
import {LugaresService} from "../services/lugares/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'square';
  listo = false;
  nombre: string = '';

  lugares = null;

  lat: number = 40.4381311;
  lng: number = -3.8196192;

  constructor(private  lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }

  hacerAlgo() {
    alert('hacer')
  }
}
