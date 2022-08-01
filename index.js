const express = require('express')
const http = require('http')
const app = express()

const Server = http.createServer(app)
const PORT = process.env.PORT || 5000
const hostname = 'localhost'


//Get:http://localhost:5000
app.get('/',(req,res)=>{
    res.send("Welcome")
})

//Get:http://localhost:5000/user
app.get('/user',(req,res)=>{
    console.log("User Page")
    res.send("User Page")
})

//Get:http://localhost:5000/contact
app.get('/contact',(req,res)=>{
    res.send("Contact Page")
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:{PORT)}`)
})