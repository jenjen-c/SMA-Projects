import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';


@NgModule({
  declarations: [ 
	AddTransactionComponent,
    UpdateTransactionComponent,
    DeleteTransactionComponent,
    GetTransactionComponent],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
