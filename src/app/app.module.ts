import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DispositivosComponent } from './Dispositivos/dispositivos/dispositivos.component';
import { HeaderComponent } from './Navegacion/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CrearDispositivoComponent } from './Dispositivos/crear-dispositivo/crear-dispositivo.component';
import { EditarComponent } from './Dispositivos/editar/editar.component';
import { SensoresComponent } from './Sensores/sensores/sensores.component';
import { CrearSensorComponent } from './Sensores/crear-sensor/crear-sensor.component';
import { EditarSensorComponent } from './Sensores/editar-sensor/editar-sensor.component';
import { InformacionComponent } from './Sensores/informacion/informacion.component';
import { CrearUsuarioComponent } from './LogIn/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    SensoresComponent,
    IndexComponent,
    HeaderComponent,
    CrearDispositivoComponent,
    EditarComponent,
    CrearSensorComponent,
    EditarSensorComponent,
    InformacionComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
