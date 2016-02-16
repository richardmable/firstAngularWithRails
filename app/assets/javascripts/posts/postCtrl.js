
angular.module('flapperNews')

.controller('PostsCtrl', [
	'$scope',
	// inject our state params to make sure we are sending the params for the post
	'$stateParams',
	// inject the posts service into the posts controller
	'posts',
	function($scope, $stateParams, posts){
		// sets a scope object called post that grabs the appropriate post from 
		// from the posts service using $stateParams
		$scope.post = posts.posts[$stateParams.id];

		$scope.addComment = function(){
			if($scope.body === '') { return; }
  			$scope.post.comments.push({
    			body: $scope.body,
    			author: 'user',
    			upvotes: 0
  		});
  			$scope.body = '';
		};
	}
		
]);
