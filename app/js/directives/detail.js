'use strict';
(function(angular, _){
	
	var controller = function($scope, $filter){
		$scope.next = function(){
			var idx = 0;
			_.each($scope.movies, function(ele){
				if(ele.id === $scope.movieId) {
					if((idx + 1) !== $scope.movies.length){
						$scope.movieId = $scope.movies[idx + 1].id;
					} 
				} else {
					idx++;
				} 
			});
		};
		$scope.back = function(){
			var idx = 0;
			_.each($scope.movies, function(ele){
				if(ele.id === $scope.movieId) {
					if(idx !== 0){
						$scope.movieId = $scope.movies[idx - 1].id;
					}
				} else {
					idx++;
				} 
			});
		};
	};

	var detailPane = function(){

		return {
			restrict: 'E',
			controller: controller,
			template: [
				'<div class="detailOuter" ng-style="url">',
				'<div class="detailBox">',
				'<div class="detailText">',
				'<div class="detailTitle">{{movieDetail.title}}</div>',
				'<div class="detailField">',
				'<div class="detailLabel">Tagline: </div>',
				'<div class="detailContent">{{movieDetail.tagline}}</div></div>',
				'<div class="detailField">',
				'<div class="detailLabel">Release Date:</div>',
				'<div class="detailContent">{{movieDetail.release_date}}</div>',
				'</div>',
				'<div class="detailField">',
				'<div class="detailLabel">Companies:</div>',
				'<div class="detailContent">',
				'<span ng-repeat="company in movieDetail.production_companies">{{company.name}}, </span>',
				'</div>',
				'</div>',
				'<div class="detailOverview">',
				'{{movieDetail.overview}}',
				'</div>',
				'<div class="detailHomepage">',
				'<a href="{{movieDetail.homepage}}" target="_blank">',
				'{{movieDetail.homepage}}</a>',
				'</div></div>',
				'<div class="detailPoster">',
				'<a href="{{movieDetail.homepage}}" target="_blank">',
				'<img src="https://image.tmdb.org/t/p/w185{{movieDetail.poster_path}}"></a>',
				'</div>',
				'<a class="badge-switch-left" ng-click="back()">',
				'<i class="fa fa-chevron-left"></i>',
				'</a>',
				'<a class="badge-switch-right" ng-click="next()">',
				'<i class="fa fa-chevron-right"></i>',
				'</a>',
				'</div></div>'
			].join('')
		};
	};

//------------------------------
// Register the directive
//------------------------------
	angular.module('mainApp')
		.directive('detailPane', detailPane);

})(angular, _);