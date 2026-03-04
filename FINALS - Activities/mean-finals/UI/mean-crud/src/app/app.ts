import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any[] = [];
  editingBook: any = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get<any[]>(this.APIUrl + 'GetBooks').subscribe({
      next: (data) => {
        this.books = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch books:', err)
    });
  }

  addBook() {
    const title = (<HTMLInputElement>document.getElementById("newBook")).value;
    const desc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    const price = (<HTMLInputElement>document.getElementById("newPrice")).value;
    const author = (<HTMLInputElement>document.getElementById("newAuthor")).value;
    const genre = (<HTMLInputElement>document.getElementById("newGenre")).value;

    if (!title.trim()) { alert("Please enter a book title."); return; }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("author", author);
    formData.append("genre", genre);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe({
      next: () => {
        (<HTMLInputElement>document.getElementById("newBook")).value = '';
        (<HTMLInputElement>document.getElementById("newDesc")).value = '';
        (<HTMLInputElement>document.getElementById("newPrice")).value = '';
        (<HTMLInputElement>document.getElementById("newAuthor")).value = '';
        (<HTMLInputElement>document.getElementById("newGenre")).value = '';
        this.refreshBooks();
      },
      error: (err) => console.error(err)
    });
  }

  startEdit(book: any) {
    this.editingBook = { ...book };
    this.cdr.detectChanges();
  }

  cancelEdit() {
    this.editingBook = null;
    this.cdr.detectChanges();
  }

  saveEdit() {
    // Read directly from DOM — same pattern that works for addBook
    const title = (<HTMLInputElement>document.getElementById("editTitle")).value;
    const desc = (<HTMLInputElement>document.getElementById("editDesc")).value;
    const price = (<HTMLInputElement>document.getElementById("editPrice")).value;
    const author = (<HTMLInputElement>document.getElementById("editAuthor")).value;
    const genre = (<HTMLInputElement>document.getElementById("editGenre")).value;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("author", author);
    formData.append("genre", genre);

    this.http.put(this.APIUrl + 'UpdateBook?id=' + this.editingBook.id, formData).subscribe({
      next: () => {
        this.editingBook = null;
        this.refreshBooks();
      },
      error: (err) => console.error(err)
    });
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe({
      next: () => this.refreshBooks(),
      error: (err) => console.error(err)
    });
  }
}
