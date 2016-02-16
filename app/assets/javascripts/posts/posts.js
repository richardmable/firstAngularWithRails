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
		// Angular $http service is a function that takes a single argument (config object) and returns a promise
		// examples with shortcuts for GET and POST
		// $http.get('/someUrl', config).then(successCallback, errorCallback);
		// $http.post('/someUrl', data, config).then(successCallback, errorCallback);
		return $http.get('/posts.json').success(function(data){
			angular.copy(data, o.posts)
		});
	};
	//the create method for a new post
	o.create = function(post){
		return $http.post('/posts.json', post).success(function(data){
			//push the newly created post into the posts array (does not save to DB, that is in controller)
			o.posts.push(data);
		})
	}
	//return the var o object so that it is exposed to any other Angular module that needs to inject it
	//by exporting an object that contains the posts array we can add new methods and objects to our services in the future
 return o;
}]);