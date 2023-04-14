import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './repository-list.component';




const routes: Routes = [
  { path: ':loginUser', component: RepositoryListComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryListRoutingModule { }
