import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl ='http://localhost:8102/books';
  private httpOptions: any;

  constructor(private http: HttpClient) {
	 this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'events'
    };
 }

  getBookList(): Observable<Book[]> {
	let endpoints='/getall';
	console.log(this.baseUrl+endpoints);
    return this.http.get<Book[]>(this.baseUrl+endpoints);
 }
  save(data: any): Observable<any> {
     let endpoints='/saveBook';    
     return this.http.post(this.baseUrl+endpoints, data);
  }

 update(data: any): Observable<any> {
     let endpoints='/update';    
     return this.http.post(this.baseUrl+endpoints, data);
  }

  delete(id: string){
    return this.http.get(this.baseUrl+'/'+id, this.httpOptions);
  }

}
