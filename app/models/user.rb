class User < ApplicationRecord
    has_many :poems
    has_many :comments, foreign_key: :commenter_id
    has_many :commented_poems, through: :comments
    has_many :favorites, foreign_key: :fav_user_id
    has_many :fav_poems, through: :favorites
    
    
    has_secure_password

    validates :name, presence: true
    validates :email, presence: true
    validates :username, presence: true
    validates :password, presence: true
    validates :bio, presence: true
end
