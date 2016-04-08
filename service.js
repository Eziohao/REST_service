var p=require('xml2js');
var fs=require('fs');

var operations=fs.readFileSync('operations.json');

fs.readFile('client.xml', function(err,data){
	if(err) throw err;
	p.parseString(data, function(err,result){
		if (err) {
			throw err;// statement
		}
		console.dir(result.conversation.conversationInteractions);

	})
});
