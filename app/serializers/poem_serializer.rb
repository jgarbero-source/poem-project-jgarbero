class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :lines, :linecount, :user_id

  has_many :comments
end
