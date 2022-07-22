import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import {LayaoutComponent} from "./layaout/layaout.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {DemandeCompteComponent} from "./demande-compte/demande-compte.component";
import {ListDemandeComponent} from "./list-demande/list-demande.component";
import {DetailDemandeCompteComponent} from "./detail-demande-compte/detail-demande-compte.component";
import {ListAgentComponent} from "./list-agent/list-agent.component";
import {AddEditAgentComponent} from "./add-edit-agent/add-edit-agent.component";
import {MesComptesComponent} from "./mes-comptes/mes-comptes.component";
import {AllComptesComponent} from "./all-comptes/all-comptes.component";
import { ChangeComponent } from './change/change.component';
import { CarnetchequeComponent } from './carnetcheque/carnetcheque.component';
import { ChequeAdminComponent } from './cheque-admin/cheque-admin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: '', component: HomeComponent},
  {path:'',component:LoginComponent},
  {path:'wafa',component:LayaoutComponent, canActivate: [AuthGuard], children: [
      {path: '', component: ListDemandeComponent},
      {path: 'detailDemande/:id', component: DetailDemandeCompteComponent},
      {path: 'listAgent', component: ListAgentComponent},
      {path: 'agent/new', component: AddEditAgentComponent},
      {path: 'agent/edit/:id', component: AddEditAgentComponent},
      {path: 'mesComptes', component: MesComptesComponent},
      {path: 'allAccount', component: AllComptesComponent},
      {path:'change/:idcompte',component:ChangeComponent},
      {path:'carnetcheque/:idcompte',component:CarnetchequeComponent},
      {path:'PaymentChequeAdmin',component:ChequeAdminComponent},
    ]},
  // {path:'change/:idcompte',component:ChangeComponent},
  // {path:'carnetcheque/:idcompte',component:CarnetchequeComponent},
  // {path:'PaymentChequeAdmin',component:ChequeAdminComponent},
  

  {path:'demandeCompte',component:DemandeCompteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
