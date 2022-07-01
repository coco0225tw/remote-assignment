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
    const newData = data
        .map(product => `${product.name} 要價新台幣${product.price}元，是${product.description}<br>`)
        .join("");
        document.getElementById("body").innerHTML = newData;
}
    
    
ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response) {
    render(response);
    }
);