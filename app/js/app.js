'use strict';

(function(angular){

	var appController = function($scope, fetchService){
		$scope.movies = [];
		$scope.movieId = 200481;
		$scope.movieDetail = {};
		fetchService.fetchData().success(function(data){
			$scope.movies = data.results;
			$scope.movieId = $scope.movies[0].id;
		});
		$scope.$watch('movieId', function(newValue, oldValue) {
		  fetchService.fetchDetail($scope.movieId).success(function(data){
			  $scope.movieDetail = data;
			  $scope.url = {
			  	'background-image': 'url(https://image.tmdb.org/t/p/w1280'+ $scope.movieDetail.backdrop_path +')'
			  };
			});
		});
	};

//------------------------------
// Initialize the angular module	
//------------------------------
	angular.module('mainApp', [])
	.controller('appController', appController);

})(angular);


