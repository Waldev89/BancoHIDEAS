import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HideasService } from 'src/app/services/hideas.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: HideasService) { }

  ngOnInit(): void {
  }

  nuevaCategoria = {
    id:'',
    descripcion: ''
  }

  registrar(){
    console.log(this.nuevaCategoria);
    this.servicio.saveCategoria(this.nuevaCategoria).subscribe(
      (res)=> {
        console.log(res);        
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
