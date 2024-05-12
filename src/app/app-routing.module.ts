import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/home/guards/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home/login'
  // },

  { path: 'login', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'formulario'
  },

  { path: 'formulario', component: HomeComponent },
  { path: '', component: HomeComponent },

    {
    path: 'formulario',
    loadChildren: () => import('./pages/menu-home/menu-home.module').then(m => m.MenuHomeModule),
   
  },

  {
    path: 'index',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  }
  // , {
  //   path: 'home',
  //   loadChildren: () => import('./pages/menu-home/menu-home.module').then(m => m.MenuHomeModule),
  //   canActivate: [AuthGuard],
  // }
  , {
    path: 'dashboard-one',
    loadChildren: () => import('./pages/dashboard-one/dashboard-one.module').then(m => m.DashboardOneModule),
    canActivate: [AuthGuard],
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
