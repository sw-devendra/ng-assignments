import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { AppError } from './../common/app.errors';
import { NotFoundError } from './../common/not-found-error';
import { BadInputError } from './../common/bad-request-error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[]
  
  constructor(private service: PostService) {
  }
  createPost(input: HTMLInputElement) {
    let post = {'title': input.value}
    input.value = ""
    this.service.createPost(post).subscribe(
      response=>{
        post['id'] = response['id']
        this.posts.splice(0,0,post)
      }, 
      (error:AppError)=>{
        if (error instanceof BadInputError) 
          console.log("Bad Request error")
        else
          console.log(error.originalError)
      })
  }

  ngOnInit(){
    this.service.getPosts().subscribe((response)=> {
      this.posts = response
    })
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response=>{
        console.log(response)
      }, 
      error=>{
        alert('unexpected error')
        console.log(error)
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response=>{
        this.posts.splice(this.posts.indexOf(post),1)
        console.log(response)
      },
      (error:AppError)=>{
        if (error instanceof NotFoundError) 
          console.log("Not found error")
        else
          console.log(error.originalError)
      }
    )
  }

}
