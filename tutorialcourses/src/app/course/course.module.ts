import { NgModule } from '@angular/core'; // import de Angular para el decorador
import { CommonModule } from '@angular/common'; // básico de Angular (CommonModule) que todos los módulos deben importar 
import { CourseComponent } from './course.component';

@NgModule({
  imports: [ // valor es un arreglo de los nombres de los módulos que necesita este módulo
    CommonModule
  ],
  declarations: [CourseComponent] // valor también es un arreglo de los nombres de los componentes que declara
})  // declaración del componente que se crea por defecto al crear un módulo.
export class CourseModule { }
