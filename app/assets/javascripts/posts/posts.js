angular.module('flapperNews', ['ui.router', 'templates'])
.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;

}]);