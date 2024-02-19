import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = []; // Update with your album data

  ngOnInit(): void {
    // Fetch albums data from your service or API and populate the 'albums' array
    this.albums = [
      { title: 'Album 1', artist: 'Artist 1', cover: 'url_to_cover_1' },
      { title: 'Album 2', artist: 'Artist 2', cover: 'url_to_cover_2' },
      // Add more albums as needed
    ];
  }
}
