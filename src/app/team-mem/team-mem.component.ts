import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-mem',
  templateUrl: './team-mem.component.html',
  styleUrls: ['./team-mem.component.css']
})
export class TeamMemComponent implements OnInit {
  teamMembers: any[] = [];
  country: string | undefined;
  teamName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: any }) => {
      const teamId = +params['id'];
      const team = this.teamService.getTeamById(teamId);
      if (team) {
        this.teamMembers = this.teamService.getTeamMembers(teamId) || [];
        this.teamName = team.name;
        this.country = team.country;
      }
    });
  }
}
