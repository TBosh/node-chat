const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const messageBaseURL = "/api/messages";
app.post(messageBaseURL, mc.create);
app.get(messageBaseURL, mc.read);
app.put(`${messageBaseURL}/:id`, mc.update);
app.delete(`${messageBaseURL}/:id`, mc.delete);

const port = 3001;
app.listen( port, () => {console.log(`Server listening to your thoughts on ${port}.`); } );