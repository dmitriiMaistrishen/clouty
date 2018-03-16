import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  data;
}

@Injectable()
export class DataService{

	public data;
	constructor(private store: Store<AppState>){
		this.store.pipe(select('data')).subscribe(data => {
			this.data = data;
		});
	}

	handleShout(i, j){

		for(let shipN = 0; shipN < this.data.length; shipN++){
			for(let cellN = 0; cellN < this.data[shipN].positions.length; cellN++){
				let cell = this.data[shipN].positions[cellN];
				if((i == cell.coordinates[0])&&(j == cell.coordinates[1])){
					cell.hitted = true;
					return true;
				}
			}
		}
		return false;
	}

	checkIfWin(){
		return this.data.every(ship =>{
			return ship.positions.every(position => {
				return position.hitted;
			})
		})
	}

	resetData(){
		this.store.dispatch({ type: 'RESET' });
	}
}