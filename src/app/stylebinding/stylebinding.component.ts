import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  h1Style = {
    color: 'red'
  };

  spanStyle = {
    fontWeight: 'bold'
  };

  color1: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
