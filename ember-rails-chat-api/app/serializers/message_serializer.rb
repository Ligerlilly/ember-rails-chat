class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  belongs_to :author
  belongs_to :room
end
