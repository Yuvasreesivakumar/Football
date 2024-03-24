import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { TeamMemComponent } from './team-mem/team-mem.component';
import { TeamService } from './team.service';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchComponent,
    TeamMemComponent,
    TicketBookingComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
