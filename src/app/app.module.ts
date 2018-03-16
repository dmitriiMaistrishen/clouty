import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { ShipsDisplayComponent } from './ships-display/ships-display.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { dataReducer } from './data/data';
import { DataService } from './data/data.service';


@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    ShipsDisplayComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ data: dataReducer })
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
