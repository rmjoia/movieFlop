import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flop-vote',
  templateUrl: './flop-vote.component.html',
  styleUrls: ['./flop-vote.component.css']
})
export class FlopVoteComponent implements OnInit {

  @Input() selectedMovie: string;

  @Input() movieTitle = '';

  @Output() voted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  vote(movieTitle: string): void {

    let payload = null;
    if (this.selectedMovie !== movieTitle) {
      payload = movieTitle;
    }

    this.voted.emit(payload);
  }
}
