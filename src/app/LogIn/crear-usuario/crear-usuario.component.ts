import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { descriptors } from 'chart.js/dist/core/core.defaults';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  Persona: any = {
    nit: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    correo: "",
    municipioId: "",
    username: "",
    password: ""
  };


  aux: { id: number } = { id: 0 }; // Inicializa el valor seleccionado con 0

  Departamentos: any;
  Municipios: any;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(){
    const PersonaData = {
      nit: this.Persona.nit,
      nombre: this.Persona.nombre,
      apellido: this.Persona.apellido,
      direccion: this.Persona.direccion,
      telefono: this.Persona.telefono,
      correo: this.Persona.correo,
      municipioId: this.Persona.municipioId,
      username: this.Persona.username,
      password: this.Persona.password
    }

    console.log(PersonaData)


    this.http.post('https://localhost:7293/Usuarios/PostUsuario', PersonaData)
      .subscribe(
        (response) => {
          console.log('Solicitud exitosa', response);
          this.router.navigate(['/Sensores']);
        },
        (error) => {
          console.error('Solicitud fallida', error);
        }
      );

  }

  ngOnInit(){
    this.http.get("https://localhost:7293/Usuarios/GetDepartamentos")
      .subscribe(
        resultado => {
          this.Departamentos = resultado;
        }
      );
  }
  

  MunId() {
    const url = `https://localhost:7293/Usuarios/GetMunicipios?Id=${this.aux.id}`;
    this.http.get(url)
      .subscribe(
        resultado => {
          this.Municipios = resultado;
        }
      );
  }
}


