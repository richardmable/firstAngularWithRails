class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user

  #overrding the as json method to include the user
  def as_json(options = {})
  	super(options.merge(include: :user))
  end

end
