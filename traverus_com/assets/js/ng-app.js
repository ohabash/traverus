var app = angular.module('trav',["ngRoute", "ngAnimate", "contentful"]);

// routes
app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller: 'ListenController',
			templateUrl: 'partials/views/about.html',
			activeClass: 'about',
			activeJs: 'about'
		})
		.when('/contact', {
			controller: 'ListenController',
			templateUrl: 'partials/views/contact.html',
			activeClass: 'contact',
			activeJs: 'contact'
		})
		.otherwise({
			templateUrl:'partials/views/404.html'
		});	
		$locationProvider.html5Mode(true);
});

// contentful config
app.config(function(contentfulProvider){
	contentfulProvider.setOptions({
	    space: '0dni8kwbpqk0',
	    accessToken: '7929078d458ad331293246c52fa4c9837c99a31d29bfe7fafa70ef833b20ef5c'
	});
});