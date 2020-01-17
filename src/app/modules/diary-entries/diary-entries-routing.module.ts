import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewEntryComponent } from './components/view-entry/view-entry.component';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entries/view-entry/:id', component: ViewEntryComponent },
  { path: 'entries/list', component: EntriesListComponent },
  { path: 'entries/create-entry', component: CreateEntryComponent },
  { path: 'entries/update-entry/:id', component: CreateEntryComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DiaryEntriesRoutingModule { }
