import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;
  constructor() { }

  ngOnInit(): void {
    this.players=[
      { id: 1, name:'Romolu to stay at Real Nadrid',date: "19/08/2020",image:"assets/images/img_3.jpg" },
      { id: 2, name:' Real Nadrid',date: "20/08/2020",image:"assets/images/img_3.jpg" }
      
    ]
  }

}
