class Favorite < ApplicationRecord
    belongs_to :fav_user, foreign_key: :fav_user_id, class_name: "User"
    belongs_to :fav_poem, foreign_key: :fav_poem_id, class_name: "Poem"

    validates :fav_poem_id, uniqueness: { scope: :fav_user_id}
end
