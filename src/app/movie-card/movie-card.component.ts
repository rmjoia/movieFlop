import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() title: string
  @Input() year: number
  @Input() posterUrl: string
  @Input() selectedMovie: string

  @Output() voted = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  vote(movieTitle: string) {

    let payload = null;
    if (this.selectedMovie !== movieTitle) {
      payload = movieTitle
    }

    this.voted.emit(payload)
  }
}
