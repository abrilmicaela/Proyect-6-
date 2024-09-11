import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      Telefono: new FormControl('',[])
    },[])
  }

  cargardatos(){

    console.log(this.reactiveForm.value)
  }
}
