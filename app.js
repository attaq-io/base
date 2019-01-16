var createError = require( 'http-errors' );
var express = require( 'express' );
var path = require( 'path' );
var cookieParser = require( 'cookie-parser' );
var logger = require( 'morgan' );

var app = express();

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );

let router = express.Router();
router.get( '/', function( req, res, next ) {

    res.send( "Hello, world!" );

} );
app.use( router );

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
    next( createError( 404 ) );
} );

// error handler
app.use( function ( err, req, res, next ) {
    res.send( err );
} );

module.exports = app;
