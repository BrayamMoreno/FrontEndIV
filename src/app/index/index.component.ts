import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Lecturas: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    setInterval(() => {
      this.http.get("http://74.235.212.31:5000/Datos/lecturas-completas")
      .subscribe(
        resultado => {
          this.Lecturas = resultado;
        }
      );
    }, 30000);// Emitir un evento para activar el debouncing
  }
}