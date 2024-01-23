import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Indicosmic.com';

  constructor() {
  }
  people: any[] = [
    {
      name: 'Dinesh Yadav',
      country: 'India'
    },
    {
      name: 'Dinesh Kumar Yadav',
      country: 'United States',
    }, {
      name: 'Dinesh yaduvanshee',
      country: 'UK',
    },
    {
      name: 'mahesh kumar',
      country: 'bangladesh'
    },
    {
      name: 'jack',
      country: 'Rassia'
    },
    {
      name: 'krush',
      country: 'chaina'
    },
    {
      name: 'tom',
      country: 'Pakistan'
    },
    {
      name: 'tommy',
      country: 'turki'
    }
  ];
  getColor(country: any) {
    switch (country) {
      case 'UK':
        return 'red';
      case 'India':
        return 'purple';
      case 'bangladesh':
        return 'yellow';
      case 'United States':
        return 'brown';
      case 'Rassia':
        return 'blue';
      case 'Pakistan':
        return 'green';
      case 'turki':
        return 'vialet';
      case 'china':
        return 'gray';
      default:
        return 'black';
    }
  }
}
