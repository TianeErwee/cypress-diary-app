import { Component, OnInit } from '@angular/core';
import { EntryServiceService } from '../../services/entry-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.scss']
})
export class ViewEntryComponent implements OnInit {

  id: number;
  title: string;
  content: string;

  entryExists: boolean;

  constructor(private entryService: EntryServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.init();
  }

  async init() {
    try {
      const res = await this.entryService.viewEntry(this.id);
      this.title = res.statusMessage[0].title;
      this.content = res.statusMessage[0].content;
      this.entryExists = true;
    } catch (err) {
      this.entryExists = false;
      console.log(err);
    }

  }

  navToUpdate() {
    this.router.navigateByUrl('/entries/update-entry/' + this.id);
  }

  navToList() {
    this.router.navigateByUrl('/entries/list');
  }

  async deleteEntry() {
    await this.entryService.deleteEntry(this.id);
    this.router.navigateByUrl('/entries/list');
  }

}
