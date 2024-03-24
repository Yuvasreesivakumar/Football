import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { TeamMemComponent } from './team-mem/team-mem.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { NgForm } from '@angular/forms';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'match',
    component:MatchComponent
  },
  { path: 'team/:id',
   component:TeamMemComponent
  },
  {
    path:'ticket-booking/:team1/:team2',
    component: TicketBookingComponent
  },
  {
    path:'',
    component:BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Router]
})
export class AppRoutingModule {}
