import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviseComponent } from './devise/devise.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CompteComponent } from './compte/compte.component';
import { DemandeCompteComponent } from './demande-compte/demande-compte.component';
import { PieceJointeComponent } from './piece-jointe/piece-jointe.component';
import { LayaoutComponent } from './layaout/layaout.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListDemandeComponent } from './list-demande/list-demande.component';
import {JwtInterceptorService} from "./shared/interceptors/jwt-interceptor.service";
import { DetailDemandeCompteComponent } from './detail-demande-compte/detail-demande-compte.component';
import { AddEditAgentComponent } from './add-edit-agent/add-edit-agent.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MesComptesComponent } from './mes-comptes/mes-comptes.component';
import { AllComptesComponent } from './all-comptes/all-comptes.component';
import { ChangeComponent } from './change/change.component';
import { CarnetchequeComponent } from './carnetcheque/carnetcheque.component';
import { ChequeAdminComponent } from './cheque-admin/cheque-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TestComponent,
    UtilisateurComponent,
    CompteComponent,
    DemandeCompteComponent,
    PieceJointeComponent,
    LayaoutComponent,
    LoginComponent,
    ListDemandeComponent,
    DetailDemandeCompteComponent,
    AddEditAgentComponent,
    ListAgentComponent,
    MesComptesComponent,
    AllComptesComponent,
    DeviseComponent,
    ChangeComponent,
    CarnetchequeComponent,
    ChequeAdminComponent

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
