package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pl.edu.pwr.ztw.books.models.Book;
import pl.edu.pwr.ztw.books.services.IBooksService;

@RestController
public class BooksControler {
    // czy to jest singleton ?
    @Autowired
    IBooksService booksService;

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public ResponseEntity<Object> getBooks() {
        return new ResponseEntity<>(booksService.getBooks(), HttpStatus.OK);
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getBook(@PathVariable("id") int id){
        return new ResponseEntity<>(booksService.getBook(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBook(@PathVariable int id){
        if(booksService.deleteBook(id))
        {
            return new ResponseEntity(HttpStatus.OK);
        };
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/books", method = RequestMethod.PATCH)
    public ResponseEntity updateBook(@RequestBody Book book){
        if(booksService.updateBook(book))
        {
            return new ResponseEntity<>(HttpStatus.CREATED);
        };
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/books", method = RequestMethod.POST)
    public ResponseEntity addBook(@RequestBody Book book){
        if(booksService.addBook(book)){
            return new ResponseEntity(HttpStatus.CREATED);
        };
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}