import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class GithubService {

    private apiUrl = 'https://api.github.com/users';
    private urlRepository = 'https://api.github.com/repos/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }



  getUserProfil(name:string): Observable<any> {
    return this.http.get(this.apiUrl+'/'+name);
  }



  getUserRepositories(userName:string) : Observable<any> {
   return  this.http.get(this.apiUrl+'/'+userName+'/repos');
  }



getCommitCount(username:string,repositorie:string) : Observable<any> {
  // Fetch number of commits
return this.http.get(this.urlRepository+username+'/'+repositorie+'/commits');
}


getIssuesCount(username:string,repositorie:string) : Observable<any> {
  // Fetch number of commits
return this.http.get(this.urlRepository+username+'/'+repositorie+'/issues');
}


getPullrequestCount(username:string,repositorie:string) : Observable<any> {
  // Fetch number of commits
return this.http.get(this.urlRepository+username+'/'+repositorie+'/pulls');
}



getUserFollowers(username:string) : Observable<any> {
  // Fetch number of commits
return this.http.get(this.apiUrl+'/'+username+'/'+'followers');
}



getProfilAndRepositoryOfUser(username:string): Observable<any> {
  const request1 = this.http.get(this.apiUrl+'/'+username);
  const request2 = this.http.get('https://api.github.com/users/'+username+'/repos');

  return forkJoin([request1, request2]);
}


















































}