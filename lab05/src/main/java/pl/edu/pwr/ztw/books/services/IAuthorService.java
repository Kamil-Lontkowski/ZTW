package pl.edu.pwr.ztw.books.services;

import pl.edu.pwr.ztw.books.models.Author;

import java.util.Collection;

public interface IAuthorService {
    public abstract Collection<Author> getAuthors();
    public abstract Author getAuthor(int id);
    public abstract boolean deleteAuthor(int id);
    public abstract boolean addAuthor(Author book);
    public abstract boolean updateAuthor(Author book);
}
