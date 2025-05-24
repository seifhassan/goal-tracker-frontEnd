import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './goals/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { PublicGoalsComponent } from './goals/public-goals/public-goals.component';
import { SharedGoalComponent } from './goals/shared-goal/shared-goal.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'public', component: PublicGoalsComponent },
  { path: 'public/:publicId', component: SharedGoalComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
