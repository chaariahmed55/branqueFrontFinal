import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import {LayaoutComponent} from "./layaout/layaout.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {DemandeCompteComponent} from "./demande-compte/demande-compte.component";
import {ListDemandeComponent} from "./list-demande/list-demande.component";
import {DetailDemandeCompteComponent} from "./detail-demande-compte/detail-demande-compte.component";
import {VirementComponent} from "./virement/virement.component";

import {ListAgentComponent} from "./list-agent/list-agent.component";
import {AddEditAgentComponent} from "./add-edit-agent/add-edit-agent.component";
import {MesComptesComponent} from "./mes-comptes/mes-comptes.component";
import {AllComptesComponent} from "./all-comptes/all-comptes.component";
import {DemandeCreditComponent} from "./demande-credit/demande-credit.component";



import {TransactionComponent} from "./transaction/transaction.component";
import {MesVirementsComponent} from "./mes-virements/mes-virements.component";
import {RendezVousComponent} from "./rendez-vous/rendez-vous.component";
import {MesRendezVousComponent} from "./mes-rendez-vous/mes-rendez-vous.component";
import {AdminRdvComponent} from "./admin-rdv/admin-rdv.component";
import {AgentRdvComponent} from "./agent-rdv/agent-rdv.component";
import {MesDemandeCreditComponent} from "./mes-demande-credit/mes-demande-credit.component";
import {ListeDemandeCreditComponent} from "./liste-demande-credit/liste-demande-credit.component";

import {DetailDemandeCreditComponent} from "./detail-demande-credit/detail-demande-credit.component";
import {MesCreditComponent} from "./mes-credit/mes-credit.component";
import {EcheanceComponent} from "./echeance/echeance.component";
import {ListCreditComponent} from "./list-credit/list-credit.component";
import {SimulationComponent} from "./simulation/simulation.component";


const routes: Routes = [
  {path:'',component:LayaoutComponent, canActivate: [AuthGuard], children: [
      {path: 'listDemande', component: ListDemandeComponent},
      {path: 'detailDemande/:id', component: DetailDemandeCompteComponent},
      {path: 'listAgent', component: ListAgentComponent},
      {path: 'agent/new', component: AddEditAgentComponent},
      {path: 'agent/edit/:id', component: AddEditAgentComponent},
      {path: 'mesComptes', component: MesComptesComponent},
      {path: 'allAccount', component: AllComptesComponent},
      {path: 'virement', component: VirementComponent},
      {path: 'mes-virements', component: MesVirementsComponent},
      {path: 'transaction/:id', component: TransactionComponent},
      {path: 'rdv', component: RendezVousComponent},
      {path: 'rdv/edit/:id', component: RendezVousComponent},
      {path: 'mes-rdv', component: MesRendezVousComponent},
      {path: 'admin-rdv', component: AdminRdvComponent},
      {path: 'agent-rdv', component: AgentRdvComponent},
      {path: 'demandeCredit/:idCompte', component: DemandeCreditComponent},
      {path: 'demandeCredit/edit/:idDemande', component: DemandeCreditComponent},
      {path: 'mes-demandeCredit', component: MesDemandeCreditComponent},
      {path: 'listDemandeCredit', component: ListeDemandeCreditComponent},

      {path: 'detailDemandeCredit/:id', component: DetailDemandeCreditComponent},
      {path: 'mesCredit', component: MesCreditComponent},
      {path: 'listCredit', component: ListCreditComponent},
      {path: 'echeance/:id', component: EcheanceComponent},


    ]},
  {path:'login',component:LoginComponent},
  {path:'demandeCompte',component:DemandeCompteComponent},
  {path: 'simulationCredit', component: SimulationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
