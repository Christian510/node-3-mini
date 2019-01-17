const express = require( 'express' );
const bodyParser = require( 'body-parser' );
require( 'dotenv' ).config();
const app = express();
const sv = require( './messageCtrl.js' );

app.use( bodyParser.json() );
const message = '/api/messages/';
app.get( message, sv.getAllMessages );
app.post( message, sv.createMessages );


// Whats the difference?
// const port = process.env.PORT || 3000;
let { SERVER_PORT } = process.env;

app.listen( SERVER_PORT, () => `Listening on port ${SERVER_PORT}.`);

