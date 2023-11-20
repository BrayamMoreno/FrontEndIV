import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-crear-sensor',
  templateUrl: './crear-sensor.component.html',
  styleUrls: ['./crear-sensor.component.css']
})
export class CrearSensorComponent {

  Dispositivos: any;

  Sensor = {
    referencia: '',
    descripcion: '',
    dispositivoId: 0
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://74.235.212.31:5000/Dispositivos/GetDispositivos")
      .subscribe(
        resultado => {
          this.Dispositivos = resultado;
        }
      );
  }

  onSubmit(){
    const sensorData = {
      referencia: this.Sensor.referencia,
      descripcion: this.Sensor.descripcion,
      dispositivoId: this.Sensor.dispositivoId
    }

    console.log(sensorData)

    this.http.post('http://74.235.212.31:5000/Sensores/PostSensor', sensorData)
    .subscribe(
      (response) => {
        console.log('Solicitud exitosa', response);
      },
      (error) => {
        console.error('Solicitud fallida', error);
      }
    );

    this.Sensor.descripcion = '';
    this.Sensor.referencia = '';
    this.Sensor.dispositivoId = 0;    

  }

  


}
