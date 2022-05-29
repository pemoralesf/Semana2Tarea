import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    ListadoAutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaInicioComponent,
    ListadoAutosComponent
  ]
})
export class AutosModule { }
