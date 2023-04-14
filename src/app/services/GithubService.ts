import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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



// Fetch repository activity over time
/*this.http.get(`${url}/stats/commit_activity`).subscribe((data: any[]) => {
  const activity = data.map((week) => week.total);
  console.log(`Repository activity over time: ${activity}`);
});

*/




















































}