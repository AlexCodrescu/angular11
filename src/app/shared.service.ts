import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:56480/api";
  constructor(private http:HttpClient) { }

  getStudList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/student');
  }

  addStudent(val:any){
    return this.http.post<any>(this.APIUrl+'/student',val);
  }

  updateStudent(val:any){
    return this.http.put<any>(this.APIUrl+'/student',val);
  }

  deleteStudent(val:any){
    return this.http.delete<any>(this.APIUrl+'/student/'+val);
  }


  getPostList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/post');
  }

  addPost(val:any){
    return this.http.post<any>(this.APIUrl+'/post',val);
  }

  updatePost(val:any){
    return this.http.put<any>(this.APIUrl+'/post',val);
  }

  deletePost(val:any){
    return this.http.delete<any>(this.APIUrl+'/post/'+val);
  }

  getAllStudentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/student/getAllStudentNames');
  }

}
