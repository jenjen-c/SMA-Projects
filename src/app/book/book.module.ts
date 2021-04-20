import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //bind values input from user

import { GetBookListComponent } from './get-book-list/get-book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


@NgModule({
  declarations: [
    GetBookListComponent,
    AddBookComponent,
    DeleteBookComponent,
    UpdateBookComponent
],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookModule { }
