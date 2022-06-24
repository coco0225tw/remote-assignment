const express = require('express');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'pug');

app.get('/', (req, res) => { 
    response.send("Hello, My Server!");
});


var eval = function (req, res, next) {
    let number = req.query.number;
    let link = req.url;
    if (link == "/getData") {
        next();
    } else if (link !== "/getData" && number >0) {
        let sum = 0;
        for ( let i = 0; i <= number; i++) {
            sum = sum + i;
        }
        res.send(`You get ${sum}`);
    } else {
        res.send("Wrong parameter");
    }
};

app.get("/getData", eval, function (req, res) {
    res.send("Lack of parameter");
});


app.listen(3000);