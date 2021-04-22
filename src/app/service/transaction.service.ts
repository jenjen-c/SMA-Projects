import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../stock-transaction-management/model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl ='http://localhost:8102/stock-management';
  private httpOptions: any;

  constructor(private http: HttpClient) {
	 this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'events'
    };
 }

  getTransactions(): Observable<Transaction[]> {
	let endpoints='/getall';
	console.log(this.baseUrl+endpoints);
    return this.http.get<Transaction[]>(this.baseUrl+endpoints);
 }
  save(data: any): Observable<any> {
     let endpoints='/save';    
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

