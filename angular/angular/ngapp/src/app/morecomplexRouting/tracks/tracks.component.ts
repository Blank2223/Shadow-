import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../search/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit{
    ngOnInit():void{
      this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
    }
}
