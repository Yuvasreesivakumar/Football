import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../matchservice.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  name: string = '';
  mobile: string = '';
  selectedTicket: number | undefined;
  tickets: (number | undefined)[] = [1, 2, 3, 4, 5];

  team1: string | undefined;
  team2: string | undefined;
  match: any;

  constructor(private route: ActivatedRoute, private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.team1 = params['team1'];
      this.team2 = params['team2'];

      console.log('Team 1:', this.team1);
      console.log('Team 2:', this.team2);

      this.match = this.matchService.getMatchByTeams(this.team1, this.team2);
      console.log('Match:', this.match);
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(['/']);
      alert("Your Ticket is Booked");
    }
  }

}
