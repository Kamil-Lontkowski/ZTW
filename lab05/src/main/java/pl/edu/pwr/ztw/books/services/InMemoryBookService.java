package pl.edu.pwr.ztw.books.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwr.ztw.books.DTOs.ResponseBook;
import pl.edu.pwr.ztw.books.models.Book;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InMemoryBookService implements IBooksService {
    private static List<Book> booksRepo = new ArrayList<>();

    @Autowired
    private AuthorService authorService;

    static {
        booksRepo.add(new Book(1,"Potop", 1, 936));
        booksRepo.add(new Book(2,"Wesele", 2, 150));
        booksRepo.add(new Book(3,"Dziady", 3, 292));
    }
    @Override
    public Collection<ResponseBook> getBooks() {
        return booksRepo.stream()
                .map(b -> new ResponseBook(b,authorService.getAuthor(b.getAuthorId())))
                .collect(Collectors.toList());
    }

    @Override
    public ResponseBook getBook(int id) {
        return booksRepo.stream()
                .filter(b -> b.getId() == id)
                .map(b -> new ResponseBook(b,authorService.getAuthor(b.getAuthorId())))
                .findAny()
                .orElse(null);
    }

    @Override
    public boolean deleteBook(int id) {
        booksRepo.removeIf(b -> b.getId() == id);
        return true;
    }

    @Override
    public boolean addBook(Book book) {
        boolean idCollision = booksRepo.stream()
                .anyMatch(b -> b.getId() == book.getId());

        boolean authorNotFound = authorService.getAuthor(book.getAuthorId()) == null;

        if(idCollision || authorNotFound){
            return false;
        }
        booksRepo.add(book);
        return true;
    }

    @Override
    public boolean updateBook(Book book) {
        int booksRepoSize = booksRepo.size();
        int foundBookIndex = -1;

        boolean authorNotFound = authorService.getAuthor(book.getAuthorId()) == null;

        if(authorNotFound){
            return false;
        }

        for(int i=0;i<booksRepoSize;i++){
            if(booksRepo.get(i).getId() == book.getId()){
                foundBookIndex = i;
                break;
            }
        }

        if(foundBookIndex == -1){
            return false;
        }

        booksRepo.set(foundBookIndex, book);
        return true;
    }
}
