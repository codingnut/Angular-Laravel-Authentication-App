import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestComponent } from './components/password-reset/request/request.component';
import { ResponseComponent } from './components/password-reset/response/response.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'request-reset', component: RequestComponent },
    { path: 'response-reset', component: ResponseComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
