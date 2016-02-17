// ad ui.router as a dependency in the application
// A note:
// You may be wondering why we have chosen to use ui-router instead of the more standard ngRoute module - 
// ui-router is newer and provides more flexibility and features than ngRoute. We will be using a few of these in this tutorial.
angular.module('flapperNews', ['ui.router', 'templates'])

// this is the Angular config function to setup a home state
// otherwise() redirects to unspecified routes
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			// the state is given a name
			.state('home', {
				// the state is given a url
				url: '/home',
				// and a template
				templateUrl: 'home/_home.html',
				// and should be controlled by MainCtrl
				controller: 'MainCtrl',
				// the resolve property ensures that anytime the home state is entered
				// it will automatically query all posts from the back end before the state is loaded
				resolve: {
					postPromise: ['posts', function(posts){
						return posts.getAll();
					}] 
				}

			})
			// the posts state configuration
			.state('posts', {
				// brackets around id to indicate it is a route parameter
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsCtrl',

				// resolve object for the .get method in post service
				// the Angular ui-router detects we are entering the posts state,
				// and will then automatically query the server for the full post object
				// including comments
				// only after the request has returned will the state finish loading
				// we will then inject this post object directly into the post controller
				// rather than going through the post service
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts){
						return posts.get($stateParams.id);
					}]
				}
			})

		$urlRouterProvider.otherwise('home');
}]);
