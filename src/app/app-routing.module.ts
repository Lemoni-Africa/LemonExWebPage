import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './Components/app-layout/app-layout.component';
import { CompanyComponent } from './Components/company/company.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
