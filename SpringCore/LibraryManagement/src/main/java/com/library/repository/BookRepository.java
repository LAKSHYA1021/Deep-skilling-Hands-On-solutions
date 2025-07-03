package com.library.repository;

import org.springframework.stereotype.Component;

@Component
public class BookRepository {
    public void getBookList() {
        System.out.println("Fetching list of books from the repository...");
    }
}
