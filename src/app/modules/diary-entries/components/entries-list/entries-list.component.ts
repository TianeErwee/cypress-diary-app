import { Component, OnInit } from '@angular/core';
import { EntryServiceService } from '../../services/entry-service.service';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {

  constructor(private entryService: EntryServiceService) { }

  ngOnInit() {
    this.entryService.getEntries();
  }

}
