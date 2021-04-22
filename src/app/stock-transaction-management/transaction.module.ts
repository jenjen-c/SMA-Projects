import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //bind values input from user

@NgModule({
  declarations: [ 
	AddTransactionComponent,
    UpdateTransactionComponent,
    DeleteTransactionComponent,
    GetTransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }

/*References:
Dropdown: https://www.itsolutionstuff.com/post/angular-10-select-dropdown-example-tutorialexample.html*/
