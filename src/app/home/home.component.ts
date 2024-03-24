import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  teams:any = [];

  constructor(private router: Router, private teamService: TeamService) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();

  }
  viewTeamMembers(teamNumber: number): void {
    this.router.navigate(['/team', teamNumber]);
  }
}
