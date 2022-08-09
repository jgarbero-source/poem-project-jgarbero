class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :poem_id, :user_id
end
