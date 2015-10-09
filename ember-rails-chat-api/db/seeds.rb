room1  = Room.create(name: "Entertainment")
room2  = Room.create(name: "Sports")
room3  = Room.create(name: "Politics")
room4  = Room.create(name: "Miscellaneous")

5.times do |n|
  Message.create(body: [Faker::Name.suffix, Faker::Hacker.verb, Faker::App.author].join(" "),  author:  Author.create(name: Faker::App.author), room: room1, date: Time.now)
  Message.create(body: [Faker::Book.title, Faker::Team.sport, Faker::Team.sport].join(" "),     author:  Author.create(name: Faker::App.author), room: room2, date: Time.now)
  Message.create(body: [Faker::Company.buzzword, Faker::Address.country, Faker::Company.catch_phrase].join(" "), author:  Author.create(name: Faker::App.author), room: room3, date: Time.now)
  Message.create(body: [Faker::Hacker.ingverb, Faker::Hacker.adjective, Faker::Hacker.say_something_smart, Faker::Name.name].join(" ") ,      author:  Author.create(name: Faker::App.author), room: room4, date: Time.now)
end
