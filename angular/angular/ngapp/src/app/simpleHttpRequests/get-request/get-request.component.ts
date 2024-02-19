import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {
    loading: boolean;

    constructor(private http: HttpClient){
      this.loading = false;
    }

    ngOnInit(): void {
      
    }

    getRequest(){
      this.loading = true;
      this.http.get('https://jsonplaceholder.com/posts/1').subscribe(
        (data) => {
          console.log(data);
          this.loading = false;
        },
        (error) =>{
          console.error(error);
          this.loading = false;
        }  
      );
    }
}
