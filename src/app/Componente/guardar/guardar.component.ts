import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrolladores } from 'src/app/Dominio/Desaarrolladores';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  // Una variable que nos permite consumir un servico
  constructor(private router:Router, private service:ServicioService){
  }

  // Instancia de Clase
  desarrollador: Desarrolladores = new Desarrolladores;
  // Declarar procedimiento para guardar
  guardar(){
    this.service.guardarD(this.desarrollador).subscribe(data=>{
      this.router.navigate(["listar"]);
      
    })
  }

}
