import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from "./messages.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageComponent } from "./message-list/message.component";
import { MessageInputComponent } from "./message-input/message-input.component";
import { MessageService } from "./message.service";

@NgModule({
    declarations: [
        MessagesComponent,
        MessageListComponent,
        MessageComponent,
        MessageInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MessageService]
})
export class MessagesModule {

}
