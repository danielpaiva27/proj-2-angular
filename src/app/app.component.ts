import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proj-2';


  constructor(private primengConfig: PrimeNGConfig) {}


  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
