package pl.edu.pwr.ztw.books.services;

import pl.edu.pwr.ztw.books.DTOs.ResponseBook;
import pl.edu.pwr.ztw.books.models.Book;

import java.util.Collection;

public interface IBooksService {
    public abstract Collection<ResponseBook> getBooks();
    public abstract ResponseBook getBook(int id);
    public abstract boolean deleteBook(int id);
    public abstract boolean addBook(Book book);
    public abstract boolean updateBook(Book book);
}
