import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  
  Dispositivo = {
    id: 0,
    descripcion: '',
    longitud: '',
    latitud: ''
  }

  Dispositivos: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const url = `https://localhost:7293/Dispositivos/GetDispositivo?Id=${id}`;
  
    this.http.get(url).subscribe(
      (resultado) => {
        this.Dispositivos = resultado;
        this.Dispositivo.id = this.Dispositivos.id;
        this.Dispositivo.descripcion = this.Dispositivos.descripcion;
        this.Dispositivo.longitud = this.Dispositivos.longitud;
        this.Dispositivo.latitud = this.Dispositivos.latitud;
      }
    );

    });
  }
}
