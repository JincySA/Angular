import { NgModule } from "@angular/core";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { RouterModule, Routes } from "@angular/router";

const appRoute: Routes = [
    {path: 'login',component:LoginpageComponent},
    {path: 'register',component:RegisterpageComponent}
] 
@NgModule({
   imports:[
    RouterModule.forRoot(appRoute)
   ],
   exports:[
    RouterModule
   ]

})

export class AppRoutingModule{

}