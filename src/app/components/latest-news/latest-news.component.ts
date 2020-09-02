import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  x: number;
  result: string;
  maxNbr: number;
  T: number[];
  users: any;
  news:any;




  constructor() { }

  ngOnInit(): void {
    this.result = this.moyenne(19, 15, 20);
    ////alert(this.result);
    this.maxNbr = this.max([4, 12, 8, 16, 9]);
    //alert(this.maxNbr);
    //alert(this.reverseArray([1, 5, 8, 9, 7,]));
    this.T = [5, 6, 8, 4, 7];
    //alert(this.T.reverse());
    this.users = [
      { id: 1, email: "test" },
      { id: 2, email: "testes" },
      { id: 3, email: "test@gmail.com" },
    ]


    for (let i = 0; i < this.users.length; i++) {
      let isValid = this.verifEmail(this.users[i].email);
      //alert(`User Email N° ${this.users[i].id} is ${isValid}`);

    }
    this.news = [
      { id: 1, name: 'Neymar', image: 'assets/images/person_1.jpg', date: "19/08/2020" },
      { id: 2, name: 'Messi', image: 'assets/images/bg_1.jpg', date: "20/08/2020" },
      { id: 3, name: 'Ronaldo', image: 'assets/images/person_2.jpg', date: "21/08/2020" },
      { id: 4, name: 'Ronaldo', image: 'assets/images/person_2.jpg', date: "21/08/2020" },
    ]

  }
  moyenne(math: number, phy: number, info: number) {
    let moy = (math * 2 + phy * 3 + info * 4) / 9;
    if (moy > 0 && moy < 8) {
      return 'trop faible';
    }
    else if (moy >= 8 && moy < 10) {
      return 'faible';
    }
    else if (moy >= 10 && moy < 13) {
      return 'assez bien';
    }
    else if (moy >= 13 && moy < 16) {
      return 'bien';
    }
    else if (moy >= 16 && moy < 19) {
      return 'tres bien';
    }
    if (moy >= 19 && moy < 20) {
      return 'excellent';
    }
  }
  max(T: number[]) {
    let max = T[0];
    for (let i = 0; i < T.length; i++) {
      if (T[i] > max) {
        max = T[i]

      }
    }
    return max;
  }
  reverseArray(T: number[]) {
    let reversedArray = Array(T.length);
    for (let i = T.length - 1; i >= 0; i--) {
      reversedArray[T.length - 1 - i] = T[i];

    }
    return reversedArray
  }
  négatif(T: number[]) {
    let negativeArray = Array();
    for (let j = 0; j < T.length; j++) {
      if (T[j] < 0) {
        negativeArray.push(T[j])
      }

    }
  }
  fusion(T: number[], N: number[]) {
    for (let j = 0; j < N.length; j++) {
      T.push(N[j]);

    }
    alert(T)
    T.sort();
  }
  verifEmail(email: string) {
    let regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }


}

