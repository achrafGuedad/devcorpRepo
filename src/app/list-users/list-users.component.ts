import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/GithubService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent  implements OnInit {
  users: any;

  constructor(private githubService: GithubService,private router:Router) {}

  ngOnInit(): void {

    this.githubService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }



  consulterProfil(userName){

    console.log(userName);
    this.router.navigateByUrl('/profil/'+userName);

  }

  consulterRepositories(userName){

    this.router.navigateByUrl('/repositorie/'+userName);

  }

  consulterAbonnes(userName){

    this.router.navigateByUrl('/abonnes/'+userName);

  }

 naviguerToUtilisateurComponent(userName){
  this.router.navigateByUrl('/chercherUtilisateur/'+userName);

 }

}







