import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonnesComponent } from './abonnes.component';

const routes: Routes = [
  { path: ':username', component: AbonnesComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnesRoutingModule { }
