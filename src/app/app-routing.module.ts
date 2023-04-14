import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'listOfUsers', loadChildren: () => import('./list-users/list-users.module').then(m => m.ListUsersModule) },
  { path: 'profil', loadChildren: () => import('./profil-user/profil-user.module').then(m => m.ProfilUserModule) },
  { path: 'repositorie', loadChildren: () => import('./repository-list/repository-list.module').then(m => m.RepositoryListModule) },
  { path: 'repositorieDetails', loadChildren: () => import('./repository-details/repository-details.module').then(m => m.RepositoryDetailsModule) },
  { path: 'abonnes', loadChildren: () => import('./abonnes/abonnes.module').then(m => m.AbonnesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
