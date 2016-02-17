class PostsController < ApplicationController
	#only allow authenticated users to create and upvote posts
	before_filter :authenticate_user!, only: [:create, :upvote]
	#show all the posts
	def index
		respond_with Post.all
	end

	#create a new post
	def create
		respond_with Post.create(post_params.merge(user_id: current_user.id))
	end

	#show a particular post via params 
	def show
		respond_with Post.find(params[:id])
	end

	#the upvote action to increment that post's upvotes
	def upvote
		post = Post.find(params[:id])
		#increments the attribute of upvotes by 1, or sets to zero if nill
		post.increment!(:upvotes)
		respond_with post
	end

	#permit strong params
	private
	def post_params
		params.require(:post).permit(:link, :title)
	end

end
