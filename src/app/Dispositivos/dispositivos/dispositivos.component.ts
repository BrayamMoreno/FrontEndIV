import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css'],
})


export class DispositivosComponent {

  
  Dispositivos: any
  errorMensaje: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://74.235.212.31:5000/Dispositivos/GetDispositivos")
      .subscribe(
        resultado => {
          this.Dispositivos = resultado;
        }
      );
  }
  
  Eliminar(id: number) {
    
    const url = `http://74.235.212.31:5000/Dispositivos/DeleteDispositivo?Id=${id}`;

    this.http.delete(url).subscribe(
      (response) => {
        this.http.get("http://74.235.212.31:5000/Dispositivos/GetDispositivos").subscribe(
          (resultado) => {
            this.Dispositivos = resultado;
          }
        );
        console.log('Solicitud exitosa', response);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errorMensaje = 'No se pudo eliminar el dispositivo, Porque esta asociado a un sensor';
        } else {
          this.errorMensaje = 'Error desconocido: ' + error.message;
        }
      }
    );
  }

}
