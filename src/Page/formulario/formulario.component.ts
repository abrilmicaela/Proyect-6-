import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  reactiveForm:FormGroup;


  constructor(){
    this.reactiveForm= new FormGroup({

      Nombre: new FormControl('',[]),
      Apellidos: new FormControl ('',[]),
      Email: new FormControl ('',[]),
      Nameuser: new FormControl('',[]),
      Telefono: new FormControl('',[]),
      Password: new FormControl ('',[]),
    },[])
  }

  cargardatos(){

    console.log(this.reactiveForm.value)
  }
}
