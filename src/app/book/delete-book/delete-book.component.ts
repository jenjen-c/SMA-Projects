import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { BookService } from "../../service/book.service";
import { Book } from "../../model/book";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
@Output() deleteRequest = new EventEmitter<any>();
@Input() book : Book;
  constructor (private bookService:BookService) { }

  ngOnInit(): void {
  }
  ngOnchange(){
		
  }
     deleteBook():void{ 
	 console.log("deleting" + this.book.bookid);
      this.bookService.delete(this.book.bookid).subscribe(
        response => {
          this.deleteRequest.emit(true);
        },
        error => {
          console.log(error);
        });
     }

}
