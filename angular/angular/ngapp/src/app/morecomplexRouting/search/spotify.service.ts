import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export class SpotifyService {

    static BASE_URL ="https://api.spotify.com/v1";
    
    constructor(private http: HttpClient){}

    searchTrack(query: string): Observable<any>{
       /* let params: string = [
        `q=${query}`,`type=track`
    ].join("&");

    let queryURL: any = `https://api.spotify.com/v1/search?${params}`;

    return this.http.request(queryURL)*/

        return this.search(query, "track");
    
    }

    getTrack(id: string):Observable<any> {
        return this.query(`/track/${id}`);
    }
    
    query(URL: string, params?: Array<string>): Observable<any> {
        let queryURL = `${SpotifyService.BASE_URL}${URL}`;
        if(params){
            queryURL = `${queryURL}?${params.join("&")}`;
        }

        const apiKey = environment.spotifyApiKey;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${apiKey}`
        });

        const options = {
            headers: headers
        };

        return this.http.request("GET", queryURL, options);
    }

    search(query: string, type: string): Observable<any> {
        return this.query(`/search`, [`q=${query}`, `type=${type}`]);
    }
    
    
}