import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit{
  artists: any[] = []; // Update with your artist data

  ngOnInit(): void {
    // Fetch artists data from your service or API and populate the 'artists' array
    this.artists = [
      { name: 'Artist 1', image: 'url_to_image_1' },
      { name: 'Artist 2', image: 'url_to_image_2' },
      // Add more artists as needed
    ];

  }
}
