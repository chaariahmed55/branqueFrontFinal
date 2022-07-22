import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetchequeComponent } from './carnetcheque/carnetcheque.component';
import { ChangeComponent } from './change/change.component';
import { ChequeAdminComponent } from './cheque-admin/cheque-admin.component';
import { DeviseComponent } from './devise/devise.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'change/:idcompte',component:ChangeComponent},
  {path:'carnetcheque/:idcompte',component:CarnetchequeComponent},
  {path:'PaymentChequeAdmin',component:ChequeAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
