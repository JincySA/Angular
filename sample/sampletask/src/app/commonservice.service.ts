import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommonsService {
  apiURL: string;
  // public  apiURL: string = environment.API_ENDPOINT;
  // public apiURLTemp: string = environment.API_ENDPOINT_1;

  constructor() {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "bearer" + " " + localStorage.getItem("token"),
    }),
  };

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
