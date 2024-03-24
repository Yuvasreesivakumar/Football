import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

user: any = {};
userArray: Array<any> = [];
age: number | null = null;
Teams = ['Real Madrid','FC Barcelona', 'Manchester City', 'Liverpool FC', 'Bayern Munich', 'Paris Saint-Germain' ,'Juventus', 'Chelsea FC', 'AC Milan', 'Borussia Dortmund' ];

onClick() {
  this.calculateAge();
  this.userArray.push({
    name: this.user.name,
    team: this.user.team,
    dob:this.user.dob,
    age:this.age,
  });


}
calculateAge() {
  if (this.user.dob) {
    const today = new Date();
    const birthDate = new Date(this.user.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.age = age;
  } else {
    this.age = null;
  }
}
onsubmit(logform: any) {
  console.log(this.user);
  console.log(this.age);
  }
}
