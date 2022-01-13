import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  name:string = 'Junu';

  constructor() { }

  ngOnInit(): void {
  }
  printValue(value:string){
    alert(value);
  }

}
