import { Component, OnInit } from '@angular/core';;
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {
    data: Object = {
      body:'bar',
      title: 'foo',
      userId: 1
    }
    loading: boolean;

    constructor(private http: HttpClient){
      this.loading = false;
    }

    ngOnInit(): void {
      
    }

    postRequest(){
      this.loading = true;
      this.http.post('https://jsonplaceholder.com/posts', JSON.stringify(
       this.data
      ))
      .subscribe((data) => {
        console.log(data);
        this.loading = false;
      }, (error) => {
        console.error(error);
        this.loading = false;
      });
    }
}
