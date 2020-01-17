import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';

import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { ViewEntryComponent } from './components/view-entry/view-entry.component';
import { DiaryEntriesRoutingModule } from './diary-entries-routing.module';
import { EntryServiceService } from './services/entry-service.service';

@NgModule({
  declarations: [
    EntriesListComponent,
    ViewEntryComponent,
    CreateEntryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DiaryEntriesRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    EntryServiceService
  ]
})
export class DiaryEntriesModule { }
