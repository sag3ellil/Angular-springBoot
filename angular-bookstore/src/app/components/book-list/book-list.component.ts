import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/common/book'
import { BookService } from 'src/app/services/book.service';

import{ActivatedRoute} from'@angular/router'
@Component({
  selector: 'app-book-list',
 // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _bookService:BookService,private _ActivatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe(()=>{
        this.listBooks();
    })
  }
  books:Book[];
currentCategoryId:number;
  listBooks()
  {
  const hasCateg=  this._ActivatedRoute.snapshot.paramMap.has('id');
    if(hasCateg)
    {
      this.currentCategoryId= +this._ActivatedRoute.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId=1;
    }
    
    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data => {
       
        this.books=data;
      }
    )
  }

  

}
