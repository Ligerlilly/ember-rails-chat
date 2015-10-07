
author1 = Author.create(name: Faker::Lorem.word)
author2 = Author.create(name: Faker::Lorem.word)
author3 = Author.create(name: Faker::Lorem.word)

10.times do |n|
  Message.create(body: Faker::Lorem.sentence, author: author1)
  Message.create(body: Faker::Lorem.sentence, author: author2)
  Message.create(body: Faker::Lorem.sentence, author: author3)
end
