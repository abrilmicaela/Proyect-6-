import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css'
})
export class PerfilesComponent {

}
