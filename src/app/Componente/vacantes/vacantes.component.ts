import { Correo } from './../../Dominio/Correo';
import { Vacantes } from './../../Dominio/Vacantes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent {
  // Variable para consumir un servcio
  constructor(private router:Router,private service:ServicioService){}

  // Instancia de clase VACANTE
  vacante:Vacantes = new Vacantes;

  guardarV(){
    this.service.guardarV(this.vacante).subscribe(data=>{
      this.router.navigate(["listar"])
    })
  }

}
