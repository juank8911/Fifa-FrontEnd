import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';

const routes: Routes = [
  {path:'',redirectTo:'/teams',pathMatch:'full'},
  {path:'teams',component: ListTeamsComponent},
  {path:'addtm', component:FormAddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
