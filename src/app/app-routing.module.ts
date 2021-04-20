import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBookListComponent } from './book/get-book-list/get-book-list.component';
import { AddBookComponent } from './book/add-book/add-book.component';
/*import { AddBookComponent } from './add-book/add-book.component';*/


const routes: Routes = [ 
	{path: 'get-book-list', component: GetBookListComponent}, 
	{path: 'add-book', component: AddBookComponent},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
