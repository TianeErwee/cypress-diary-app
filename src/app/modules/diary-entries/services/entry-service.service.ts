import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntryServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  async getEntries(): Promise<any> {
    return this.http.get('/api/v1/entries/list').toPromise()
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  viewEntry(idParam: number): Promise<any> {
    return this.http.get('/api/v1/entries/view-entry/' + idParam).toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  createEntry(titleParam: string, contentParam: string): Promise<any>  {
    return this.http.post('/api/v1/entries/create-entry', {title: titleParam, content: contentParam}).toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  updateEntry(idParam: number, titleParam: string, contentParam: string): Promise<any> {
    return this.http.put('/api/v1/entries/update-entry/' + idParam, {title: titleParam, content: contentParam}).toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteEntry(idParam: number): Promise<any> {
    return this.http.delete('/api/v1/entries/delete-entry/' + idParam).toPromise()
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
