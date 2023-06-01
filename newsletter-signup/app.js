//index.js
const express = require('express')
const https = require('https')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))




//routes
app.get('/', (req, res) => { res.sendFile(__dirname + '/signup.html') })
app.post('/', (req,res)=>{
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    console.log(fName+lName+email)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})