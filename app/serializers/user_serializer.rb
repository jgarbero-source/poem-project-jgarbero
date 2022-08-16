class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password_digest, :bio

  has_many :comments
  has_many :poems
  has_many :favorites
  has_many :fav_poems, through: :favorites

end
