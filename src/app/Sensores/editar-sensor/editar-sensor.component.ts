import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-sensor',
  templateUrl: './editar-sensor.component.html',
  styleUrls: ['./editar-sensor.component.css']
})
export class EditarSensorComponent {

  Sensor = {
    id: 0,
    referencia: '',
    descripcion: '',
    dispositivoId: ''
  }

  Dispositivos: any
  Sensores: any

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Utiliza 'id' para cargar los datos que deseas editar
      console.log(id)

      const url = `https://localhost:7293/Sensores/GetSensor?Id=${id}`;

      this.http.get(url).subscribe(
        (resultado) => {
          this.Sensores = resultado;
          this.Sensor.id = this.Sensores.id;
          this.Sensor.referencia = this.Sensores.referencia;
          this.Sensor.descripcion = this.Sensores.descripcion;
          this.Sensor.dispositivoId = this.Sensores.dispositivoId;
        }
      );

    });

    this.http.get("https://localhost:7293/Dispositivos/GetDispositivos")
      .subscribe(
        resultado => {
          this.Dispositivos = resultado;
        }
      );
  }

  onSubmit(){
    const SensorData = {
      referencia: this.Sensor.referencia,
      descripcion: this.Sensor.descripcion,
      dispositivoId: this.Sensor.dispositivoId
    };

    console.log(this.Sensor.id);

    console.log(SensorData);

    const url = `https://localhost:7293/Sensores/PutSensor?id=${this.Sensor.id}`;

    this.http.put(url, SensorData).subscribe(response => {
      console.log('Dispositivo actualizado', response);
      this.router.navigate(['/Sensores']);
    });
  }
}
