
var express = require('express');
var routes = require('./routes');

var app = express();

var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', routes.api);

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});

