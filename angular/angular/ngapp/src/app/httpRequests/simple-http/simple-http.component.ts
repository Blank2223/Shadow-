import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  
  data: Object = {};
  loading: boolean;
  
  constructor(private http: HttpClient){
    this.loading = false;
  }

    ngOnInit(): void {
      
    }

    makeRequest():void{
        this.loading = true;
        this.http.get('https://jsonplaceholder.com/posts/1').subscribe(data =>{
          this.data = data;
          this.loading = false;
        });
    }
}
