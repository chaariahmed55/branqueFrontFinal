import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PublicationsComponent } from './publications-crud/publications/publications.component';

import { PublicationsShowComponent } from './publications-crud/publications-show/publications-show.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog/chat-dialog.component';
import { UpdatepubComponent } from './publications-crud/publication-update/updatepub/updatepub.component';
import { PublicationdetailComponent } from './publications-crud/publicationdetail/publicationdetail.component';
import { ElementpublistComponent } from './ElementPub-crud/elementpublist/elementpublist.component';
import { ElementpubDetailComponent } from './ElementPub-crud/elementpub-detail/elementpub-detail.component';
import { ElementpubPostComponent } from './ElementPub-crud/elementpub-post/elementpub-post.component';
import { ElementpubUpdateComponent } from './ElementPub-crud/elementpub-update/elementpub-update.component';
const routes: Routes = [
  {path:'',component:TestComponent},
  {path:'publications/add',component:PublicationsComponent},
  {path:'publications',component:PublicationsShowComponent},
  {path:'elementpub',component:ElementpublistComponent},
  {path:'elementpub/add',component:ElementpubPostComponent},
  
  {path:'chat',component:ChatDialogComponent},
  { path: 'modify/:id', component: UpdatepubComponent },
  { path: 'details/:id', component: PublicationdetailComponent },
  { path: 'detail/:id', component: ElementpubDetailComponent },
  { path: 'modif/:id', component: ElementpubUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
