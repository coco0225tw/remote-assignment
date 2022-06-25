import express from 'express';
const app = express();



app.get(`/`, async (req, res) => {
    res.send(`Hello, My Server!`);
})
app.get(`/getData`, async (req, res) => {
    res.send(`${!(req.query.number) ? `Lack of Parameter` : (isNaN(req.query.number)) ? `Wrong Parameter` : ((1 + Number(req.query.number)) * Number(req.query.number)) / 2}`);
})
app.get('/sum.html', function (req, res) {
    res.sendFile('sum.html', { root: '.' });
});

app.listen(3000);




