import { Component, OnInit } from '@angular/core';
import { EntryServiceService } from '../../services/entry-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {

  entries: any[];
  links: any[];

  constructor(private entryService: EntryServiceService, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    const res = await this.entryService.getEntries();
    this.entries = res.statusMessage;
    this.links = this.entries.map(e => {
      return { url: '/entries/view-entry', entry: e};
    });
  }

  navToCreate() {
    this.router.navigateByUrl('/entries/create-entry');
  }

  deleteEntry(id: number) {
    this.entryService.deleteEntry(id);
    this.init();
  }

}
