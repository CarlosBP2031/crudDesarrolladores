import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './Componente/carrusel/carrusel.component';
import { ListarComponent } from './Componente/listar/listar.component';
import { GuardarComponent } from './Componente/guardar/guardar.component';
import { EditarComponent } from './Componente/editar/editar.component';
import { EliminarComponent } from './Componente/eliminar/eliminar.component';

// Se agrega la importacion manualmente de reactive
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { VacantesComponent } from './Componente/vacantes/vacantes.component';
import { CorreoComponent } from './Componente/correo/correo.component';
// Agregar importaciones, esto es despues de configurar la inicaializacion
@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent,
    VacantesComponent,
    CorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // se agrega
    FormsModule, // se agrega
    ReactiveFormsModule // se agrega 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
