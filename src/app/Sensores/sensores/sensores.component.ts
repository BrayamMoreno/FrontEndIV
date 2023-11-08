import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent {

  errorMensaje: string = '';
  Sensores: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://localhost:7293/Sensores/GetSensores")
      .subscribe(
        resultado => {
          this.Sensores = resultado;
        }
      );
  }

  Eliminar(id: number){
    const url = `https://localhost:7293/Sensores/DeleteSensor?Id=${id}`;

    this.http.delete(url).subscribe(
      (response) => {
        this.http.get("https://localhost:7293/Sensores/GetSensores").subscribe(
          (resultado) => {
            this.Sensores = resultado;
          }
        );
        console.log('Solicitud exitosa', response);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.errorMensaje = 'No se pudo eliminar el Sensor';
        } else {
          this.errorMensaje = 'Error desconocido: ' + error.message;
        }
      }
    );
  }

}
