import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})

export class FollowersComponent implements OnInit {
  followers = []
  constructor(private service: FollowersService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {

    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      combined=>{
        console.log(combined)
        this.service.getFollowers().subscribe(followers => this.followers = followers)
      })
    
  }
}
