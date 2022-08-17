class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like, :fav_user_id, :fav_poem_id, :poem, :comments, :favorite_user

  belongs_to :fav_poem
  belongs_to :fav_user
  has_many :comments, through: :fav_poem

  def poem
     self.object.fav_poem
  end

  def comments 
    self.object.fav_poem.comments
  end

  def favorite_user
    self.object.fav_user
  end
end
