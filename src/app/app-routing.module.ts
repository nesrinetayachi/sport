import { EditComponent } from './components/edit/edit.component';

import { DisplayUserComponent } from './components/display-user/display-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { Matches2Component } from './components/matches2/matches2.component';
import { PlayersComponent } from './components/players/players.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';





const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'login',component: LoginComponent},
  {path : 'services' , component: ServicesComponent},
  {path : 'admin' , component: AdminComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'matches', component: MatchesComponent},
  {path : 'add-match', component: AddMatchComponent},
  {path : 'matches2', component: Matches2Component},
  {path : 'players', component: PlayersComponent},
  {path : 'display-match/:id', component: DisplayMatchComponent},
  {path : 'display-user/:id',component:DisplayUserComponent},
  {path : 'edit-user/:id',component:EditComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
