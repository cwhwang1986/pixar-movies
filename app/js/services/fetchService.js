'use strict';
(function(angular){
	var fetchService = function($http){
		return {
			fetchData: function(){
				return $http({
				  method: 'JSONP', 
				  url: 'https://api.themoviedb.org/3/company/3-pixar-animation-studios/movies?api_key=51b2550f677015fea635590d341a4cad&page=2&callback=JSON_CALLBACK'
				});
			},
			fetchDetail: function(id){
				return $http({
				  method: 'JSONP', 
				  url: 'https://api.themoviedb.org/3/movie/' + id + '?api_key=51b2550f677015fea635590d341a4cad&callback=JSON_CALLBACK'
				});
			}
		};
	};

//------------------------------
// Register the service
//------------------------------
	angular.module('mainApp')
		.factory('fetchService', fetchService);
})(angular);