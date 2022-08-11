class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like, :fav_user_id, :fav_poem_id 
end
