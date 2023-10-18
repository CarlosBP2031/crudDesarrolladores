import { ServicioService } from './../../Service/servicio.service';
import { Desarrolladores } from './../../Dominio/Desaarrolladores';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

// Logica
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  // Declarar objeto
  desarrolladores:Desarrolladores[];


  constructor(private router:Router, private service:ServicioService){};

  ngOnInit():void{
    this.service.listarD().subscribe(data=>{
      this.desarrolladores = data;
      console.log(data);

    })
  }

  abrirFormEditar(desarrollador:Desarrolladores){
    localStorage.setItem("idDes",desarrollador.idDes.toString());
    this.router.navigate(["editar"]);
    
  }

  abrirFormEliminar(desarrollador:Desarrolladores){
    localStorage.setItem("idDes",desarrollador.idDes.toString());
    this.router.navigate(["eliminar"]);
    
  }
}
