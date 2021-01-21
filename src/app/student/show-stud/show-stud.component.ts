import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-stud',
  templateUrl: './show-stud.component.html',
  styleUrls: ['./show-stud.component.css']
})
export class ShowStudComponent implements OnInit {

  constructor(private service:SharedService) { }

  StudentList:any=[];


  ModalTitle:string;
  ActivateAddEditStudComp:boolean=false;
  stud:any;

  addClick(){
    this.stud={
      StudentId:0,
      Name:"",
      ClassYear:"",
      Status:""
    }
    this.ModalTitle="Add Student";
    this.ActivateAddEditStudComp=true;
  }

  editClick(item){
    this.stud=item;
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStudComp=true;

  }

  deleteClick(item){
    if(confirm("Are you sure?")){
      this.service.deleteStudent(item.StudentId).subscribe(data=>{
        alert(data.toString());
        this.refreshStudList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStudComp=false;
    this.refreshStudList();
  }

  ngOnInit(): void {
    this.refreshStudList();
  }
  


  refreshStudList(){
    this.service.getStudList().subscribe(data=>{
      this.StudentList=data;
    });
  }


}
