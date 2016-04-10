var express = require('express');
var router = express.Router();
var p = require("xml2js");
var fs = require("fs");
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
		console.log(files);
		res.send(files)
	})
})
router.post("/getXMLInfo", function(req, res) {
	console.log(req.body.n);
	var name = req.body.n;
	fs.readFile('../public/xml/' + name, function(err, data) {
		if (err) throw err;
		p.parseString(data, function(err, result) {
			if (err) {
				throw err; // statement
			}

			var n = result.conversation.conversationInteractions[0].Interaction.length;

			var xml = new Array(n);
			for (var i = 0; i < n; i++) {
				console.dir(result.conversation.conversationInteractions[0].Interaction[i]['$'].id);
				xml[i] = result.conversation.conversationInteractions[0].Interaction[i]['$'].id

			}
			res.send(xml)
				//console.dir(result.conversation.conversationInteractions[0].Interaction.length);
				//console.dir(result.conversation.conversationInteractions[0].Interaction[1]['$'].id);

		})
	})
})
module.exports = router;