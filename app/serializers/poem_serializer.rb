class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :lines, :linecount, :user_id, :comments

  has_many :comments
  has_many :favorites

  def comments
    self.object.comments
  end
end
