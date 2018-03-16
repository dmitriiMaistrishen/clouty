import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent{

  public field = [];
  constructor(private dataService: DataService){
  	this.constructField();
  }

  handleClick(i, j){
  	let hit = this.dataService.handleShout(i, j);
  		if(hit){
  			this.field[i][j].state = 'hit';
        if( this.dataService.checkIfWin() ){
          alert('You Win!');
          this.constructField();
          this.dataService.resetData();
        }
  		}
  		else{
  			this.field[i][j].state = 'miss';
  		}
  }

  constructField(){
    this.field = [];
    for(let i = 0; i < 10; i++){
      let line = []
      for(let j = 0; j < 10; j++){
        line.push({state: null});
      }
      this.field.push(line);
    }
  }

}
