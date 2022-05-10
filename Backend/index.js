const connectmongo= (require("./db"));
connectmongo();
var cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const port = 3000
app.use(express.json());
// this middleware is required for req.body to work
app.use('/api/auth',require("./routes/auth"))
// jab localhost/api/auth hit hoga tab auth load hoga
app.use('/notes',require("./routes/notes"))

app.listen(port, () => {
  console.log(`I-notes listening at http://localhost:${port}`)
})