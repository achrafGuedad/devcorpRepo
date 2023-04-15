import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GithubService } from '../services/GithubService';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  
  userRepositories:any[]=[];
  loginUser!:string;

  name!:string;
  
  repositoryDescription!:string;
  repositoryStargazers_count!:number;
  
  

  constructor(private route: ActivatedRoute,private githubService:GithubService,private router:Router) { }

  ngOnInit(): void {
    this.getUserRepositories();
  }




    getUserRepositories(){

      this.route.params.subscribe(params => {
        const paramValue = params['loginUser'];
        this.loginUser=paramValue;
    
    
      });

      this.githubService.getUserRepositories(this.loginUser).subscribe(
        (data:any[])=> {

    console.log(data);
    this.userRepositories = data;
    
        },
        (error)=> {
          console.log(error);
        }


      )
    }





    sendUsernameAndRepositoryname(){
     this.router.navigateByUrl('/repositorieDetails/'+this.loginUser+'/'+this.name);

    }




















}
