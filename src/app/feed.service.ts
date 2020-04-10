import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFeed() {
    return this.httpClient.get('http://localhost:3000/feed/getFeed');
  }

  sendNewFeed(feed) {
    return this.httpClient.post('http://localhost:3000/feed/newFeed', feed);
  }
}
