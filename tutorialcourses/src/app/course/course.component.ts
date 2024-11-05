import { Component, OnInit } from '@angular/core'; // importa el archivo del componente, OnInit es una interfaz que se implementa para definir el método ngOnInit

@Component({ // decorador que define las propiedades del componente
  selector: 'app-course', // representa la etiqueta que se usará para "invocar" el componente directamente sobre alguna vista
  templateUrl: './course.component.html', // representa el nombre del archivo que contiene la vista del componente
  styleUrls: ['./course.component.css'] // define la plantilla y la hoja de estilos del componente
})
export class CourseComponent implements OnInit {

  constructor() { } // inicializa el componente mediante el constructor

  ngOnInit() { // por defecto, se ejecuta cuando el componente se inicia
  }

}
