import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
match:any;
id:number;
  constructor(private matchservice:MatchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');  
    this.matchservice.getMatchById(this.id).subscribe(
      x=>{
        this.match =x;
      }
    )
  }

}
