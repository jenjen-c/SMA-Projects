import { Component, OnInit } from '@angular/core';
import { BookService } from "../../service/book.service";
import { Book } from "../../model/book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {
    bookname: '',
    author: '',
    price: 0
  };
  submitted = false;
  isSaved = false;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

saveBook(): void {
    /*const data = {
      bookname: this.book.bookname,
      author: this.book.author,
      price: this.book.price
};*/

    this.bookService.save(this.book)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
   }


  newBook(): void {
    this.submitted = false;
    this.book = {
       bookname: '',
       author: '',
       price: 0
    };
  }

}
