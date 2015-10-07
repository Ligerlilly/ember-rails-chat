class Message < ActiveRecord::Base
  belongs_to :author
  belongs_to :room
end
