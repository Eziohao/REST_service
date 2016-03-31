var p=require('xml2js');
var fs=require('fs');

fs.readFile('client.xml', function(err,data){
	if(err) throw err;
	console.log(p.parseString(data.toString()));
});
