import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match2',
  templateUrl: './match2.component.html',
  styleUrls: ['./match2.component.css']
})
export class Match2Component implements OnInit {
  @Input() data: any;
  @Output() newMatches : EventEmitter <any>=new EventEmitter();
  constructor(
    private router:Router,
    private matchService:MatchService
  ) { }

  ngOnInit(): void {

  }
  compare(a: number, b: number) {
    if (a > b) {
      return 'win';
    }
    else if (a < b) {
      return 'loss';
    }
    else {
      return 'draw';
    }
  }
  goToMatch(id:number){
    this.router.navigate([`display-match/${id}`]);
    
  }
  deleteMatch(id:number){
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        alert ('match deleta');
        this.matchService.getAllMatches().subscribe(
          postDeletedMatches => {
            this.newMatches.emit(postDeletedMatches);
          }
        )
      }
    )
    
  }
  
}

