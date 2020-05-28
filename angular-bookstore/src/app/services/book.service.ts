import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/bookCategory';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   private baseUrl ="http://localhost:8181/api/v1/books";
   private categoryUrl ="http://localhost:8181/api/v1/book-category";
  constructor(private HttpClient:HttpClient) { }

  getBooks(theCategoryId:number,currentPage:number,pageSize:number):Observable<GetResponseBooks>//Observable<Book[]>
  {
    //return this.HttpClient.get<GetResponseBooks>(this.baseUrl).pipe(
     // map(response => response._embedded.books)
     const searchUrl=`${this.baseUrl}/search/categoryid?id=${theCategoryId}
                                                        &page=${currentPage}
                                                        &size=${pageSize}`;
     return this.HttpClient.get<GetResponseBooks>(searchUrl)
     /*.pipe(
       map(response => response._embedded.books)
    )*/
  }

  getBooksCategory() :Observable<BookCategory[]>
  {
    //return this.HttpClient.get<GetResponseBooks>(this.baseUrl).pipe(
     // map(response => response._embedded.books)
   
     // const searchUrl=`${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
     return this.HttpClient.get<GetResponseBookCatepory>(this.categoryUrl).pipe(
       map(response => response._embedded.bookCateogry)
    )
  }

  searchBook(keyword: string, currentPage: number, pageSize: number): Observable<GetResponseBooks>{
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}&page=${currentPage}&size=${pageSize}`;
    //return this.getBooksList(searchUrl);
    return this.HttpClient.get<GetResponseBooks>(searchUrl);
  }

  get(bookId:number):Observable<Book>
  {
    //return this.HttpClient.get<GetResponseBooks>(this.baseUrl).pipe(
     // map(response => response._embedded.books)
     const BookDetailUrl=`${this.baseUrl}/${bookId}`;
     return this.HttpClient.get<Book>(BookDetailUrl);
    
  }

}

interface GetResponseBooks{
  _embedded :{
    books:Book[];
  }
  page: {
    size: number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}

interface GetResponseBookCatepory{
    _embedded :{
      bookCateogry:BookCategory[];
    },

    
}
