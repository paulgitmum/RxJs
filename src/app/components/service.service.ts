import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  data = ['paulos', 'solo', 'dave', 'getachew'];
  isLoading: any;
  todo =[
    {id:1, 'name':'Hiking'},
    {id:2, 'name':'Swimming'}
  ]

  constructor(private http: HttpClient) {}


  
  public getProducts() {
    return from(
      this.http.get(`https://jsonplaceholder.typicode.com/users`)
    ).pipe(share());
  }

  public getName() {
    return from(this.data)
  }

  public getTodo() {
    return of(this.todo)
  }

  public setLoading(observable: Observable<any>) {
    this.isLoading = true;
    observable.subscribe(() => (this.isLoading = false));
  }

}
