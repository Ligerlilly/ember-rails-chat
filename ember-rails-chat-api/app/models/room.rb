class Room < ActiveRecord::Base
  has_many :messages
  scope :first_five, -> { limit(5) }
end
