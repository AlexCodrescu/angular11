import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from "src/app/shared.service"

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() 
  Pst:any;
  PostID:string;
  StudentID:string;
  Posts:string

  ngOnInit(): void {
    this.PostID=this.Pst.PostID;
    this.Posts=this.Pst.Post;
    this.StudentID=this.Pst.StudentID;
  }

  addPost(){
    var val = {
    PostID:this.PostID,
    Posts:this.Posts,
    StudentID:this.StudentID,
    }
    this.service.addPost(val).subscribe(res=>{
      alert(res.toString());
    });

  }


  updatePost(){

    var val = {
      PostID:this.PostID,
      Posts:this.Posts,
      StudentID:this.StudentID,
      }
    this.service.updatePost(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
