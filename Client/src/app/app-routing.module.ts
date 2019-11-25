import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyMemberListComponent } from './components/family-member-list/family-member-list.component';
import { AddFamilyMemberComponent } from './components/add-family-member/add-family-member.component';
import { UpdateFamilyMemberComponent } from './components/update-family-member/update-family-member.component';


const routes: Routes = [
  {path: '', component: FamilyMemberListComponent},
  {path: 'add-member', component: AddFamilyMemberComponent},
  {path: 'update/:id', component: UpdateFamilyMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
