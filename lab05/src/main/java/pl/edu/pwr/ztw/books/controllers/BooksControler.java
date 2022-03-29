package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}