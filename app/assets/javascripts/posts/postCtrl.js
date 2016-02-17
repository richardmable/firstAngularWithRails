
angular.module('flapperNews')

.controller('PostsCtrl', [
	'$scope',
	// inject the posts service into the posts controller
	// this allows us access to the comments
	'posts',
	// inject the single post object
	'post',
	function($scope, posts, post){
		// no need for $stateParams, as we already know 
		// which post we have from the post object
		$scope.post = post;

		// call the addComment method and pass in the arguments
		$scope.addComment = function(){
			if($scope.body === '') { return; }
  			post.addComment(post.id, {
    			body: $scope.body,
    			author: 'user',
    			upvotes: 0
  		}).success(function(comment){
  			$scope.post.comments.push(comment);
  		});
  			$scope.body = '';
		};
		// call the upvoteComment method by calling the incrementUpvotes method (found in the view of _posts.html)
		// passing in that comment, and then calling the upvoteComment method defined in the posts service
		// and passing in that post and comment
		$scope.incrementUpvotes = function(comment){
			posts.upvoteComment(post, comment);
		};
	};
		
]);
