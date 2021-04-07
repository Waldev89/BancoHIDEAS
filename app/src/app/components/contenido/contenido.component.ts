import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HideasService } from 'src/app/services/hideas.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  @Input() hidea: {
    _id: '',
    categoria: '',
    titulo_idea: '',
    fecha_creacion: '',
    descripcion: '',
    estado: '',
    responsable: ''
  };

  hideas:any = []

  constructor(private ruta: ActivatedRoute, private servicio: HideasService) { }

  ngOnInit(): void {

    //Hacemos consulta a base de datos para obtener las ideas
    this.servicio.getAll( )
      .subscribe((hideas) => {
        this.hideas = hideas        
      }, (error) => {
        console.error('Error getting ideas: ', error)
      })
  }
}