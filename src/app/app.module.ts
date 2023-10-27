import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensoresComponent } from './Data/sensores/sensores.component';
import { DispositivosComponent } from './Dispositivos/dispositivos/dispositivos.component';
import { HeaderComponent } from './Navegacion/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CrearDispositivoComponent } from './Dispositivos/crear-dispositivo/crear-dispositivo.component';

@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    SensoresComponent,
    IndexComponent,
    HeaderComponent,
    CrearDispositivoComponent
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
