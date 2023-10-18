import { Injectable } from '@angular/core';
// Mapeo de la BD

export class Desarrolladores{
    // Agregar las variables para consumir el servicio 
    // Iguales a las de Spring
    // @Column(name = "ID",columnDefinition = "NUMBER", nullable = false)
	// int idDes;
	// @Column(name ="NOMBRE", columnDefinition = "NVARCHAR2 (100)", nullable = false)
	// String nombreDes;
	// @Column(name ="APP", columnDefinition = "NVARCHAR2 (100)", nullable = false)
	// String appDes;
	// @Column(name ="APM", columnDefinition = "NVARCHAR2 (100)", nullable = false)
	// String apmDes;
	// @Column(name ="NUM_CEL", columnDefinition = "NUMBER", nullable = true)
	// long numeroDes;
	// @Column(name ="FECHA_NACIMIENTO", columnDefinition = "DATE", nullable = true)
	// Date fnDes;
	// @Column(name ="ESTATUS", columnDefinition = "NVARCHAR2 (100)", nullable = true)
	// int estatusDes;

    idDes:number;
    nombreDes:String;
    appDes:String;
    apmDes:String;
    numeroDes:String;
    fnDes:Date;
    estatusDes:number;
}