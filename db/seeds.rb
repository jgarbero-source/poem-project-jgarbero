# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# poems = "https://poetrydb.org"

require 'rest-client'

# def poems_dataset
#     poems = RestClient.get("https://poetrydb.org/title")
#     poems_array = JSON.parse(poems)["titles"]
#     poems_array.each do |s|
#         Poem.create(
#             title: s["title"],
#             author: s["author"],
#             lines: s["lines"],
#             linecount: s["linecount"]
#         )
#     end
# end

# def poems_dataset
#     poem_json = RestClient.get("https://poetrydb.org/random")
#     poem = JSON.parse(poem)[0]
#         Poem.create(
#             title: poem["title"],
#             author: poem["author"],
#             lines: poem["lines"],
#             # linecount: poem["linecount"]
#         )
    
# end

# poems_dataset()

User.destroy_all
Poem.destroy_all
Comment.destroy_all

puts "Creating users..."

User.create(
    name: "John Garbero",
    email: "john.garbero.itb@gmail.com",
    username: "jgarbero",
    password: "123",
    bio: "The coolest guy around."
)

User.create(
    name: "Bayonetta",
    email: "bayonetta@gmail.com",
    username: "witch",
    password: "witch",
    bio: "don't fuck with a witch"
)

User.create(
    name: "Frank Ocean",
    email: "franky@gmail.com",
    username: "franky",
    password: "iloveyou",
    bio: "best singer ever"
)

User.create(
    name: "Matthew Johnson",
    email: "mattjohnson@gmail.com",
    username: "matty",
    password: "thematt",
    bio: "I have changed my life to be a better person."
)

puts "Writing poems..."

Poem.create(
    title: "Rilke--Untitled",
    author: "Rainer Maria Rilke",
    lines: [
        "again and again the two of us walk out",
        "together under the ancient trees, lay ourselves",
        "down again and again among the flowers, and",
        "look up into the sky."
    ],
    linecount: 4
)

Poem.create(
    title: "Listen",
    author: "Tara Bray",
    lines: [
        "The earth is not",
        "speechless.",
        "The trees forgive and",
        "outlive terror."
    ],
    linecount: 4
)

Poem.create(
    title: "Self-pity",
    author: "D.H. Lawrence",
    lines: [
        "I never saw a wild",
        "thing",
        "sorry for itself."
    ],
    linecount: 3
)

Poem.create(
    title: "Bluets",
    author: "Maggie Nelson",
    lines: [
        "That this blue exists makes my life",
        "a remarkable one, just to have",
        "seen it. To have seen such",
        "beautiful things. To find oneself",
        "placed in their midst. Choiceless."
    ],
    linecount: 5
)

Poem.create(
    title: "The Orange",
    author: "Wendy Cope",
    lines: [
        "At lunchtime I bought a huge orange--",
        "The size of it made us all laugh.",
        "I peeled it and shared it with Robert and Dave--",
        "They got quarters and I had a half",
        "",
        "And that orange, it made me so happy,",
        "As ordinary things often do",
        "Just lately. The shopping. A walk in the park.",
        "This is peace and contentment. It's new.",
        "",
        "The rest of the day was quite easy.",
        "I did all the jobs on my list",
        "And I enjoyed them and had some time over.",
        "I love you. I'm glad I exist."
    ],
    linecount: 14
)

Poem.create(
    title: "Bukowski--Untitled",
    author: "Charles Bukowski",
    lines: [
        "We're all going to die, all of",
        "us, what a circus! That alone",
        "should make us love each",
        "other but it doesn't. We are flattened by",
        "trivialities, we are eaten up",
        "by nothing."
    ],
    linecount: 6
)

Poem.create(
    title: "From a Letter to Quentin Bell",
    author: "Virginia Woolf",
    lines: [
        "And are you in love? And are you",
        "happy? And do you sometimes",
        "write a poem? And have you had",
        "your hair cut? And have you met",
        "anybody of such beauty your eyes",
        "dance, as the waves danced,"
    ],
    linecount: 6
)

puts "Writing reviews..."

Comment.create(
    content: "This poem really moves me. It makes me want to be more affectionate with love ones in my life.",
    poem_id: 6,
    user_id: 1
)

Comment.create(
    content: "I feel so small compared the world when I read this poem, and that makes me grateful. There's so much beauty to see.",
    poem_id: 4,
    user_id: 1
)

Comment.create(
    content: "I wish I could lay in the flowers forever. That's really what life is about anyways.",
    poem_id: 1,
    user_id: 2
)

Comment.create(
    content: "This poem is correct. We should never be apologetic for who we truly are or pity ourselves for not being perfect. It's unnatural.",
    poem_id: 3,
    user_id: 2
)

Comment.create(
    content: "This poem reminds me to approach life lightly.",
    poem_id: 5,
    user_id: 3
)

Comment.create(
    content: "The trees and plants speak to us, feed us, and protect us even though we've done nothing but destroy them.",
    poem_id: 2,
    user_id: 3
)

Comment.create(
    content: "I wish I could think this way about an orange.",
    poem_id: 5,
    user_id: 4
)

Comment.create(
    content: "I want to do this with my lover.",
    poem_id: 1,
    user_id: 4
)








