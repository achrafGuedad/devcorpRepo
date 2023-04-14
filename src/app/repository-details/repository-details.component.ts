import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/GithubService';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {

  loginUser!:string;
  repositoryName!:string;
  nombreCommit!:number;
  nombreIssues!:number;
  nombrePullrequest!:number;



  constructor(private githubService:GithubService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const paramValue = params['username'];
      const paramValue2=params['repositoryName']
      this.loginUser=paramValue;
      this.repositoryName=paramValue2;

  
  
    });
       
     this.githubService.getCommitCount(this.loginUser,this.repositoryName).subscribe(
      
      (data: any[]) => {
      this.nombreCommit = data.length;

     // console.log(`Number of issues: ${numIssues}`);
      },
     (error)=> {
     console.log(error);
    }); 


    this.githubService.getIssuesCount(this.loginUser,this.repositoryName)
    .subscribe(
      
      (data: any[]) => {
      this.nombreIssues = data.length;

      },
     (error)=> {
     console.log(error);
    }); 

    this.githubService.getIssuesCount(this.loginUser,this.repositoryName)
    .subscribe(
      
      (data: any[]) => {
      this.nombrePullrequest = data.length;

      },
     (error)=> {
     console.log(error);
    });
  
  

  }


































}
