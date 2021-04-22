import { Component, OnInit } from '@angular/core';
import { Transaction } from "../model/transaction.model";

@Component({
  selector: 'app-get-transaction',
  templateUrl: './get-transaction.component.html',
  styleUrls: ['./get-transaction.component.css']
})
export class GetTransactionComponent implements OnInit {
   trans: Transaction = {
    wallet: 0,
	withdrawn: 0,
	add_money:0,
	buy_price:0,
	sell_price:0,
	date_of_trans: '',
	note:''	
   };
  constructor() { }

  ngOnInit(): void {
  }

  saveTransaction(){
	//todo
  }
}
