const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send("Nirmal Kumar");
})

app.get('/login',(req, res)=>{
    res.send("<h1>Please Login to Chai and Code</h1>");
})

app.get('/logout',(req, res)=>{
    res.send("You Logged Out.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})