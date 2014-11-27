class User < ActiveRecord::Base
  
  has_many :categories, dependent: :destroy

  has_many :entries, through: :categories

  validates(:password, :email, {presence: true} )
  validates(:email, :username, {uniqueness: true} )

  has_secure_password
end
