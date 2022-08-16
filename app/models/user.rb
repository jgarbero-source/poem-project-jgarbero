class User < ApplicationRecord
    has_many :poems, dependent: :destroy
    has_many :comments, foreign_key: :commenter_id, dependent: :destroy
    has_many :commented_poems, through: :comments
    has_many :favorites, foreign_key: :fav_user_id, dependent: :destroy
    has_many :fav_poems, through: :favorites
    
    
    has_secure_password

    validates :name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :password, length: { minimum: 6 }
    validates :bio, presence: true

end
