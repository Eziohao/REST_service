var p=require('xml2js');
var fs=require('fs');

var operations=fs.readFileSync('../json/operations.json');

fs.readFile('../XML/client.xml', function(err,data){
	if(err) throw err;
	p.parseString(data, function(err,result){
		if (err) {
			throw err;// statement
		}
		var n=result.conversation.conversationInteractions[0].Interaction.length;
		for(var i=0;i<n;i++){
			console.dir(result.conversation.conversationInteractions[0].Interaction[i]['$'].id);
		}
		//console.dir(result.conversation.conversationInteractions[0].Interaction.length);
		//console.dir(result.conversation.conversationInteractions[0].Interaction[1]['$'].id);

	})
})