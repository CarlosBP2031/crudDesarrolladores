import { EliminarComponent } from './Componente/eliminar/eliminar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componente/listar/listar.component';
import { EditarComponent } from './Componente/editar/editar.component';
import { GuardarComponent } from './Componente/guardar/guardar.component';
import { VacantesComponent } from './Componente/vacantes/vacantes.component';
import { CorreoComponent } from './Componente/correo/correo.component';

//Arreglo de rutas que necesito para consumir mis
// componenetes 
const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'editar',component:EditarComponent},
  {path:'eliminar',component:EliminarComponent},
  {path:'guardar',component:GuardarComponent},
  {path:'vacantes',component:VacantesComponent},
  {path:'correo',component:CorreoComponent}

];

// clase que configura el inyector y el compilador de un componente
//  para que otros componentes puedad utilizarlo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
