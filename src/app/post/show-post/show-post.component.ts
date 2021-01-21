import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private service:SharedService) { }

  PstList:any=[];


  ModalTitle:string;
  ActivateAddEditPstComp:boolean=false;
  Pst:any;

  addClick(){
    this.Pst={
      PostID:0,
      Post:"",
      StudentID:1
    }
    this.ModalTitle="Add Post";
    this.ActivateAddEditPstComp=true;
  }

  editClick(item){
    this.Pst=item;
    this.ModalTitle="Edit Post";
    this.ActivateAddEditPstComp=true;

  }

  deleteClick(item){
    if(confirm("Are you sure?")){
      this.service.deletePost(item.PostID).subscribe(data=>{
        alert(data.toString());
        this.refreshPstList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPstComp=false;
    this.refreshPstList();
  }

  ngOnInit(): void {
    this.refreshPstList();
  }
  


  refreshPstList(){
    this.service.getPostList().subscribe(data=>{
      this.PstList=data;
    });
  }


}
