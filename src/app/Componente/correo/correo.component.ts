import { ServicioService } from 'src/app/Service/servicio.service';
import { Component } from '@angular/core';
import { Correo } from 'src/app/Dominio/Correo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent {
  // Variable para consumir un servcio
  constructor(private router:Router,private service:ServicioService){}

  // Instancia de Clase correo;
  correo:Correo = new Correo;

  enviarC(){
    this.service.enviarC(this.correo).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }

}
