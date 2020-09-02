import { ReversePipe } from './pipes/reverse.pipe';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { Matches1Component } from './components/matches1/matches1.component';
import { VideoComponent } from './components/video/video.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { Part1Component } from './components/part1/part1.component';
import { GlobalMarchesComponent } from './components/global-marches/global-marches.component';
import { InfoComponent } from './components/info/info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddMatchComponent } from './components/add-match/add-match.component';
import { Matches2Component } from './components/matches2/matches2.component';
import { Match2Component } from './components/match2/match2.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ServicesComponent,
    ContactComponent,
    AdminComponent,
    HomeComponent,
    SignupComponent,
    MatchesComponent,
    Matches1Component,
    VideoComponent,
    OurBlogComponent,
    LatestNewsComponent,
    Part1Component,
    GlobalMarchesComponent,
    InfoComponent,
    AddMatchComponent,
    Matches2Component,
    Match2Component,
    PlayersComponent,
    PlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    DisplayUserComponent,
    AllUsersComponent,
    EditComponent,
    ReversePipe
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
