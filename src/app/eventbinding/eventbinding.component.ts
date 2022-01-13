import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(value: string):void{
    alert(`${value} is fired`);
  }

  onChange():void{
    console.log('Input field has changed');
  }
}
