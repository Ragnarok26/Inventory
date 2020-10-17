import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';

import { MessageService } from 'primeng/api';
import { InventoryService } from './services/inventory/inventory.service';
import { ClientService } from './services/client/client.service';
import { getBaseUrl } from '../main';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    MessagesModule,
  ],
  providers: [
    MessageService,
    ClientService,
    InventoryService,
    {
      provide: 'BASE_URL',
      useFactory: getBaseUrl
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
