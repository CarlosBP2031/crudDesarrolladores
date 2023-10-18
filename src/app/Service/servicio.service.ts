import { Correo } from './../Dominio/Correo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desarrolladores } from '../Dominio/Desaarrolladores';
import { Vacantes } from '../Dominio/Vacantes';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  // Se agrega parametro en el contructor para agregar las peticiones http
  // de la web servce
  constructor(private http:HttpClient) { }
  urlListar = 'http://localhost:9000/DesarrolladoresWS/listar';
  urlGuardar ='http://localhost:9000/DesarrolladoresWS/guardar';
  urlBuscar ='http://localhost:9000/DesarrolladoresWS/buscar';
  urlEditar = 'http://localhost:9000/DesarrolladoresWS/editar';
  urlEliminar = 'http://localhost:9000/DesarrolladoresWS/eliminar';
  // Url para guardar una vacante
  urlGuardarV = 'http://localhost:9001/VacantesWS/guardar';
  // Url para enviar el correo al administrador
  urlEnviarC='http://localhost:9001/VacantesWS/enviarEmail';
  // Empezar a declarar los metodos para invocar la url 
  listarD(){
    return this.http.get<Desarrolladores[]>(this.urlListar);
  }

  guardarD(desarrollador:Desarrolladores){
    return this.http.post<Desarrolladores>(this.urlGuardar,desarrollador);
  }

  buscarD(desarrollador:Desarrolladores){
    return this.http.post<Desarrolladores>(this.urlBuscar,desarrollador);
  }

  editarD(desarrollador:Desarrolladores){
    return this.http.post<Desarrolladores>(this.urlEditar,desarrollador);
  }

  eliminarD(desarrollador:Desarrolladores){
    return this.http.post<Desarrolladores>(this.urlEliminar,desarrollador);
  }
  // Guardar Vacante
  guardarV(vacante: Vacantes){
    return this.http.post<Vacantes>(this.urlGuardarV,vacante);
  }
  // Enviar correo al administrador
  enviarC(correo:Correo){
    return this.http.post<Correo>(this.urlEnviarC,correo);
  }

}
