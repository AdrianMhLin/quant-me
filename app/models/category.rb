class Category < ActiveRecord::Base
  belongs_to :user
  
  has_many :entries, dependent: :destroy

end
