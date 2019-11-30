const express = require('express')
const cors = require('cors')
const t9 = require('./t9')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  const { input } = req.query
  if (!/^[2-9]*$/.test(input)) {
    return res.status(400).send({
      message: 'input should be a numeric between 2-9'
    })
  }
  const possibleWords = t9.predictWord(input)
  res.send(possibleWords)
})

const port = process.env.PORT || '3001'
app.listen(port, () => {
  console.log(`server started at port ${port}`)
})