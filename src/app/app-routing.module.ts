import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
{path:'student',component:StudentComponent},
{path:'post',component:PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
