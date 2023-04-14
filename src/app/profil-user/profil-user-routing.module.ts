import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilUserComponent } from './profil-user.component';

const routes: Routes = [
  { path: ':loginUser', component: ProfilUserComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilUserRoutingModule { }
