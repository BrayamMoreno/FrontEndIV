import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-dispositivo',
  templateUrl: './crear-dispositivo.component.html',    
  styleUrls: ['./crear-dispositivo.component.css']
})
export class CrearDispositivoComponent {
  Dispositivo = {
    descripcion: '',
    longitud: '',
    latitud: ''
  }

  responseData: any;

  constructor(private http: HttpClient) { }


  onSubmit() {

    const dispositivoData = {
      descripcion: this.Dispositivo.descripcion,
      longitud: this.Dispositivo.longitud,
      latitud: this.Dispositivo.latitud
    };  

    console.log(dispositivoData)

    this.http.post('https://localhost:7293/Dispositivos/PostDispositivo', dispositivoData)
      .subscribe(
        (response) => {
          console.log('Solicitud exitosa', response);
        },
        (error) => {
          console.error('Solicitud fallida', error);
        }
      );

  }

 

}
