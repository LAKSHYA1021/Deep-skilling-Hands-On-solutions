package com.library;

import com.library.config.AppConfig;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring context using Java config
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        // Get and use the service
        BookService bookService = context.getBean(BookService.class);
        bookService.displayBooks();
    }
}
