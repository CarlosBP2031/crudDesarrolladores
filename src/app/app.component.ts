import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudDesarrolladores';
  
  // Recuerda que todas las rutas se deben de agregar en el routing 
  // Crear un constrcutor- inicializar
  constructor(private router :Router){}
  

  // Procedimiento, no reetorna nada
  listar(){
    this.router.navigate(["listar"]);
  }

  // Abrir el formulario par agregar
  abrirFormGuardar(){
    this.router.navigate(["guardar"])
  }

  // Abrir formulario de vacantes
  abrirFormVacantes(){
    this.router.navigate(["vacantes"])
  }

  // Abrir formularo de correo 
  abirFormCorreo(){
    this.router.navigate(["correo"])
  }
  

  



}
