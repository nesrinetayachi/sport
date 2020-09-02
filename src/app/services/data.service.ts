import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {  id:  1,  scoreOne:  5, scoreTwo: 7, teamOne: 'FCB', teamTwo: 'Madrid'},
    {  id:  2,  scoreOne:  2, scoreTwo: 5, teamOne: 'CAB', teamTwo: 'BRS'},
    {  id:  3,  scoreOne:  1, scoreTwo: 3, teamOne: 'CSS', teamTwo: 'CA'}

   ];
   let users=[
    {id:1,firstName:'ali',lastName:'trabelsi'},
    {id:2,firstName:'ahmed',lastName:'trabelsi'},
    {id:3,firstName:'amin',lastName:'trabelsi'},
    {id:1,firstName:'ali',lastName:'trabelsi'},
   ];

   return {matches, users};

  }
  
    
  
}