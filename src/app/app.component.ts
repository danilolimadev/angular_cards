import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Montain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'montainlover',
      content: 'Here is a picture of a snowy montain'
    },
    {
      title: 'Montain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking123',
      content: 'I did some biking today'
    }
  ];
}
