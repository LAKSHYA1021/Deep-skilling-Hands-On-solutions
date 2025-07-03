package com.library;

import com.library.service.BookService;
import com.library.config.AppConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load the context using annotation-based config
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        // Get BookService bean
        BookService bookService = context.getBean(BookService.class);

        // Run the method to test DI
        bookService.displayBooks();
    }
}
