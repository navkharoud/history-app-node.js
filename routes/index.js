var fs = require('fs');

var getHistory = function (id, callbackFunc){
    if (!id) id = 'The-Birth';
    fs.readFile('data.json', function(err, data){
        var info = JSON.parse(data);
        console.log(info[id]);
        callbackFunc(info[id]);
    });

};

exports.api = function(req,res){
    getHistory(req.query.information, function(stuff){
        res.render('home', stuff);
    });

};