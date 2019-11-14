
require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require('express-session');

let { SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use( bodyParser.json() );

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const mc = require( './messageCtrl' );

app.get( '/api/messages/', mc.getAllMessages );
app.get( '/api/messages/history', mc.history )
app.post( '/api/messages', mc.createMessage );


// Whats the difference?
// const port = process.env.PORT || 3000;


app.listen( SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}.`)
});

