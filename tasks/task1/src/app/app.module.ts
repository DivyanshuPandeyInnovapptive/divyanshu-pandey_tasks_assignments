import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './modules/routing/routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { FormsModule } from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { FormsComponent } from './componenets/forms/forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SqrPipe } from './pipes/sqr.pipe';
import { SalutationPipe } from './pipes/salutation.pipe';
import { DateserviceService } from './services/dateservice.service';
import { CourselistComponent } from './componenets/courselist/courselist.component';
import { AboutusComponent } from './componenets/aboutus/aboutus.component';
import { ContactusComponent } from './componenets/contactus/contactus.component';
import { HomeComponent } from './componenets/home/home.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangeTextDirective,
    FormsComponent,
    SqrPipe,
    SalutationPipe,
    CourselistComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
