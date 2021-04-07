import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  constructor(
    private router:Router
    ) { }

    ngOnInit(): void {
    }
    Info = {
      id:"",
      categoria :"",
      id_proy:"",
      tit_idea:"",
      fecha_cre:"",
      descripcion:"",
      estado:"",
      tecnologia:"",
      inversion:"",
      responsable:"",
      fecha_mod:"",
      propietario:"",
      hora_mod:"",
    }
    InfoValidator = {
      id:false,
      categoria:false,
      id_proy:false,
      tit_idea:false,
      fecha_cre:false,
      descripcion:false,
      estado:false,
      tecnologia:false,
      inversion:false,
      responsable:false,
      fecha_mod:false,
      propietario:false,
      hora_mod:false,
    }
    valid_idea() {
      // Validate info.
      if (this.Info.id === ""){
        console.log("ID vacío")
        this.InfoValidator.id=true;
      }else{
        this.InfoValidator.id=false;
      }
      if (this.Info.categoria === ""){
        console.log("Categoria vacía")
        this.InfoValidator.categoria=true;
      }else{
         this.InfoValidator.categoria=false;
      }
      //Validar que los camps no estan vacios y enonces ir a home
      if(this.Info.id !== "" && this.Info.categoria !== ""){
        localStorage.setItem("Info",JSON.stringify(this.Info))
        this.router.navigate(['/'])
      }
    }
  
  }