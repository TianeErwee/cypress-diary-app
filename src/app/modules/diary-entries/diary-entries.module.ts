import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { ViewEntryComponent } from './components/view-entry/view-entry.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
    HttpClientModule
  ],
  providers: [
    EntryServiceService
  ]
})
export class DiaryEntriesModule { }
