import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';

import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor( private bookService:BookService,
    private _activatedRoute:ActivatedRoute,
    private _cartService: CartService) { }

  ngOnInit(): void {
    this.getBookInfo()
  }
   book:Book=new Book()
  getBookInfo()
  {
    const id:number=+this._activatedRoute.snapshot.paramMap.get('id');
    this.bookService.get(id).subscribe(
      data=>{
        console.log("data",data)
        this.book=data
      }
    )
  }


  addToCart(){
    console.log(`book name: ${this.book.name}, and price: ${this.book.unitPrice}`);
    const cartItem = new CartItem(this.book);
    this._cartService.addToCart(cartItem);
  }

}
