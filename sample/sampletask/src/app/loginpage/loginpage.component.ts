import { HttpClient } from '@angular/common/http';
import { Xtb } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private http:HttpClient) { }


  onLogin(data:any){
    this.http.post('http://157.175.81.254:4001/api/auth/login',data).subscribe((res)=>{
      console.warn("result",res)
    });
  
  }
  message:boolean=false
  ngOnInit(): void {
  };
  removeMessage
  

}
