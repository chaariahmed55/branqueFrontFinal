import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { PublicationsComponent } from './publications-crud/publications/publications.component';
import { PublicationService } from './publication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsShowComponent } from './publications-crud/publications-show/publications-show.component';

import { ElementPubService } from './element-pub.service';
import { ChatModule } from './chat/chat.module';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog/chat-dialog.component';
import { UpdatepubComponent } from './publications-crud/publication-update/updatepub/updatepub.component';
import { PublicationdetailComponent } from './publications-crud/publicationdetail/publicationdetail.component';
import { ElementpublistComponent } from './ElementPub-crud/elementpublist/elementpublist.component';
import { ElementpubDetailComponent } from './ElementPub-crud/elementpub-detail/elementpub-detail.component';
import { ElementpubPostComponent } from './ElementPub-crud/elementpub-post/elementpub-post.component';
import { ElementpubUpdateComponent } from './ElementPub-crud/elementpub-update/elementpub-update.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   
    NavbarComponent,
    SidebarComponent,
    TestComponent,
    PublicationsComponent,
    PublicationsShowComponent,
    
    UpdatepubComponent,
    PublicationdetailComponent,
    ElementpublistComponent,
    ElementpubDetailComponent,
    ElementpubPostComponent,
    ElementpubUpdateComponent,
    
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        ChatModule,
        
        

  ],
  providers: [PublicationService,ElementPubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
