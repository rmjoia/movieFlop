import { Component } from '@angular/core';
import { Movie } from '../app/models/movie'
import { FlopService } from '../app/services/flop.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieFlops';

  constructor(private flopService: FlopService) { }

  getMovieFlops(){
    return this.flopService.movies
  }

  onVoted(movieTitle: string) {

    console.log(movieTitle)
    this.getMovieFlops().forEach((movie: Movie) => {
      movie.selectedMovie = movieTitle
    })
  }
}