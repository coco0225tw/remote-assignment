function render(data) {
    // your code here
    const newData = data
        .map(product => `${product.name} 要價新台幣${product.price}元，是${product.description}<br>`)
        .join("");
        document.getElementById("body").innerHTML = newData;
    }
    
    
ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response) {
    render(response);
    }
);