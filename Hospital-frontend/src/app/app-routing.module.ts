import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { HomeComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import {AuthGaurdService} from './auth-gaurd.service';
import { ContactComponent } from './contact/contact.component';
import { SingupComponent } from './singup/singup.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponent ,canActivate:[AuthGaurdService]},
  { path: 'patients', component: PatientListComponent,canActivate:[AuthGaurdService] },
  { path: 'create-patient', component: CreatePatientComponent,canActivate:[AuthGaurdService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'update-patient/:id', component: UpdatePatientComponent,canActivate:[AuthGaurdService] },
  { path: 'patient-details/:id', component: PatientDetailsComponent,canActivate:[AuthGaurdService] },
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path:'contact',component:ContactComponent,canActivate:[AuthGaurdService]},
  {path:'singup',component:SingupComponent},
  {path:'service',component:ServiceComponent,canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }