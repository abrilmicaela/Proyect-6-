import { Routes } from '@angular/router';
import { FormularioComponent } from '../Page/formulario/formulario.component';
import { PerfilesComponent } from '../Page/perfiles/perfiles.component';
import { InformacionComponent } from '../Page/informacion/informacion.component';


export const routes: Routes = [
  {path:'', pathMatch:'full',component: PerfilesComponent},
  {path:'informacion',component:InformacionComponent},
  {path:'formulario',component:FormularioComponent}
];
