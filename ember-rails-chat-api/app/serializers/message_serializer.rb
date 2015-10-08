class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :date
  belongs_to :author
  belongs_to :room
end
