import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    query: string;
    results: object;

    constructor(private spotify: SpotifyService,
                 private router: Router,
                 private route: ActivatedRoute){
        this.router.queryParams.subscribe(params => {this.params['query'] || '';});
      }

      search():void{
        console.log('this.query', this.query);
        if(!this.query){
          return;
        }

        this.spotify.searchTrack(this.query).subscribe((res:any)=> this.renderResults(res));
      }

      renderResults(res:any): void{
        this.results = {};
        if(res && res.tracks && res.tracks.items){
          this.results = res.tracks.items;
        }
      }

      ngOnInit(): void {
        this.search();
      }

      submit(query: string): void{
        this.router.navigate(['search'], { queryParams: { query: query } })
        .then(_ => this.search());
      }
}
