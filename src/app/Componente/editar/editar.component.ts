import { Desarrolladores } from './../../Dominio/Desaarrolladores';
import { ServicioService } from './../../Service/servicio.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
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
  editar(){
    this.ServicioService.editarD(this.desarrollador).subscribe(data=>{
      this.router.navigate(["listar"]);
      
    })
  }


}
