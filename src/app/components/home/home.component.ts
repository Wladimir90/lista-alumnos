import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alumnos = [
    {
      nombre: "Patricia",
      apellido: "Almonacid",
      asistencia: true,
      refresh : 0
    },
    {
      nombre: "Jonathan",
      apellido: "Leiva",
      asistencia: false
    },
    {
      nombre: "Camila",
      apellido: "Montt",
      asistencia: false
    },
    {
      nombre: "Pablo",
      apellido: "Muñoz",
      asistencia: true
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      asistencia: false
    },
    {
      nombre: "Nancy",
      apellido: "Rivas",
      asistencia: true
    },
    {
      nombre: "Jorge",
      apellido: "Rojas",
      asistencia: false
    },
    {
      nombre: "Augusto",
      apellido: "Silva",
      asistencia: true
    },
    {
      nombre: "Samuel",
      apellido: "Silva",
      asistencia: true
    },
    {
      nombre: "Valeria",
      apellido: "Vera",
      asistencia: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
