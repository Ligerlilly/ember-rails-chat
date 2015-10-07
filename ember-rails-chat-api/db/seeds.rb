
author1 = Author.create(name: Faker::Lorem.word)
author2 = Author.create(name: Faker::Lorem.word)
author3 = Author.create(name: Faker::Lorem.word)

room1  = Room.create(name: "Entertainment")
room2  = Room.create(name: "Sports")
room3  = Room.create(name: "Politics")
room4  = Room.create(name: "Miscellaneous")

10.times do |n|
  Message.create(body: Faker::Lorem.sentence, author: author1, room: room1)
  Message.create(body: Faker::Lorem.sentence, author: author2, room: room1)
  Message.create(body: Faker::Lorem.sentence, author: author3, room: room2)
end
