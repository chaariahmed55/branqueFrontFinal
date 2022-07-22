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
import { ChangeComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';
import { CarnetchequeComponent } from './carnetcheque/carnetcheque.component';
import { ChequeAdminComponent } from './cheque-admin/cheque-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TestComponent,
    DeviseComponent,
    ChangeComponent,
    CarnetchequeComponent,
    ChequeAdminComponent
      ],
      
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
