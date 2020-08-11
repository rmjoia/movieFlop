import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FlopService {

  constructor() { }

  movies = [
    new Movie("Dark Phoenix", 2019, "https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SY1000_CR0,0,675,1000_AL_.jpg"),
    new Movie("Cats", 2019, "https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,631,1000_AL_.jpg"),
    new Movie("Richard Jewel", 2019, "https://m.media-amazon.com/images/M/MV5BOTFlODg1MTEtZTJhOC00OTY1LWE0YzctZjRlODdkYWY5ZDM4XkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"),
    new Movie("Playmobil the movie", 2019, "https://m.media-amazon.com/images/M/MV5BMGNlMjY2Y2MtNWVjZS00NDY5LTkwNzYtOTAxODg3Y2ZiY2Q3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,648,1000_AL_.jpg"),
  ]

}
