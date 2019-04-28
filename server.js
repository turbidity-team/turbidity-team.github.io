const express = require('express')
const app = express()
const port = 3000
const ee = require('@google/earthengine');
const path = require('path');


app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const PRIVATE_KEY = require('./privatekey.json');
// const PORT = process.env.PORT || 3000;
//
// ee.data.authenticateViaPrivateKey(PRIVATE_KEY, () => {
//   ee.initialize(null, null, () => {
//     app.listen(PORT);
//     console.log(`Listening on port ${PORT}`);
//   });
// });
