import { Component, OnInit } from '@angular/core';
import { EntryServiceService } from '../../services/entry-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

  id: number;
  isCreateAction: boolean;

  entryForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private entryService: EntryServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isCreateAction = true;
    const tempId = this.route.snapshot.params.id;
    if (tempId) {
      this.id = this.route.snapshot.params.id;
      this.isCreateAction = false;
      this.getEntry();
    }
  }

  async getEntry() {
    const res = await this.entryService.viewEntry(this.id);
    this.entryForm.controls['title'].setValue(res.statusMessage[0].title);
    this.entryForm.controls['content'].setValue(res.statusMessage[0].content);
  }

  entryAction() {
    this.isCreateAction ? this.createEntry() : this.updateEntry();
    this.router.navigateByUrl('/entries/list');
  }

  cancelAction() {
    const navUrl = this.isCreateAction ? '/entries/list' : `/entries/view-entry/${this.id}`;
    this.router.navigateByUrl(navUrl);
  }

  createEntry() {
    this.entryService.createEntry(this.entryForm.controls['title'].value, this.entryForm.controls['content'].value);
  }

  updateEntry() {
    this.entryService.updateEntry(this.id, this.entryForm.controls['title'].value, this.entryForm.controls['content'].value);
  }

}
