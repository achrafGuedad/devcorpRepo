import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/GithubService';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-chercher-utilisateur',
  templateUrl: './chercher-utilisateur.component.html',
  styleUrls: ['./chercher-utilisateur.component.css']
})
export class ChercherUtilisateurComponent implements OnInit {

  utilisateur!:string;

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
   dataForkJoin!:any;

   activeCard:boolean=false;
   userRepositories:any[]=[];

  username: string;
  user: any;
  repos: any;

  

  constructor(private githubService:GithubService,private route :ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const paramValue = params['username'];
      this.utilisateur=paramValue;
  
  
    });
  }

 


  

getUsersProfilandRepository(form:NgForm){
  console.log(form.value);

  
this.githubService.getProfilAndRepositoryOfUser(form.value.utilisateur).subscribe(
  ([data, result]) => {
     

    this.dataForkJoin = { data, result };

    
    this.activeCard=true;
    this.userImage=this.dataForkJoin.data.avatar_url;
    this.location=this.dataForkJoin.data.location;
    this.biog=this.dataForkJoin.data.bio;
    this.name=this.dataForkJoin.data.name;
    this.location=this.dataForkJoin.data.location;
    this.created_at=this.dataForkJoin.data.created_at;
    this.updated_at=this.dataForkJoin.data.updated_at;
    this.id=this.dataForkJoin.data.id;
    this.company=this.dataForkJoin.data.company;
    this.nbFollowers=this.dataForkJoin.data.followers;

    // repositorie
    this.userRepositories=this.dataForkJoin.result;

    
    
        
  },

  (error)=> { if(this.dataForkJoin===null || this.utilisateur===null ){
     this.activeCard=false;
     this.utilisateur=null;
     alert("utilisateur non disponible...");
     

    
    }
  }
  );

}
  getUser() {
    let user;
    this.http.get('https://api.github.com/users/'+this.utilisateur)
      .subscribe
     
      (
        user => {
        this.user = user;
        this.activeCard=true;

        this.http.get(user['repos_url'])
          .subscribe(repos => {
            this.repos = repos;
          });
      },
      err =>
{
      alert("utilisateur indisponible");  
      this.username=null;
      user=null;
      this.activeCard=false;  
    }
      
      );
      
  }




 
















}
