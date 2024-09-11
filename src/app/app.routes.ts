import { Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { PerfilesComponent } from '../perfiles/perfiles.component';
import { InformacionComponent } from '../informacion/informacion.component';


export const routes: Routes = [
  {path:'', pathMatch:'full',component: FormularioComponent},
  {path:'perfiles',component:PerfilesComponent},
  {path:'informacion',component:InformacionComponent}
];
