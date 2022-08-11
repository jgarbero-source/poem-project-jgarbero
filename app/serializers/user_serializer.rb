class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password_digest, :bio

  has_many :comments
  has_many :poems
end
