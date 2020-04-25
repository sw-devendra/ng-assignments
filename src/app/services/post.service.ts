import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/Operators';
import { AppError } from './../common/app.errors';
import { NotFoundError } from './../common/not-found-error';
import { BadInputError } from './../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts'
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url).pipe(map(response => response.json()))
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error)=>{
      if (error.status == 400)
        throw new BadInputError();
      
      throw new AppError(error);
    }))
  }

  updatePost(post) {
    return this.http.patch(this.url+"/"+post['id'], {isRead:true})
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id).pipe(catchError((error)=>{
      if (error.status == 404)
        throw new NotFoundError();
      
      throw new AppError(error);
    }))
  }
}
