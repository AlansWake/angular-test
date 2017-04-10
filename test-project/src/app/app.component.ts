import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { RuterService } from './ruter.service';

import { Stop } from './stop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stops in Oslo!';

  stops: Stop[];

  testString = 'Test2';

  constructor(private ruterService: RuterService) {
  }

  ngOnInit(): void {
    this.ruterService
        .getAllStops()
        .then(data => this.stops = data);
  }
}
