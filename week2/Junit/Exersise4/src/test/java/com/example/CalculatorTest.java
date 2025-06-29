package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    // Setup: runs before each test
    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setting up Calculator object...");
    }

    // Teardown: runs after each test
    @After
    public void tearDown() {
        calc = null;
        System.out.println("Tearing down Calculator object...");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        // Arrange
        int a = 4;
        int b = 3;

        // Act
        int result = calc.multiply(a, b);

        // Assert
        assertEquals(12, result);
    }
}
