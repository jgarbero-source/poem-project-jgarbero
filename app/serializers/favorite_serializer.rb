class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like, :fav_user_id, :fav_poem_id, :poem, :comments

  belongs_to :fav_poem
  has_many :comments, through: :fav_poem

  def poem
     self.object.fav_poem
  end

  def comments 
    self.object.fav_poem.comments
  end
end
