import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input, OnInit } from '@angular/core';
import { TokenInterceptorService } from 'src/app/token-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:TokenInterceptorService) { }

  @Input() 
  Username:string;
  Password:string;
  tok:string;


  ngOnInit(): void {
  }


UserLogin(){
  let token = 
  `${this.Username}:${this.Password}`;
  return btoa(token);
}




}




