import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { Book } from "../../model/book";
import { BookService } from "../../service/book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
@Output() updateRequest = new EventEmitter<any>();
@Input() book : Book;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  updateBook():void{ 
	 console.log("updating bookname" + this.book.bookname);
     console.log("updating author" + this.book.author);
     console.log("updating price" + this.book.price);
      this.bookService.update(this.book).subscribe(
        response => {
          this.updateRequest.emit(true);
        },
        error => {
          console.log(error);
        });
     }

}
