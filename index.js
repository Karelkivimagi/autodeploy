const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('test test test 123')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
