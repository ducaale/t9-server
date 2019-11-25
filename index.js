const express = require('express')
const t9 = require('./t9')
const app = express()

app.get('/', (req, res) => {
  const { input } = req.query
  const possibleWords = t9.predictWord(input)
  res.send(possibleWords)
})

const port = process.env.PORT || '3000'
app.listen(port, () => {
  console.log(`server started at port ${port}`)
})