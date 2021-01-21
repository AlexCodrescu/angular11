import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PostComponent } from './post/post.component';
import { ShowStudComponent } from './student/show-stud/show-stud.component';
import { AddEditStudComponent } from './student/add-edit-stud/add-edit-stud.component';
import { ShowPostComponent } from './post/show-post/show-post.component';
import { AddEditPostComponent } from './post/add-edit-post/add-edit-post.component';
import {SharedService} from './shared.service';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PostComponent,
    ShowStudComponent,
    AddEditStudComponent,
    ShowPostComponent,
    AddEditPostComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: 
  [SharedService,
  LoginComponent,
    {

      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
