class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :commented_poem_id, :commenter_id, :poem

  belongs_to :commented_poem

  def poem
    self.object.commented_poem
  end
end
