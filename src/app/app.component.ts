import { Component, OnInit } from '@angular/core';
import { bufferToggle, reduce } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'demoapp';
  image = '/assets/1.jpg';
  width = 100;
  height = 100;
  heading='Angular Project';
  name='Junu';
  sum=4;
  customers:any= ['Anisha','Junu'];
  color='blue';

  ngOnInit(): void {
    
  }
}

