import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookCategory } from 'src/app/common/bookCategory';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    this.listBookCategories()
  }
bookCategory:BookCategory[];
  listBookCategories()
  {
   this._bookService.getBooksCategory().subscribe(
     data=>{
       console.log("bookcat",data)
       this.bookCategory=data}
   )
  }

}
