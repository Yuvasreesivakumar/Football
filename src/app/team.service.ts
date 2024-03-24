import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getMatches(): any[] {
    throw new Error('Method not implemented.');
  }
  private teams = [
    {
      id: 1,
      name: 'Real Madrid',
      country: 'Spain',
      leader: { id: 1, name: 'Zinedine Zidane', position: 'Manager' },
      description: 'Real Madrid is one of the most successful football clubs in the world, known for its rich history, iconic players, and passionate fanbase.',
      members: [
        { id: 1, name: 'Karim Benzema', position: 'Forward' },
        { id: 2, name: 'Sergio Ramos', position: 'Defender' },
        { id: 3, name: 'Toni Kroos', position: 'Midfielder' },
        { id: 4, name: 'Thibaut Courtois', position: 'Goalkeeper' },
        { id: 5, name: 'Luka Modric', position: 'Midfielder' },
        { id: 6, name: 'Vinicius Junior', position: 'Forward' },
        { id: 7, name: 'Marcelo', position: 'Defender' },
        { id: 8, name: 'Casemiro', position: 'Midfielder' },
        { id: 9, name: 'Ferland Mendy', position: 'Defender' },
        { id: 10, name: 'Marco Asensio', position: 'Forward' }
      ]
    },
    {
      id: 2,
      name: 'FC Barcelona',
      country: 'Spain',
      leader: { id: 11, name: 'Lionel Messi', position: 'Captain' },
      description: 'FC Barcelona, also known as Barça, is a powerhouse in Spanish and European football, renowned for its attacking style of play and La Masia youth academy.',
      members: [
        { id: 11, name: 'Lionel Messi', position: 'Forward' },
        { id: 12, name: 'Gerard Piqué', position: 'Defender' },
        { id: 13, name: 'Sergio Busquets', position: 'Midfielder' },
        { id: 14, name: 'Jordi Alba', position: 'Defender' },
        { id: 15, name: 'Antoine Griezmann', position: 'Forward' },
        { id: 16, name: 'Frenkie de Jong', position: 'Midfielder' },
        { id: 17, name: 'Ansu Fati', position: 'Forward' },
        { id: 18, name: 'Ousmane Dembélé', position: 'Forward' },
        { id: 19, name: 'Pedri', position: 'Midfielder' },
        { id: 20, name: 'Sergi Roberto', position: 'Midfielder' }
      ]
    },
    {
      id: 3,
      name: 'Manchester City',
      country: 'England',
      leader: { id: 21, name: 'Pep Guardiola', position: 'Manager' },
      description: 'Manchester City is a leading English football club known for its attacking brand of football and recent success in the English Premier League.',
      members: [
        { id: 21, name: 'Kevin De Bruyne', position: 'Midfielder' },
        { id: 22, name: 'Ruben Dias', position: 'Defender' },
        { id: 23, name: 'Ederson', position: 'Goalkeeper' },
        { id: 24, name: 'Raheem Sterling', position: 'Forward' },
        { id: 25, name: 'Riyad Mahrez', position: 'Forward' },
        { id: 26, name: 'Phil Foden', position: 'Midfielder' },
        { id: 27, name: 'Bernardo Silva', position: 'Midfielder' },
        { id: 28, name: 'John Stones', position: 'Defender' },
        { id: 29, name: 'Kyle Walker', position: 'Defender' },
        { id: 30, name: 'Fernandinho', position: 'Midfielder' }
      ]
    },
    {
      id: 4,
      name: 'Liverpool FC',
      country: 'England',
      leader: { name: 'Jurgen Klopp', position: 'Manager' },
      description: 'Liverpool FC, known as the Reds, is a historic English club famous for its passionate supporters, iconic Anfield stadium, and rich footballing tradition.',
      members: [
        { id: 31, name: 'Mohamed Salah', position: 'Forward' },
        { id: 32, name: 'Sadio Mané', position: 'Forward' },
        { id: 33, name: 'Virgil van Dijk', position: 'Defender' },
        { id: 34, name: 'Alisson Becker', position: 'Goalkeeper' },
        { id: 35, name: 'Roberto Firmino', position: 'Forward' },
        { id: 36, name: 'Trent Alexander-Arnold', position: 'Defender' },
        { id: 37, name: 'Andrew Robertson', position: 'Defender' },
        { id: 38, name: 'Jordan Henderson', position: 'Midfielder' },
        { id: 39, name: 'Georginio Wijnaldum', position: 'Midfielder' },
        { id: 40, name: 'Diogo Jota', position: 'Forward' }
      ]
    },
    {
      id: 5,
      name: 'Bayern Munich',
      country: 'Germany',
      leader: { name: 'Hans-Dieter Flick', position: 'Manager' },
      description: 'Bayern Munich, or FC Bayern, is the most successful football club in Germany, known for its dominance in the Bundesliga and consistent performance in European competitions.',
      members: [
        { id: 41, name: 'Robert Lewandowski', position: 'Forward' },
        { id: 42, name: 'Manuel Neuer', position: 'Goalkeeper' },
        { id: 43, name: 'Thomas Müller', position: 'Forward' },
        { id: 44, name: 'Joshua Kimmich', position: 'Midfielder' },
        { id: 45, name: 'David Alaba', position: 'Defender' },
        { id: 46, name: 'Leroy Sané', position: 'Forward' },
        { id: 47, name: 'Serge Gnabry', position: 'Forward' },
        { id: 48, name: 'Leon Goretzka', position: 'Midfielder' },
        { id: 49, name: 'Alphonso Davies', position: 'Defender' },
        { id: 50, name: 'Jérôme Boateng', position: 'Defender' }
      ]
    },
    {
      id: 6,
      name: 'Paris Saint-Germain',
      country: 'France',
      leader: { name: 'Mauricio Pochettino', position: 'Manager' },
      description: 'Paris Saint-Germain, often referred to as PSG, is a French football club with a wealthy ownership and a star-studded squad, competing at the highest level in Europe.',
      members: [
        { id: 51, name: 'Neymar Jr.', position: 'Forward' },
        { id: 52, name: 'Kylian Mbappé', position: 'Forward' },
        { id: 53, name: 'Keylor Navas', position: 'Goalkeeper' },
        { id: 54, name: 'Ángel Di María', position: 'Forward' },
        { id: 55, name: 'Marquinhos', position: 'Defender' },
        { id: 56, name: 'Mauro Icardi', position: 'Forward' },
        { id: 57, name: 'Presnel Kimpembe', position: 'Defender' },
        { id: 58, name: 'Marco Verratti', position: 'Midfielder' },
        { id: 59, name: 'Leandro Paredes', position: 'Midfielder' },
        { id: 60, name: 'Achraf Hakimi', position: 'Defender' }
      ]
    },
    {
      id: 7,
      name: 'Juventus',
      country: 'Italy',
      leader: { name: 'Andrea Pirlo', position: 'Manager' },
      description: 'Juventus FC, commonly known as Juve, is one of Italy\'s most successful football clubs, renowned for its dominant performances in Serie A and European competitions.',
      members: [
        { id: 61, name: 'Cristiano Ronaldo', position: 'Forward' },
        { id: 62, name: 'Giorgio Chiellini', position: 'Defender' },
        { id: 63, name: 'Paulo Dybala', position: 'Forward' },
        { id: 64, name: 'Gianluigi Buffon', position: 'Goalkeeper' },
        { id: 65, name: 'Leonardo Bonucci', position: 'Defender' },
        { id: 66, name: 'Federico Chiesa', position: 'Forward' },
        { id: 67, name: 'Arthur', position: 'Midfielder' },
        { id: 68, name: 'Aaron Ramsey', position: 'Midfielder' },
        { id: 69, name: 'Alvaro Morata', position: 'Forward' },
        { id: 70, name: 'Weston McKennie', position: 'Midfielder' }
      ]
    },
    {
      id: 8,
      name: 'Chelsea FC',
      country: 'England',
      leader: { name: 'Thomas Tuchel', position: 'Manager' },
      description: 'Chelsea FC, based in London, is one of England\'s top football clubs with a rich history of success in domestic and international competitions.',
      members: [
        { id: 71, name: 'N\'Golo Kanté', position: 'Midfielder' },
        { id: 72, name: 'Mason Mount', position: 'Midfielder' },
        { id: 73, name: 'Christian Pulisic', position: 'Forward' },
        { id: 74, name: 'Timo Werner', position: 'Forward' },
        { id: 75, name: 'Thiago Silva', position: 'Defender' },
        { id: 76, name: 'Ben Chilwell', position: 'Defender' },
        { id: 77, name: 'César Azpilicueta', position: 'Defender' },
        { id: 78, name: 'Jorginho', position: 'Midfielder' },
        { id: 79, name: 'Kai Havertz', position: 'Forward' },
        { id: 80, name: 'Antonio Rüdiger', position: 'Defender' }
      ]
    },
    {
      id: 9,
      name: 'AC Milan',
      country: 'Italy',
      leader: { name: 'Stefano Pioli', position: 'Manager' },
      description: 'AC Milan is one of Italy\'s most successful football clubs, with a storied history and a legacy of producing world-class players.',
      members: [
        { id: 81, name: 'Zlatan Ibrahimović', position: 'Forward' },
        { id: 82, name: 'Gianluigi Donnarumma', position: 'Goalkeeper' },
        { id: 83, name: 'Theo Hernández', position: 'Defender' },
        { id: 84, name: 'Franck Kessié', position: 'Midfielder' },
        { id: 85, name: 'Hakan Çalhanoğlu', position: 'Midfielder' },
        { id: 86, name: 'Alessio Romagnoli', position: 'Defender' },
        { id: 87, name: 'Davide Calabria', position: 'Defender' },
        { id: 88, name: 'Sandro Tonali', position: 'Midfielder' },
        { id: 89, name: 'Rafael Leão', position: 'Forward' },
        { id: 90, name: 'Simon Kjær', position: 'Defender' }
      ]
    },
    {
      id: 10,
      name: 'Borussia Dortmund',
      country: 'Germany',
      leader: { name: 'Edin Terzić', position: 'Manager' },
      description: 'Borussia Dortmund, based in Dortmund, Germany, is known for its passionate fanbase and exciting brand of football, nurturing young talent and competing at the highest level.',
      members: [
        { id: 91, name: 'Erling Haaland', position: 'Forward' },
        { id: 92, name: 'Marco Reus', position: 'Forward' },
        { id: 93, name: 'Jadon Sancho', position: 'Forward' },
        { id: 94, name: 'Mats Hummels', position: 'Defender' },
        { id: 95, name: 'Giovanni Reyna', position: 'Midfielder' },
        { id: 96, name: 'Raphaël Guerreiro', position: 'Defender' },
        { id: 97, name: 'Jude Bellingham', position: 'Midfielder' },
        { id: 98, name: 'Thomas Meunier', position: 'Defender' },
        { id: 99, name: 'Manuel Akanji', position: 'Defender' },
        { id: 100, name: 'Axel Witsel', position: 'Midfielder' }
      ]
    }


  ];

  constructor() { }

  getTeams() {
    return this.teams;
  }

  getTeamById(id: number) {
    return this.teams.find(team => team.id === id);
  }

  getTeamMembers(teamId: number) {
    const team = this.getTeamById(teamId);
    return team ? team.members : [];
  }
}
