import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/componenets/login/login.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/componenets/home/home.component';
import { SignupComponent } from 'src/app/componenets/signup/signup.component';
import { AboutusComponent } from 'src/app/componenets/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/componenets/contactus/contactus.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'contact', component: ContactusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
