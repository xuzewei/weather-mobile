// Dev Server for Glitch's "Live Preview"

const express = require('express')
const app = express()

// Serve the build "dist" directory statically
app.use(express.static('dist'))

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
