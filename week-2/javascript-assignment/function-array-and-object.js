function calculate(data) {
    // your code here
    let sum = 0; //sum為數字，假設一開始為0
    for ( i = 0; i < data.products.length; i++ ) {
        sum += data.products[i].price;
    }
    return sum * (1 - data.discount)
}
    
    
calculate({
  discount: 0.1,
  products: [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 700 },
      { name: "Product 3", price: 250 }
  ]
}); // show the total price of all products after applying a discount