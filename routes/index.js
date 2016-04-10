var express = require('express');
var router = express.Router();
var xml=require("xml2js");
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST Service' });
});

router.get("/getFile",function(req,res){
	fs.readdir("../public/xml",function(err,files){
		if(err){
			return err;
		}
		console.log(files);
		res.send(files)
	})
})
module.exports = router;
