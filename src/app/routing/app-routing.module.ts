import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {AuthGuard} from "../oauth/guard/auth.guard";
import {LoginComponent} from "../login/login.component";
import {CallbackComponent} from "../callback/callback.component";
import {ViewComponent} from "../view/view.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'view', component: ViewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
