class Comment < ApplicationRecord
    belongs_to :commented_poem, foreign_key: :commented_poem_id, class_name: "Poem"
    belongs_to :commenter, foreign_key: :commenter_id, class_name: "User"
end
