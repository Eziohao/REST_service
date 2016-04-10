
var ServiceApp=angular.module('ServiceApp',[]);

ServiceApp.controller('formController',function($scope,$http){
    $http.get("/getFile",function(err,files){
    	if(err){
    		return err;
    	}
    	console.log(files);
    	$scope.services=files;
    })
})
