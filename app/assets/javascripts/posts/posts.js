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
	};
	//method to upvote the post
	o.upvote = function(post){
		// put method to upvote a post into the DB
		return $http.put('/posts/' + post.id + '/upvote.json').success(function(data){
			//when the call returns successfully, update the local copy to relect the changes
			posts.upvotes += 1;
		});
	};
	// method to grab a single post from the server
	o.get = function(id){
		// .then calls one of the success or error callbacks asynchronously as soon as a result is available
		// it returns a new promise which is resolved or rejected via the return value of the successCallback, errorCallback
		return $http.get('/posts/' + id + '.json').then(function(res){
			return res.data;
		});
	};
	// method to add a comment to a post
	o.addComment = function(id, comment){
		return $http.post('/posts/' + id + '/comments.json', commment);
	};
	// method to upvote a comment
	o.upvoteComment = function(post, comment){
		// use the PUT method to send the post, and that post's comment, so server knows which to upvote
		return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').success(function(data){
			comment.upvotes += 1;
		});
	};

	//return the var o object so that it is exposed to any other Angular module that needs to inject it
	//by exporting an object that contains the posts array we can add new methods and objects to our services in the future
 return o;
}]);