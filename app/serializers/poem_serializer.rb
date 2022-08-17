class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :lines, :linecount, :user_id, :comments, :poem_user

  has_many :comments
  has_many :favorites
  belongs_to :user

  def comments
    self.object.comments
  end

  def poem_user
    self.object.user
  end
end
