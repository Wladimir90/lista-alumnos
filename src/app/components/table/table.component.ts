import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  alumnosArray: any[] = [];

  visibilidad = 0;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(){
    if(this.visibilidad == 0){
      this.visibilidad = 1;
    }else{
      this.visibilidad = 0;
    }
   
  }

}
