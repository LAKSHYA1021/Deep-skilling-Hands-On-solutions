package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public void displayBooks() {
        System.out.println("Service: Displaying books");
        bookRepository.getBookList();
    }
}
