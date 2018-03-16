import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'ships-display',
  templateUrl: './ships-display.component.html',
  styleUrls: ['./ships-display.component.css']
})
export class ShipsDisplayComponent{

  constructor(public dataService: DataService){}

}
