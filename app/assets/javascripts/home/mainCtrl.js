angular.module('flapperNews')
.controller('MainCtrl', [
	'$scope',
	//this injects posts service into the main controller
	'posts',

	function($scope, posts){
		//can only have two way data binding with $scope variables
		//this line mirrors the array returned by the service
		//this way, we can display the posts to the view
		$scope.posts = posts.posts;
		// the add posts function
		$scope.addPost = function(){
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: []
			})
		};
	
		$scope.incrementUpvotes = function(post){
			// increment that post's upvotes by 1
			post.upvotes += 1;
		};

}]);