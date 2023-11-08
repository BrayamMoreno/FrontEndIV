import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosComponent } from './Dispositivos/dispositivos/dispositivos.component';
import { IndexComponent } from './index/index.component';
import { CrearDispositivoComponent } from './Dispositivos/crear-dispositivo/crear-dispositivo.component';
import { EditarComponent } from './Dispositivos/editar/editar.component';
import { SensoresComponent } from './Sensores/sensores/sensores.component';
import { CrearSensorComponent } from './Sensores/crear-sensor/crear-sensor.component';
import { EditarSensorComponent } from './Sensores/editar-sensor/editar-sensor.component';
import { InformacionComponent }  from './Sensores/informacion/informacion.component';
import { CrearUsuarioComponent } from './LogIn/crear-usuario/crear-usuario.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'Dispositivos', component: DispositivosComponent },
  { path: 'Dispositivos/Agregar', component: CrearDispositivoComponent },
  { path: 'Dispositivos/Editar/:id', component: EditarComponent },
  { path: 'Sensores', component: SensoresComponent},
  { path: 'Sensores/Agregar', component: CrearSensorComponent},
  { path: 'Sensores/Editar/:id', component: EditarSensorComponent},
  { path: 'Dispositivo/Info/:id', component: InformacionComponent},
  { path: 'LogIn/Agregar', component: CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
