import { ActionReducer, Action } from '@ngrx/store';

export class GetAction implements Action {
	readonly type: string;
}

export class UpdateAction implements Action {
	readonly type: string;
    constructor(public newState: any = null){};
}

export interface Actions extends GetAction,UpdateAction{}

export function dataReducer(state, action: Actions) {
	if((!state)||(action.type == 'RESET')){
		return [
					{ "ship": "carrier", "positions": [ {'coordinates': [2,9], 'hitted': false}, 
														{'coordinates': [3,9], 'hitted': false}, 
														{'coordinates': [4,9], 'hitted': false}, 
														{'coordinates': [5,9], 'hitted': false}, 
														{'coordinates': [6,9], 'hitted': false} ] },

					{ "ship": "battleship", "positions": [ {'coordinates': [5,2], 'hitted': false}, 
														   {'coordinates': [5,3], 'hitted': false}, 
														   {'coordinates': [5,4], 'hitted': false}, 
														   {'coordinates': [5,5], 'hitted': false} ] },

					{ "ship": "cruiser", "positions": [ {'coordinates': [8,1], 'hitted': false}, 
														{'coordinates': [8,2], 'hitted': false}, 
														{'coordinates': [8,3], 'hitted': false} ] },

					{ "ship": "submarine", "positions": [ {'coordinates': [3,0], 'hitted': false}, 
														  {'coordinates': [3,1], 'hitted': false}, 
														  {'coordinates': [3,2], 'hitted': false} ] },

					{ "ship": "destroyer", "positions": [ {'coordinates': [0,0], 'hitted': false}, 
														  {'coordinates': [1,0], 'hitted': false} ] }
				]
	}
	if(action.type == 'GET'){
		return state;
	}
	if(action.type == 'UPDATE'){
		return action.newState;
	}
}