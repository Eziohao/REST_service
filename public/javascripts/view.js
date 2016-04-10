var ServiceApp = angular.module('ServiceApp', []);

ServiceApp.controller('formController', function($scope, $http) {

	$http.get("/getFile").then(function(files) {

		console.log(files.data);
		$scope.services = files.data;
	}, function(err) {
		console.log(err);
	})
	$scope.getFileName = function(name) {
		
		name = {
			n: $scope.services[0]
		};
		console.log($scope.services[0]);
		$http.post("/getXMLInfo", name).then(function(result) {
			console.log(result);
		    $scope.showValue=true;
			$scope.xml=result.data;
			console.log($scope.xml)
		}, function(err) {
			console.log(err);
		})
	}
	$scope.invokeOp=function(data){
		var mydate=new Date;
		var op={
			name:data,
			year:mydate.getFullYear(),
			month:mydate.getMonth(),
			date:mydate.getDate(),
			hours:mydate.getHours(),
			min:mydate.getMinutes(),
			sec:mydate.getSeconds()
		}

		$scope.op=op;
		$scope.showInvoke=true;
		
	}
})