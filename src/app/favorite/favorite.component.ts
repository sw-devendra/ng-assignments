import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  selected = true
  constructor() { }

  onClick() {
    this.selected = !(this.selected)
  }

  ngOnInit(): void {
  }

}
