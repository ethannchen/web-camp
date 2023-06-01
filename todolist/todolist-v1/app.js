const express = require('express')

const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


var items = []

app.get('/', (req, res)=>{
    var today = new Date();
    
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString('en-US', options)

    res.render('list',{day:day,items:items})
})



app.post('/',(req,res)=>{
    var item = req.body.item;
    items.push(item);
    res.redirect('/')
})


app.listen(3000,()=>{
    console.log("Server started on 3000")
})