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
		if(!$scope.title || $scope.title === "") { return; }
			//here is where a post is saved to the DB
			posts.create({
				title: $scope.title,
				link: $scope.link,
			});
			//These reset the text fields to blank after submission
			$scope.title = '';
			$scope.link = '';
		};
	
		$scope.incrementUpvotes = function(post){
			// increment that post's upvotes by 1
			post.upvotes += 1;
		};

}]);