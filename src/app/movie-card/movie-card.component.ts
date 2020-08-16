import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieTitle: string;
  @Input() year: number;
  @Input() posterUrl: string;
  @Input() selectedMovie: string;
  @Output() voted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(movieTitle: string): void {
    this.voted.emit(movieTitle);
  }
}
