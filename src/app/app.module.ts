import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlePipe } from './title.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    CourseComponent, 
    AuthorsComponent, 
    FavoriteComponent, 
    TitlePipe, 
    LikeComponent, 
    ZippyComponent, 
    CourseFormComponent,
    SignupFormComponent,
    TopicsFormComponent,
    PasswordFormComponent,
    PostComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot (
      [
        {
          path: "",
          component: HomeComponent
        },
        {
          path: "followers/:id/:login",
          component: GithubProfileComponent
        },        
        {
          path: "followers",
          component: FollowersComponent
        },
        {
          path: "posts",
          component: PostComponent
        }, 
        {
          path: "**",
          component: NotFoundComponent
        },                                
      ]
    )
  ],
  providers: [ 
     CoursesService,
     AuthorsService,
     PostService,
     { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
