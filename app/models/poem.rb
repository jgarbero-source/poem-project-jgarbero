class Poem < ApplicationRecord
    belongs_to :user
    has_many :comments, foreign_key: :commented_poem_id, dependent: :destroy
    has_many :commenters, through: :comments
    has_many :favorites, foreign_key: :fav_poem_id, dependent: :destroy
    has_many :fav_users, through: :favorites

    validates :title, presence: true
    validates :author, presence: true
    validates :lines, presence: true
    validates :lines, uniqueness: true
end
