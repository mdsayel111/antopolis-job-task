import express from "express"
import config from "./app/config"

// inital app
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${config.port}`)
})