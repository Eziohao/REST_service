var express = require('express');
var router = express.Router();
var p = require("xml2js");
var fs = require("fs");
var fileName;
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'REST Service'
	});
});

router.get("/getFile", function(req, res) {
	fs.readdir("../public/xml", function(err, files) {
		if (err) {
			return err;
		}
		//console.log(files);
		res.send(files)
	})
})
router.post("/getXMLInfo", function(req, res) {
	console.log(req.body.n);
	fileName = req.body.n;
	fs.readFile('../public/xml/' + fileName, function(err, data) {
		if (err) throw err;
		p.parseString(data, function(err, result) {
			if (err) {
				throw err; // statement
			}
            console.dir(result.conversation.conversationTransitions[0].Transition[0].SourceInteraction[0].$.href);
			var n = result.conversation.conversationInteractions[0].Interaction.length;

			var xml = new Array(n);
			for (var i = 0; i < n; i++) {
				//console.dir(result.conversation.conversationInteractions[0].Interaction[i]['$'].id);
				xml[i] = result.conversation.conversationInteractions[0].Interaction[i]['$'].id

			}
			res.send(xml)
				//console.dir(result.conversation.conversationInteractions[0].Interaction.length);
				//console.dir(result.conversation.conversationInteractions[0].Interaction[1]['$'].id);

		})
	})
})
router.post("/getInvoke",function(req,res){
	console.log(req.body.name);
	var name=req.body.name;
	var nextOp=new Array(0);
	fs.readFile('../public/xml/'+fileName,function(err,data){
		if(err)throw err;
		p.parseString(data,function(err,result){
			if(err){
				throw err;
			}
			var n=result.conversation.conversationTransitions[0].Transition.length;
			for(var i=0;i<n;i++){
				if(name==result.conversation.conversationTransitions[0].Transition[i].SourceInteraction[0].$.href){
                   nextOp[0]=result.conversation.conversationTransitions[0].Transition[i].DestinationInteraction[0].$.href
                   res.send(nextOp);
				}
			}
		})
	})
})
module.exports = router;