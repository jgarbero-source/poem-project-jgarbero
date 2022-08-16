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
Favorite.destroy_all

puts "Creating users..."

User.create(
    name: "John Garbero",
    email: "john.garbero.itb@gmail.com",
    username: "John",
    password: "123456",
    bio: "the coolest guy around"
)

User.create(
    name: "Bayonetta",
    email: "bayonetta@gmail.com",
    username: "witch",
    password: "witches",
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
    linecount: 4,
    user_id: 4
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
    linecount: 4,
    user_id: 3
)

Poem.create(
    title: "Self-pity",
    author: "D.H. Lawrence",
    lines: [
        "I never saw a wild",
        "thing",
        "sorry for itself."
    ],
    linecount: 3,
    user_id: 1
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
    linecount: 5,
    user_id: 2
)

Poem.create(
    title: "The Orange",
    author: "Wendy Cope",
    lines: [
        "At lunchtime I bought a huge orange--",
        "The size of it made us all laugh.",
        "I peeled it and shared it with Robert and Dave--",
        "They got quarters and I had a half",
        "--",
        "And that orange, it made me so happy,",
        "As ordinary things often do",
        "Just lately. The shopping. A walk in the park.",
        "This is peace and contentment. It's new.",
        "--",
        "The rest of the day was quite easy.",
        "I did all the jobs on my list",
        "And I enjoyed them and had some time over.",
        "I love you. I'm glad I exist."
    ],
    linecount: 14,
    user_id: 1
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
    linecount: 6,
    user_id:3
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
    linecount: 6,
    user_id: 4
)

Poem.create(
    title: "Among the Ruins",
    author: "Kristin Kory",
    lines: [
        "Before I put myself back together,",
        "I spent some time among the ruins;",
        "a dark and magnificent place",
        "where I got to know all the pieces of my soul--",
        "pieces of me",
        "that I didn't even know existed."
    ],
    linecount: 6,
    user_id: 2
)

Poem.create(
    title: "Written on the Body",
    author: "Jeannette Winterson",
    lines: [
        "August. We were arguing. You want love to",
        "be like this every day don't you? 92 degrees",
        "even in the shade."
    ],
    linecount: 3,
    user_id: 4
)

Poem.create(
    title: "Cinque",
    author: "Anna Akhmatova",
    lines: [
        "What was in our",
        "stars",
        "That destined us for",
        "sorrow?"
    ],
    linecount: 4,
    user_id: 1
)

Poem.create(
    title: "The Locked Tomb, #2",
    author: "Tamsyn Muir",
    lines: [
        "But when she was scared, she",
        "was a child again, and she was",
        "more afraid of being a child again",
        "than anything else in her life."
    ],
    linecount: 4,
    user_id: 2
)

Poem.create(
    title: "Blink",
    author: "Slow Meadow",
    lines: [
        "The permanance of nature is seemingly paradoxical.",
        "While its constituents live and die, it, itself, lives on.",
        "With the advent of civilization, many have deluded themselves",
        "in thinking that they are separate from that which has borne life unto them.",
        "Societies, along with the ideologies that shape them,",
        "materialize and crumble in the blink of an existential eye."
    ],
    linecount: 6,
    user_id: 1
)

Poem.create(
    title: "Happiness",
    author: "Eluvium",
    lines: [
        "If I could push dark thoughts away",
        "If I pretend the word is safe",
        "I would surely hide my eyes",
        "And hope you realise",
        "The water boils most of the day",
        "We walk on snow, forget our way",
        "I'll shut up the blinds at night,",
        "Pull the blankets tight",
        "Dreaming pleads every day"
    ],
    linecount: 9,
    user_id: 1
)

Poem.create(
    title: "Holy Wild",
    author: "Gwen Benaway",
    lines: [
        "I have never been allowed to be holy",
        "I have never been forgiven for wanting."
    ],
    linecount: 2,
    user_id: 2
)

Poem.create(
    title: "The Defining Moment",
    author: "Beau Taplin",
    lines: [
        "You were an unexpected surprise",
        "The defining moment. The collision of stars",
        "that slammed into me hard and sent my neat",
        "little world plummeting into the ocean.",
        "I never expected it to be you, you know?",
        "But it is you. It's all you. And now there's no",
        "turning back."
    ],
    linecount: 7,
    user_id: 3
)

Poem.create(
    title: "Learning From Trees",
    author: "Unknown",
    lines: [
        "If we could",
        "like the trees,",
        "practice dying,",
        "do it every year",
        "just as something we do--",
        "like going on vacation",
        "or celebrating birthdays,",
        "it would become",
        "as easy a part of us",
        "as our hair or clothing.",
        "--",
        "Someone would show us how",
        "to lie down and fade away",
        "as if in deepest meditation,",
        "and we would learn",
        "about the fine dark emptiness",
        "both knowing it and not knowing it,",
        "and coming back would be irrelevant.",
        "--",
        "Whatever it is the trees know",
        "when they stand undone,",
        "surprisingly intricate,",
        "we need to know also",
        "so we can allow",
        "that last thing",
        "to happen to us",
        "as if it were only",
        "any ordinary thing.",
        "--",
        "leaves and lives",
        "falling away,",
        "the spirit, complex,",
        "waiting in the fine darkness",
        "to learn which way",
        "it will go."
    ],
    linecount: 35,
    user_id: 3
)

Poem.create(
    title: "Unknown",
    author: "Unknown",
    lines: [
        "And he is--Oh, well! He is just himself,",
        "and I miss him, and miss him, and miss him.",
        "The whole world seems empty and aching.",
        "I hate the moonlight because it's beautiful",
        "and he isn't here to see it with me.",
        "But maybe you've loved somebody, too, and you know?",
        "If you have, I don't need to explain;",
        "If you haven't, I can't explain."
    ],
    linecount: 8,
    user_id: 4
)

puts "Writing reviews..."

Comment.create(
    content: "This poem really moves me. It makes me want to be more affectionate with love ones in my life.",
    commented_poem_id: 6,
    commenter_id: 1
)

Comment.create(
    content: "I feel so small compared the world when I read this poem, and that makes me grateful. There's so much beauty to see.",
    commented_poem_id: 4,
    commenter_id: 1
)

Comment.create(
    content: "I wish I could lay in the flowers forever. That's really what life is about anyways.",
    commented_poem_id: 1,
    commenter_id: 2
)

Comment.create(
    content: "This poem is correct. We should never be apologetic for who we truly are or pity ourselves for not being perfect. It's unnatural.",
    commented_poem_id: 3,
    commenter_id: 2
)

Comment.create(
    content: "This poem reminds me to approach life lightly.",
    commented_poem_id: 5,
    commenter_id: 3
)

Comment.create(
    content: "The trees and plants speak to us, feed us, and protect us even though we've done nothing but destroy them.",
    commented_poem_id: 2,
    commenter_id: 3
)

Comment.create(
    content: "I wish I could think this way about an orange.",
    commented_poem_id: 5,
    commenter_id: 4
)

Comment.create(
    content: "I want to do this with my lover.",
    commented_poem_id: 1,
    commenter_id: 4
)

puts "Finished seeding!"








