import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from "src/app/shared.service"

@Component({
  selector: 'app-add-edit-stud',
  templateUrl: './add-edit-stud.component.html',
  styleUrls: ['./add-edit-stud.component.css']
})
export class AddEditStudComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() stud:any;
  StudentId:string;
  Name:string;
  ClassYear:string;
  Status:string;

  ngOnInit(): void {
    this.StudentId=this.stud.StudentId;
    this.Name=this.stud.Name;
    this.ClassYear=this.stud.ClassYear;
    this.Status=this.stud.Status;
  }

  addStudent(){
    var val = {
    StudentId:this.StudentId,
    Name:this.Name,
    ClassYear:this.ClassYear,
    Status:this.Status
    }
    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });

  }


  updateStudent(){

    var val = {
      StudentId:this.StudentId,
      Name:this.Name,
      ClassYear:this.ClassYear,
      Status:this.Status
      }
    this.service.updateStudent(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
