var xml=require("xml2js");
var fs=require("fs");
var express = require('express');
var router = express.Router();

router.get("/getFile",function(req,res){
	fs.readdir("../public/xml",function(err,files){
		if(err){
			return err;
		}
		res.send(files)
	})
})
module.exports = router;