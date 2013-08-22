'use strict';

/* Controllers */
function HomeCtrl(domiFactory,$scope,navSvc,$rootScope) {
	$scope.$parent.loadGif=true;
	domiFactory.getGroups().then(function(d) {
		$scope.dataset = d;	
		$scope.$parent.loadGif=false;
	});	
}

function groupCtrl(domiFactory, $scope,navSvc,$rootScope, $routeParams) {
	$scope.$parent.loadGif=true;
	domiFactory.getGroup($routeParams.groupId).then(function(d) {
		$scope.dataset = d;	
		$scope.$parent.loadGif=false;
	});	
}

function storeCtrl(domiFactory, $scope,navSvc,$rootScope, $routeParams) {
	$scope.$parent.loadGif=true;
	domiFactory.getStore($routeParams.groupId, $routeParams.storeId).then(function(d) {
		$scope.dataset = d.products;	
		$scope.$parent.loadGif=false;
	});	
}

function rootCtrl($scope,navSvc,$rootScope) {
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };
    $scope.slideHome = function (path,type) {
    	navSvc.deleteHistory();
        navSvc.slidePage(path,type);
    };
    $scope.back = function () {
        navSvc.back();
    };
    $scope.changeSettings = function () {
        $rootScope.showSettings = true;
    };
    $scope.closeOverlay = function () {
        $rootScope.showSettings = false;
    };
}

function testCtrl($scope,navSvc,$rootScope) {
	
}

function test2Ctrl($scope,navSvc,$rootScope) {
	
}





