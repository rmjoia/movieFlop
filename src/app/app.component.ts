import { Component } from '@angular/core';
import { Movie } from '../app/models/movie';
import { FlopService } from '../app/services/flop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieFlops';

  constructor(private flopService: FlopService) { }

  getMovieFlops(): Movie[] {
    return this.flopService.getMovies();
  }

  getSelectedMovie(): string {
    return this.flopService.getSelectedMovie();
  }

  onVoted(movieTitle: string): void {
    this.flopService.setSelectedMovie(movieTitle);
  }
}
