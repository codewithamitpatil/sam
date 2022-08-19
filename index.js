const express = require( 'express' );
const cors = require( 'cors' );
const path = require( 'path' );
const fs = require( 'fs' );


// if (fs.existsSync(videoPath)) {
//   // path exists
//   console.log("exists:", videoPath);
//   console.log('size ==>',videoSize)

// } else {
//   console.log("DOES NOT exist:", path);
// }


process.env.PORT = 5001;

const port = process.env.PORT || 5000;

const app = express();

app.use( cors( '*' ) );

app.get( '', async ( req, res ) => {
    res.send( process.env )
} )


app.get( '/a/:key', async ( req, res ) => {
    res.send( `message ===> ${ req.params.key }` )
} )

app.use( '*', async ( req, res ) => {
    res.send( "url nor found" );
} )


app.listen( port, () => {
    console.log( `Server is running at port => ${ port }` );
} )