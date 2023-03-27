import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { MaterialModule } from './material-module';
import { StoreRootModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { BigintPipe } from './pipes/bigint.pipe';
import { GetTimePipe } from './pipes/get-time.pipe';
import { GetLocaleDateFormatPipe } from './pipes/get-locale-date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MybookingsComponent,
    ProfileComponent,
    NavbarComponent,
    DatePickerComponent,
    FooterComponent,
    BigintPipe,
    GetTimePipe,
    GetLocaleDateFormatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({ app: STORE_REDUCER }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
