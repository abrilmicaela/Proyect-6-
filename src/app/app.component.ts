import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilesComponent } from '../perfiles/perfiles.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PerfilesComponent,InformacionComponent,FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Api';
}
