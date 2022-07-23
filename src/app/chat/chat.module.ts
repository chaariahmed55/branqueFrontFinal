import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ChatDialogComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  exports:[ChatDialogComponent],
  providers:[ChatService]
})
export class ChatModule { }
