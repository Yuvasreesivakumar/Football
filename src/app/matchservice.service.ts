import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matches = [
    { id: 1, teamA: 'Real Madrid', teamB: 'FC Barcelona', venue: 'Santiago Bernabeu' },
    { id: 2, teamA: 'Manchester City', teamB: 'Liverpool FC', venue: 'Etihad Stadium' },
    { id: 3, teamA: 'Bayern Munich', teamB: 'Paris Saint-Germain', venue: 'Allianz Arena' },
    { id: 4, teamA: 'Juventus', teamB: 'Chelsea FC', venue: 'Some Stadium' },
    { id: 5, teamA: 'AC Milan', teamB: 'Borussia Dortmund', venue: 'San Siro' },
    { id: 6, teamA: 'Real Madrid', teamB: 'Bayern Munich', venue: 'Santiago Bernabeu' },
    { id: 7, teamA: 'Liverpool FC ', teamB: 'Borussia Dortmund', venue: 'Etihad Stadium' },
    { id: 8, teamA: 'Chelsea FC', teamB: 'Paris Saint-Germain', venue: 'Allianz Arena' },
    { id: 9, teamA: 'Juventus', teamB: 'FC Barcelona', venue: 'Some Stadium' },
    { id: 10, teamA: 'AC Milan', teamB: 'Manchester City', venue: 'San Siro' },
  ];

  constructor() { }

  getMatchByTeams(team1: string | undefined, team2: string | undefined): any {
    return this.matches.find(match => match.teamA === team1 && match.teamB === team2);
  }

}
