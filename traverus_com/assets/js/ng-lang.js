var app = angular.module('trav');

app.controller('lang', function ($scope, $http, $rootScope, $location) {
	$scope.clear_url = function (lang) {
		$location.search('lang', null);
	}
	$scope.translate = function (lang) {
		if(!lang){
			var lang = 'en';
			console.log('undefined');
		}
		var cur = $("#"+lang);
		$('ul.languages li a.active').removeClass('active');
		cur.addClass('active')
		$scope.file = lang+'.json';
		$http.get($scope.file).then(successCallback, errorCallback);
		function successCallback(response){
		    console.log('success code');
		    $scope.lang = response.data;
		    console.log($scope.lang.TITLE);
		    $scope.clear_url();
		}
		function errorCallback(error){
		    console.error(error);
		}
	}
	$scope.lange = $location.search().lang;
	$scope.translate($scope.lange);
});






