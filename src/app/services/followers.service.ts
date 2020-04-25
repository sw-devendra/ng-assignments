import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})

export class FollowersService {
  private url = 'https://api.github.com/users/sw-devendra/followers'
  constructor(private http: Http) { }

  getFollowers() {
    return this.http.get(this.url).pipe(map(response => response.json()))
  }
}
