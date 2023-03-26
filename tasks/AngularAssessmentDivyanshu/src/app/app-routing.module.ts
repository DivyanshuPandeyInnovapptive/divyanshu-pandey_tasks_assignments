import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './components/list-data/list-data.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';

const routes: Routes = [
  {path:'',component:ListDataComponent},
{path:'app-add-data',component:AddDataComponent},

{path:'app-list-data',component:ListDataComponent},
{path:'app-update-data',component:UpdateDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
