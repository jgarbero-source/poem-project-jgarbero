class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :commented_poem_id, :commenter_id
end
