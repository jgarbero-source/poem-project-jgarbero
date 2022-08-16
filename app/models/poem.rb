class Poem < ApplicationRecord
    belongs_to :user
    has_many :comments, foreign_key: :commented_poem_id
    has_many :commenters, through: :comments
    has_many :favorites, foreign_key: :fav_poem_id
    has_many :fav_users, through: :favorites
end
