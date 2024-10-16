import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { EspecialidadService } from './servicios/especialidad.service';



@NgModule({
  declarations: [
    EspecialidadComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule
  ],
  providers: [
    EspecialidadService
  ]
})
export class EspecialidadModule { }
