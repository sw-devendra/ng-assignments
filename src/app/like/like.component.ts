import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})


export class LikeComponent {
  @Input() likesCount: number
  @Input() isActive: boolean
  @Output() change = new EventEmitter
  constructor() {
    this.likesCount = 0
    this.isActive = false
  }

  onClick() {
    this.likesCount += (this.isActive?-1:1)
    this.isActive = !this.isActive
    this.change.emit({newValue: this.isActive, newLikes: this.likesCount} )
  }

}

export interface LikeChangeEvent {
  newValue: boolean
  newLikes: number
}
