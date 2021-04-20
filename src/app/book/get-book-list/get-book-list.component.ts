import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { BookService } from "../../service/book.service";
import { Book } from "../../model/book";

@Component({
  selector: 'app-get-book-list',
  templateUrl: './get-book-list.component.html',
  styleUrls: ['./get-book-list.component.css']
})
export class GetBookListComponent implements OnInit {
  books: Observable<Book[]>;
  tempBook:Book[] = [];


  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
	this.reloadData();
  }

  reloadData(){
	this.books=this.bookservice.getBookList();
	this.books.subscribe(countries => console.log(countries));
	console.log("this.tempBook" + this.tempBook);
  }

onDeleteBook() {
   this.reloadData();
}

onUpdateBook(){}




}
