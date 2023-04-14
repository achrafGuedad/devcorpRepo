import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/GithubService';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListUsersModule } from './list-users/list-users.module';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { ProfilUserModule } from './profil-user/profil-user.module';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { RepositoryDetailsModule } from './repository-details/repository-details.module';
import { AbonnesComponent } from './abonnes/abonnes.component';
import { AbonnesModule } from './abonnes/abonnes.module';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ProfilUserComponent,
    RepositoryListComponent,
    RepositoryDetailsComponent,
    AbonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ListUsersModule,ProfilUserModule,RepositoryDetailsModule,
    AbonnesModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
