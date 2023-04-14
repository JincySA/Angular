import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ApiResponse } from 'src/app/loginpage/apiresponse';
import { CommonsService } from 'src/app/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient,
    private commonServiceObj: CommonsService
  ) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "bearer" + " " + localStorage.getItem("token"),
    }),
  };
  addregister(obj) {
    return this._http.post<ApiResponse>(this.commonServiceObj.apiURL + "http://157.175.81.254:4001/api/auth/register",
      obj,
      this.httpOptions
      ,
    )
      .pipe(retry(1), catchError(this.commonServiceObj.handleError));

  }
  

}
