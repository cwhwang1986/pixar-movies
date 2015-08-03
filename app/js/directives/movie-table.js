'use strict';
(function(angular){
	
	var controller = function($scope, $filter){
		var orderBy = $filter('orderBy');
	  $scope.order = function(predicate, reverse) {
	    $scope.movies = orderBy($scope.movies, predicate, reverse);
	    $scope.show = !$scope.show;
	  };
	  $scope.selectMovie = function(id){
  		$scope.movieId = id;
	  };
	};

	var movieTable = function(){

		return {
			restrict: 'E',
			controller: controller,
			template: [
				'<div class="tableOuter" ng-style="{{url}}">',
				'<table class="table table-hover active">',
				'<thead>',
				'<tr>',
				'<th>&nbsp;</th>',
				'<th>Movie Title',
				'<i class="fa fa-sort-alpha-asc" ng-click="reverse=!reverse;order(\'title\', reverse)" ng-show="show"></i>',
				'<i class="fa fa-sort-alpha-desc" ng-click="reverse=!reverse;order(\'title\', reverse)" ng-show="!show"></i>',
				'</th>',
				'<th>Release Date <i class="fa fa-sort" ng-click="reverse=!reverse;order(\'release_date\', reverse)"></i></th></tr>',
				'</thead>',
				'<tbody>',
				'<tr ng-repeat="movie in movies" ng-click="selectMovie(movie.id)">',
				'<td><img ng-src="https://image.tmdb.org/t/p/w45{{movie.poster_path}}"/></td>',
				'<td>{{movie.title}}</td><td>{{movie.release_date}}</td>',
				'</tr></tbody>',
				'</table>',
				'</div>'
			].join('')
		};
	};

//------------------------------
// Register the directive
//------------------------------
	angular.module('mainApp')
		.directive('movieTable', movieTable);

})(angular);