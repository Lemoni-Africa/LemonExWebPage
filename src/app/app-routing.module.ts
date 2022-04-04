import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AppLayoutComponent } from './Components/app-layout/app-layout.component';
import { CompanyComponent } from './Components/company/company.component';
import { FaqComponent } from './Components/faq/faq.component';
import { HomeComponent } from './Components/home/home.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
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
        path: 'about-us',
        component: AboutUsComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: 'our-services',
        component: OurServicesComponent,
        //canActivate: [AuthGuard]
      },
      {
        path: 'faqs',
        component: FaqComponent,
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
