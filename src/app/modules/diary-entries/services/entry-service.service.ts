import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntryServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  getEntry() {
    this.http.get('/api/v1/entries').subscribe((data: any) => {
      console.log('DATA: ', data);
    }, error => {
      console.log(error);
    });
  }
}
