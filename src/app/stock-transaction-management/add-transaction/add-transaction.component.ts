import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  transList: any = ['WD-Withdraw', 'AD-Add Money', 'BS-Buy Stock','SS-Sell Stock']
  form = new FormGroup({
    transactions: new FormControl('', Validators.required)
  });
  

  constructor() { }

  ngOnInit(): void {
  }

saveTransaction(){}
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  changeTrans(e) {
    console.log(e.target.value);
  }
}
