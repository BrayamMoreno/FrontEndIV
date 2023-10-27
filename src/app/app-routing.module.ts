import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresComponent } from './Data/sensores/sensores.component';
import { DispositivosComponent } from './Dispositivos/dispositivos/dispositivos.component';
import { IndexComponent } from './index/index.component';
import { CrearDispositivoComponent } from './Dispositivos/crear-dispositivo/crear-dispositivo.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'Dispositivos', component: DispositivosComponent
  },
  {
    path: 'Dispositivos/Agregar', component: CrearDispositivoComponent
  },
  {
    path: 'Sensores', component: SensoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
