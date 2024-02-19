import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.css']
})
export class DeleteRequestComponent implements OnInit {
  data: Object = {};  
  loading: boolean;

    constructor(private http: HttpClient){
      this.loading = false;
    }

    ngOnInit(): void {
      
    }

    deleteRequest(){
      this.loading = true;
      this.http.delete('https://jsonplaceholder.com/posts/1')
      .subscribe((data) => {
        console.log(data);
        this.loading = false;
      }, (error) => {
        console.error(error);
        this.loading = false;
      });
    }
}
