import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches2',
  templateUrl: './matches2.component.html',
  styleUrls: ['./matches2.component.css']
})
export class Matches2Component implements OnInit {
matches2:any;
  constructor(

   private matchService:MatchService 
  ) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches2 = data;
      }
    )

  }
  updateMatches(matches:any){
    this.matches2=matches;
  }


}
