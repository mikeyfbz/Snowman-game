const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;


// const publicPath = path.join(__dirname, '../client/public');
app.use(express.static('client/public'))



// const server = app.listen(3000, function(){
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log('Listening on http://$s:$s', host, port)
// })

app.listen(port);
