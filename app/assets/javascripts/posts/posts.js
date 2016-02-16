angular.module('flapperNews')
.factory('posts', [
	'$http',
	function($http){

	var o = {
		posts: []
	};
	//this function queries the post route using Angular's $http service.
	//the success function allows us to bind a function that will be executed one the request returns
	//the route will return a list of posts, so we copy the list to the client side post object
	//anguluar.copy() function is used to make the UI update properly
	o.getAll = function(){
		return $http.get('/posts.json').success(function(data){
			angular.copy(data, o.posts)
		});
	};
	//return the var o object so that it is exposed to any other Angular module that needs to inject it
	//by exporting an object that contains the posts array we can add new methods and objects to our services in the future
 return o;
}]);