import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/GithubService';

@Component({
  selector: 'app-abonnes',
  templateUrl: './abonnes.component.html',
  styleUrls: ['./abonnes.component.css']
})
export class AbonnesComponent implements OnInit {

  loginUser!:string;
  listFollowers!:any[];

  constructor(private route:ActivatedRoute,private githubService:GithubService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const paramValue = params['username'];
      this.loginUser=paramValue;
 
    });

  this.getUserFollowers();

  }


    getUserFollowers(){
      this.githubService.getUserFollowers(this.loginUser).subscribe(
        data => {
          this.listFollowers=data;
              
        },
      
        (error)=> { console.log(error);}
        
        );


      

    }












































  }














  
