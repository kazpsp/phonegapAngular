'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile']);

myApp.config(function($routeProvider){
	$routeProvider.
      when('/', 
      {      	   
      	controller: HomeCtrl,
      	templateUrl: 'partials/homeView.html'
      }).
      when('/test', 
      {      	 
      	controller: testCtrl,
      	templateUrl: 'partials/test.html'
      }).
      when('/test2', 
      {      	 
      	controller: test2Ctrl,
      	templateUrl: 'partials/test2.html'
      }).
      when('/group/:groupId', 
      {      	 
      	controller: groupCtrl,
      	templateUrl: 'partials/group.html'
      }).
      when('/group/:groupId/store/:storeId', 
      {      	 
      	controller: storeCtrl,
      	templateUrl: 'partials/store.html'
      }).
      otherwise({redirectTo: '/'});
});




