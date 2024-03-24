import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  teams: string[] = [
    'Real Madrid', 'FC Barcelona', 'Manchester City', 'Liverpool FC', 'Bayern Munich',
    'Paris Saint-Germain', 'Juventus', 'Chelsea FC', 'AC Milan', 'Borussia Dortmund'
  ];

  matches: any[] = [
    { team1: this.teams[0], team2: this.teams[1], date: '2024-02-21'},
    { team1: this.teams[2], team2: this.teams[3], date: '2024-02-22'},
    { team1: this.teams[4], team2: this.teams[5], date: '2024-02-23'},
    { team1: this.teams[6], team2: this.teams[7], date: '2024-02-24'},
    { team1: this.teams[8], team2: this.teams[9], date: '2024-02-25'},
    { team1: this.teams[0], team2: this.teams[4], date: '2024-02-26'},
    { team1: this.teams[3], team2: this.teams[9], date: '2024-02-27'},
    { team1: this.teams[7], team2: this.teams[5], date: '2024-02-28'},
    { team1: this.teams[6], team2: this.teams[1], date: '2024-02-29'},
    { team1: this.teams[8], team2: this.teams[2], date: '2024-03-01',}
  ];

  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private router: Router) {}

  get visibleMatches(): any[] {
    const startIndex = (this.pageNumber - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.matches.length);
    return this.matches.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
    }
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.matches.length / this.pageSize);
  }

  navigateToTicketBooking(match: any): void {
    const team1 = match.team1;
    const team2 = match.team2;
    this.router.navigate(['/ticket-booking', team1, team2 ]);
  }
}
