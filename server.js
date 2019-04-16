const express = require('express')
const app = express()
const port = 3000
const ee = require('@google/earthengine');


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const PRIVATE_KEY = require('./privatekey.json');
const PORT = process.env.PORT || 3000;

ee.data.authenticateViaPrivateKey(PRIVATE_KEY, () => {
  ee.initialize(null, null, () => {
    app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
  });
});
