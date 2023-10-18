import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Desarrolladores } from 'src/app/Dominio/Desaarrolladores';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  // Coonstructor
  constructor(private router:Router,private ServicioService:ServicioService){}
  desarrollador : Desarrolladores = new Desarrolladores();
  ngOnInit():void{
    this.buscar();
  }

  buscar(){
    let id = localStorage.getItem("idDes");
    this.desarrollador.idDes = Number(id);

    this.ServicioService.buscarD(this.desarrollador).subscribe(data=>{
      this.desarrollador = data;
    })
  }
  eliminar(){
    this.ServicioService.eliminarD(this.desarrollador).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }

}
