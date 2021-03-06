
const express = require('express');

const app = express();
const {QuoteRouter} = require( './server/routes/quoteRouter' );

// app.use(express.static(__dirname + "/static"));
app.use( express.urlencoded({extended:true}) );
app.set('views', __dirname + '/client/views');
app.set('views engine', 'ejs' );
require( './server/config/mongoose.js' );

// require('./server/routes/quoteRouter.js')(app);
app.use('/', QuoteRouter);


app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});