var app = angular.module('trav');

// ListenContrller
app.controller('ListenController', function ($scope, $rootScope, $location) {
	$scope.PAGE = function (viewLocation) { 
    	return viewLocation === $location.path();
	};
});









// teams
app.controller('teamCtrl', function($scope, $timeout, $http) {
	
	// get sheet
	var token = "AIzaSyDQH70jXCG9FH2831ErEoJs7cppRLYQECo";
	var sheet = "1pIpCiH8lGUXYKW-fLZ6rL_h2IrOoSzcEKn8om6Ba2c8";
	var url = "https://sheets.googleapis.com/v4/spreadsheets/"+sheet+"/values/Sheet1?key="+token+"&alt=json&majorDimension=rows";
	console.info(url);
	$http.get(url).then(function(response) {
		$scope.items = [];
		var each = response.data.values;
		for (var i = 1; i < each.length; i++) {
			var self = each[i]
			var tmp = [];
			tmp.push({
			    name : self[0], 
			    title : self[1], 
			    bio : self[2], 
			    img : self[3], 
			    flag : self[4], 
			    visible : self[5]
			});
			$scope.items.push(tmp.pop())
		}
		// console.log(JSON.stringify($scope.items));
		console.info($scope.items);
		content_area();
		$timeout(content_area, 1000);
	});
	// content area update on hover


});


// teamContentful
app.controller('teamContentful', function($scope, $timeout, $http) {
	$timeout(content_area, 1000);

});

// team content area logic
function content_area(){
	$('.teams-list .column').mouseover( function(){
		console.log('should work')
	    set_active_tab($(this));
	});
	set_active_tab($('.teams-list .column.active'))
	function set_active_tab(e){
	    e.siblings().removeClass('active');
	    e.addClass('active');
	    var name = e.data('name');
	    var title = e.data('title');
	    var bio = e.find('p.bio').text();
	    // console.log(name+"<===>"+title);
	    $('#name h2').text(name);
	    $('#title p.f').text(title);
	    $('#bio p').text(bio);
	}
}





