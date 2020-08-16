import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopVoteComponent } from './flop-vote.component';

describe('FlopVoteComponent', () => {
  let component: FlopVoteComponent;
  let fixture: ComponentFixture<FlopVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlopVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlopVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
