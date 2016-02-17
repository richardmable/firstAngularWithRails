class Post < ActiveRecord::Base
	has_many :comments

	belongs_to :user

	# overrides the as_json method so that all json representations of our post will include the comments
	# Using as_json is a simple way to change the json output of our models throughout our application, 
	# but can get complex over time as you your app grows. If you want to separate your 
	# view logic out of your models completely, you can look into a using a templating engine for 
	# json such as jbuilder which ships with Rails 4 by default or rabl-rails.
	def as_json(options = {})
		super(options.merge(include: [:user, comments: {include: :user}]))
	end
end
