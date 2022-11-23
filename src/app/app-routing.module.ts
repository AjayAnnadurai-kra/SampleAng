import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
