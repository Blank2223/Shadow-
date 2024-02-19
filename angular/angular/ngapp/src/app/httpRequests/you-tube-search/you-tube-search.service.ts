/*import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { searchResult } from "./search-result.model";

@Injectable()
export class YouTubeSearchService {
    
    constructor(
        private http: HttpClient,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string){}

        search(query: string): Observable<searchResult[]> {
            const params: string = [
                `q=${query}`,
                `key=${this.apiKey}`,
                `part=snippet`,
                `type=video`,
                `maxResults=10`
            ].join('&');
            const queryUrl = `${this.apiUrl}?${params}`;
            return this.http.get(queryUrl).map(response =>{
                return <any>response['items'].map(item => {
                    //console.log('raw item', item);
                    return new searchResult({
                        id : item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.high.url
                    });
                });
            });
        }
    }*/