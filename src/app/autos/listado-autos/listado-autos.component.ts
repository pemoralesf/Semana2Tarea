import { Component, Input, OnInit } from '@angular/core';
import { IAutos } from '../interfaces/autos';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent implements OnInit {

  @Input()
  autos: IAutos[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
