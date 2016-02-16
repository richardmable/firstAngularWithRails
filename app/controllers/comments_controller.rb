class CommentsController < ApplicationController

	def create
		# set post to the current post via params post_id
		post = Post.find(params[:post_id])
		# create the comment and associate it with that post with the comment params
		comment = post.comments.create(comment_params)
		# respond with both as it is a nested resource, only last resource is returned with json
		respond_with post, comment
	end

	#the action to upvote a particular comment
	def upvote
		# the post is set to the params
		post = post.find(params[:post_id])
		# set comment to the that comment's params
		comment = post.comments.find(params[:id])
		# increment that comment's upvotes
		comment.increment!(:upvotes)
		respond_with post, comment
	end

	#strong params for the comments
	private
	def comment_params
		params.require(:comment).permit(:body)
	end

end
