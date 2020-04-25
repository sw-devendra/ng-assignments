import { Component } from '@angular/core';
import { LikeChangeEvent } from './like/like.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  likeCount = 100
  likeSelected = true

  likeChanged(eventObj: LikeChangeEvent) {
    console.log('Like Changed : ', eventObj )
  }
}
