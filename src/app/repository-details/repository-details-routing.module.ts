import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryDetailsComponent } from './repository-details.component';

const routes: Routes = [
  { path: ':username/:repositoryName', component: RepositoryDetailsComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryDetailsRoutingModule { }
