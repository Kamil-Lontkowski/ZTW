package pl.edu.pwr.ztw.books.services;

import org.springframework.stereotype.Service;
import pl.edu.pwr.ztw.books.models.Author;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class AuthorService implements IAuthorService {
    private static List<Author> AuthorRepo = new ArrayList<>();

    static {
        AuthorRepo.add(new Author(1, "Henryk", "Sienkiewicz"));
        AuthorRepo.add(new Author(2, "Stanisław", "Reymont"));
        AuthorRepo.add(new Author(2, "Adam", "Mickiewicz"));
    }

    @Override
    public Collection<Author> getAuthors() {
        return AuthorRepo;
    }

    @Override
    public Author getAuthor(int id) {
        return AuthorRepo.stream()
                .filter(b -> b.getId() == id)
                .findAny()
                .orElse(null);
    }

    @Override
    public boolean deleteAuthor(int id) {
        AuthorRepo.removeIf(b -> b.getId() == id);
        return true;
    }

    @Override
    public boolean addAuthor(Author book) {
        boolean idCollision = AuthorRepo.stream()
                .anyMatch(b -> b.getId() == book.getId());
        if(idCollision){
            return false;
        }
        AuthorRepo.add(book);
        return true;
    }

    @Override
    public boolean updateAuthor(Author book) {
        int AuthorRepoSize = AuthorRepo.size();
        int foundAuthorIndex = -1;

        for(int i=0;i<AuthorRepoSize;i++){
            if(AuthorRepo.get(i).getId() == book.getId()){
                foundAuthorIndex = i;
                break;
            }
        }

        if(foundAuthorIndex == -1){
            return false;
        }

        AuthorRepo.set(foundAuthorIndex, book);
        return true;
    }
}
