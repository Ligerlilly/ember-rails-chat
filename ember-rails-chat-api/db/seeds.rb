
author1 = Author.create(name: Faker::Lorem.word)
author2 = Author.create(name: Faker::Lorem.word)
author3 = Author.create(name: Faker::Lorem.word)

room1  = Room.create(name: Faker::Lorem.word)
room2  = Room.create(name: Faker::Lorem.word)

10.times do |n|
  Message.create(body: Faker::Lorem.sentence, author: author1, room: room1)
  Message.create(body: Faker::Lorem.sentence, author: author2, room: room1)
  Message.create(body: Faker::Lorem.sentence, author: author3, room: room2)
end
