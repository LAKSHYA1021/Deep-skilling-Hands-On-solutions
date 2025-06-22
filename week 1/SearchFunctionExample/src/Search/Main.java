package Search;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(103, "Book", "Stationery"),
                new Product(104, "Camera", "Electronics"),
                new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search:");
        Product foundLinear = SearchProduct.linearSearch(products, "Camera");
        System.out.println(foundLinear != null ? foundLinear : "Product not found");

        System.out.println("Binary Search:");
        SearchProduct.sortProductsByName(products);  // Required before binary search
        Product foundBinary = SearchProduct.binarySearch(products, "Camera");
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
    }
}
