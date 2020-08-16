import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlopVoteComponent } from './flop-vote/flop-vote.component';
import { RentalCartComponent} from './rental-cart/rental-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FlopVoteComponent,
    RentalCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
