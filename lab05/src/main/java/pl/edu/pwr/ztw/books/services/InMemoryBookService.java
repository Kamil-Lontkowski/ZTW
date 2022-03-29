package pl.edu.pwr.ztw.books.services;

import org.springframework.stereotype.Service;
import pl.edu.pwr.ztw.books.models.Book;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class InMemoryBookService implements IBooksService {
    private static List<Book> booksRepo = new ArrayList<>();

    static {
        booksRepo.add(new Book(1,"Potop", "Henryk Sienkiewicz", 936));
        booksRepo.add(new Book(2,"Wesele", "Stanisław Reymont", 150));
        booksRepo.add(new Book(3,"Dziady", "Adam Mickiewicz", 292));
    }
    @Override
    public Collection<Book> getBooks() {
        return booksRepo;
    }

    @Override
    public Book getBook(int id) {
        return booksRepo.stream()
                .filter(b -> b.getId() == id)
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
        if(idCollision){
            return false;
        }
        booksRepo.add(book);
        return true;
    }

    @Override
    public boolean updateBook(Book book) {
        int booksRepoSize = booksRepo.size();
        int foundBookIndex = -1;

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
