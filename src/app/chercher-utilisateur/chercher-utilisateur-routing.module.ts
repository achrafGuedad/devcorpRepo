import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChercherUtilisateurComponent } from './chercher-utilisateur.component';

const routes: Routes = [
  { path: 'chercher', component: ChercherUtilisateurComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChercherUtilisateurRoutingModule { }
