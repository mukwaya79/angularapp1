import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: '', component: AppComponent},
{path: 'home', component: HomeComponent},

{path: 'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent
 //canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
