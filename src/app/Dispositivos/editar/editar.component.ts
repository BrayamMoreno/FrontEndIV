import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  Dispositivo = {
    id: 0,
    descripcion: '',
    longitud: '',
    latitud: ''
  }

  Dispositivos: any

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

// En el método ngOnInit o en el constructor, accede al valor de 'id' desde ActivatedRoute
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Utiliza 'id' para cargar los datos que deseas editar
      console.log(id)

      const url = `http://74.235.212.31:5000/Dispositivos/GetDispositivo?Id=${id}`;
  
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

  onSubmit(){

    const dispositivoData = {
      id: this.Dispositivo.id,
      descripcion: this.Dispositivo.descripcion,
      longitud: this.Dispositivo.longitud,
      latitud: this.Dispositivo.latitud
    };  


    console.log(dispositivoData)

    const url = `http://74.235.212.31:5000/Dispositivos/PutDispositivo?id=${this.Dispositivo.id}`;

    // Realiza la solicitud PUT utilizando HttpClient
    this.http.put(url, dispositivoData).subscribe(response => {
      // Maneja la respuesta si es necesario
      console.log('Dispositivo actualizado', response);
    
      this.router.navigate(['/Dispositivos']);
    });
  }
}
