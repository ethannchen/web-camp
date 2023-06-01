const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
//route
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.post('/bmicalculator', (req, res) => {
  var h = parseFloat(req.body.height) ;
  var w = parseFloat(req.body.weight) ;
  res.send("Your BMI is "+w/h/h);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}) 