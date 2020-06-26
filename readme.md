# Instalar Angular CLI

#### Correr CLI
- npm install -g @angular/cli
#### Crear el proyecto
- ng new square
#### Levantar el server
- ng serve

# Declarar modulos
Desde app.modules declaramos los componentes.
Podemos importar los más básicos

#### Crear componente
En la carpeta APP declaramos el componente cno la estrucutra mínima: 
```
import { Component } from '@angular/core';
@Component({
  selector: 'app-root', // Tag HTML
  templateUrl: './app.component.html', // template de HTML
  styleUrls: ['./app.component.css'] // Llamada ficheros css
})
export class AppComponent { 
  title = 'square'; // Exportar la clase con este nombre
}
```

### Binding


