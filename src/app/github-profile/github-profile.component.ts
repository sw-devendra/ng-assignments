import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log('GithubProfileComponent ctor')
  }

  ngOnInit() {
    console.log('GithubProfileComponent ngOnInit')
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
    })
  }

}
