import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  constructor(private http:HttpClient) { }
  message:boolean=false;
  ngOnInit(): void {
  }
  addregister(obj){
    this.http.post('http://157.175.81.254:4001/api/auth/register',obj).subscribe((res)=>{
      console.warn("result",res) 
      alert("Registeration successfull!");
       
      
     
    });
  }
  removeMessage(){
    this.message=false;
  
  }
}