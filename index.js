class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    removeItem(product) {
      this.items = this.items.filter(item => item.product !== product);
    }
  
    calculateTotal() {
      let total = 0;
      this.items.forEach(item => {
        total += item.product.price * item.quantity;
      });
      return total;
    }
  }
  
  function displayProducts(products) {
    console.log("Available Products:");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
  }
  
  function displayCart(cart) {
    console.log("Shopping Cart:");
    cart.items.forEach((item, index) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
  }
  
  const products = [
    new Product("Product 1", 10),
    new Product("Product 2", 15),
    new Product("Product 3", 20)
  ];
  
  const cart = new ShoppingCart();
  
  console.log("Welcome to the Simple E-commerce Console App!");
  
  function main() {
    displayMenu();
  }
  
  function displayMenu() {
    console.log("\nMenu:");
    console.log("1. View Products");
    console.log("2. Add Product to Cart");
    console.log("3. Remove Product from Cart");
    console.log("4. View Cart");
    console.log("5. Checkout");
    console.log("6. Exit");
  
    const choice = prompt("Enter your choice: ");
  
    switch (choice) {
      case "1":
        displayProducts(products);
        break;
      case "2":
        displayProducts(products);
        const productChoice = parseInt(prompt("Enter the product number: "));
        const quantity = parseInt(prompt("Enter the quantity: "));
        const product = products[productChoice - 1];
        cart.addItem(product, quantity);
        console.log("Product added to cart.");
        break;
      case "3":
        displayCart(cart);
        const removeChoice = parseInt(prompt("Enter the product number to remove: "));
        const removedProduct = cart.items[removeChoice - 1].product;
        cart.removeItem(removedProduct);
        console.log("Product removed from cart.");
        break;
      case "4":
        displayCart(cart);
        break;
      case "5":
        const total = cart.calculateTotal();
        displayCart(cart);
        console.log(`Total: $${total}`);
        console.log("Thank you for shopping!");
        break;
      case "6":
        console.log("Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  
    displayMenu();
  }
  
  main();