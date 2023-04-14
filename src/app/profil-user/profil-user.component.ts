import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/GithubService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

   userProfilData :any[]=[];
   loginUser!:string;
   userImage!:any;
   location!:string;
   biog!:string;
   nbFollowers!:number;
   created_at!:string;
   updated_at!:string;
   type!:string;
   name!:string;
   id!:number;
   company!:string;



  constructor(private githubService:GithubService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getUserProfil();
  }


getUserProfil(){

  this.route.params.subscribe(params => {
    const paramValue = params['loginUser'];
    this.loginUser=paramValue;


  });

  this.githubService.getUserProfil(this.loginUser).subscribe(data => {
    this.userProfilData = data;
    console.log(this.userProfilData);
    this.userImage=data.avatar_url;
    this.location=data.location;
    this.biog=data.bio;
    this.name=data.name;
    this.location=data.location;
    this.created_at=data.created_at;
    this.updated_at=data.updated_at;
    this.id=data.id;
    this.company=data.company;
    this.nbFollowers=data.followers;

  },

  (error)=> { console.log(error);}
  
  );
}





















  
}
