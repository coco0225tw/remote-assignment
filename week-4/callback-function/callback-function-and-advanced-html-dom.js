function ajax(src, callback) {
    //your code here
    let xhr = new XMLHttpRequest();
      
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText);
            // console.log(response); //map or foreach
            // return response
            console.log(response);
            callback(response);
        }
    };

    xhr.open("GET", src);
    xhr.send();
}


function render(data) {
    // your code here

    //render product name
    const newProduct = data
        .map((product, index) => `
            <tr class="product_${index+1}">
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.description}</td>
            </tr>
        `)
        .join("");
        
    const catData =Object.keys(data[0])
        .map(prop => 
        // 第一個字uppercase
            `<th>` + `${prop}`.charAt(0).toUpperCase() + `${prop}`.slice(1) + `</th>`
        )
        .join("");

    document.getElementById("table").innerHTML =  catData + newProduct;
}
    
    
ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response) {
    render(response);
    }
);