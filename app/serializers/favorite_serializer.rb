class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like, :fav_user_id, :fav_poem_id, :poem 

  belongs_to :fav_poem

  def poem
     self.object.fav_poem
  end
end
