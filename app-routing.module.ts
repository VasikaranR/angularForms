import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {path:'table',component:TableComponent},
  {path:'add',component:AddUserComponent},
  {path:'update-add/:id',component:AddUserComponent},
  {path:'**',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
