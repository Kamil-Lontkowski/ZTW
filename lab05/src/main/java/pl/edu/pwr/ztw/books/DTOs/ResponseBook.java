package pl.edu.pwr.ztw.books.DTOs;

import pl.edu.pwr.ztw.books.models.Author;
import pl.edu.pwr.ztw.books.models.Book;

public class ResponseBook{
    private int id;
    private String title;
    private Author author;
    int pages;

    public ResponseBook(int id, String title, Author author, int pages) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    public ResponseBook(Book book, Author author){
        this.id = book.getId();
        this.title = book.getTitle();
        this.author = author;
        this.pages = book.getPages();
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author authorId) {
        this.author = authorId;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

}
