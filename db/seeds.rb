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

Poem.create(
    title: "Lenin",
    author: "Langston Hughes",
    lines: [
        "Lenin walks around the world",
        "Frontiers cannot bar him",
        "Neither barracks nor barricades impede",
        "Nor does barbed wire scar him.",
        "--",
        "Lenin walks around the world.",
        "Black, brown, and white receive him.",
        "Language is no barrier.",
        "The strangest tongues believe him",
        "--",
        "Lenin walks around the world.",
        "The sun sets like a scar",
        "Between the darkness and the dawn",
        "There rises a red star."
    ],
    linecount: 14,
    user_id: 1
)

Poem.create(
    title: "In Praise of Communism",
    author: "Bertold Brecht",
    lines: [
        "It's sensible",
        "anyone can understand it.",
        "It's easy",
        "You're not an exploiter",
        "so you can grasp it.",
        "It's a good thig for you,",
        "find out more about it.",
        "The stupid call it stupid",
        "and the squalid call it squalid.",
        "It is against squalor and",
        "against stupidity.",
        "the exploiters call it a crime",
        "But we know:",
        "it is the end of crime.",
        "It is not madness, but",
        "the end of madness.",
        "It is not the riddle",
        "But the solution.",
        "It is the simple thing",
        "So hard to achieve."
    ],
    linecount: 20,
    user_id: 2
)

Poem.create(
    title: "Osho--Untitled",
    author: "Osho",
    lines: [
        "I don't think existence wants you",
        "to be serious. I have not seen a",
        "serious tree. I have not seen a",
        "serious bird. I have not seen a",
        "serious sunrise. I have not seen a",
        "serious starry night. It seems they",
        "are all laughing in their own ways,",
        "dancing in their own ways. We may",
        "not understand it, but there is a",
        "subtle feeling that the whole",
        "existence is a celebration."
    ],
    linecount: 11,
    user_id: 3
)

Poem.create(
    title: "Antilamentation",
    author: "Dorianne Laux",
    lines: [
        "Regret nothing. Not the cruel novels you read",
        "to the end just to find out who killed the cook.",
        "Not the insipid moies that made you cry in the dark,",
        "in spite of your intelligence, your sophistication.",
        "Not the lover you left quivering in a hotel parking lot",
        "the one you beat to the punchline, the door, or the one",
        "who left you in your red dress and shoes, the ones",
        "that crimped your toes, don't regret those.",
        "Not the nights you called god names and cursed",
        "your mother, sunk like a dog in the livingroom couch,",
        "chewing your nails and crushed by loneliness.",
        "You were meant to inhale those smoky nights",
        "over a bottle of flat beer, to sweep stuck onion rings",
        "across the dirty restaurant floor, to wear the frayed",
        "coat with its loose butons, its pockets full of struck matches.",
        "You've walked those streets a thousand ties and still",
        "you end up here. Regret none of it, not one",
        "of the wasted days you wanted to know nothing,",
        "when the lights from teh carnival rides",
        "were the only stars you believed in, loving them",
        "for their uselessness, not wanting to be saved.",
        "You've traveled this far on the back of every mistake,",
        "ridden in dark-eyed and morose but calm as a house",
        "after the TV set has been pitched out the upstairs",
        "window. Harmless as a broken ax. Emptied",
        "of expectation. Relax. Don't bother remembering",
        "any of it. Let's stop here, under the lit sign",
        "on the corner, and watch all the people walk by."
    ],
    linecount: 28,
    user_id: 4
)

Poem.create(
    title: "The CryptoNaturalist--Untitled",
    author: "The CryptoNaturalist",
    lines: [
        "One day, your skull will be as empty",
        "as a conch shell on a fence post",
        "full of wind and gentle quiet.",
        "Today, it is a cauldron of ghosts.",
        "Flesh and electricity.",
        "Water and memory.",
        "A machine that makes reality.",
        "Now. Here. Your skull is the garden",
        "where fact flowers into meaning."
    ],
    linecount: 9,
    user_id: 1
)

Poem.create(
    title: "Maybe the Best Thing Ever",
    author: "Unknown",
    lines: [
        "trust in time",
        "especially when time says",
        "no"
    ],
    linecount: 3,
    user_id: 2
)

Poem.create(
    title: "Unknown",
    author: "Unknown",
    lines: [
        "I know, you never intended to be in this world.",
        "But you're in it all the same.",
        "--",
        "So why not get started immediately.",
        "--",
        "I mean, belonging to it.",
        "There is so much to admire, to weep over."
    ],
    linecount: 7,
    user_id: 3
)

Poem.create(
    title: "from The Year of Floods",
    author: "Margaret Atwood",
    lines: [
        "Whatever arrives from",
        "the shadows you must",
        "greet as a blessing."
    ],
    linecount: 3,
    user_id: 4
)

Poem.create(
    title: "Burning the Old Year",
    author: "Naomi Shibab Nye",
    lines: [
        "So much of any year is flammable,",
        "lists of vegetables, partial poems.",
        "Orange swirling flame of days",
        "so little is a stone."
    ],
    linecount: 4,
    user_id: 1
)

Poem.create(
    title: "Philip Pullman--Untitled",
    author: "Philip Pullman",
    lines: [
        "Poetry is not a fancy way of giving you information, it's an incantation.",
        "It is actually a magic spell.",
        "It changes things; it changes you.",
        "- Philip Pullman"
    ],
    linecount: 3,
    user_id: 2
)

Poem.create(
    title: "Good Bones",
    author: "Maggie Smith",
    lines: [
        "Life is short, though I keep this from my children.",
        "Life is short, and I've shortened mine",
        "in a thousand delicious, ill-advised ways,",
        "a thousand deliciously ill-advised ways",
        "I'll keep from my children. The owrld is at least",
        "fifty percent terrible, and that's a conservative",
        "estimate, though I keep this from my children.",
        "For every bird there is a stone thrown at a bird.",
        "For every loved child, a child broken, bagged,",
        "sunk in a lake. Life is short and the world",
        "is at least half terrible, and for every kind",
        "stranger, there is one who would break you,",
        "though I keep this from my children. I am trying",
        "to sell them the world. Any decent realtor,",
        "walking you through a real shithole, chirps on",
        "about good bones: This place could be beautiful,",
        "right? You could make this place beautiful."
    ],
    linecount: 17,
    user_id: 3
)

Poem.create(
    title: "from The Waves",
    author: "Virginia Woolf",
    lines: [
        "I rise from my worst",
        "disasters, I turn, I",
        "change."
    ],
    linecount: 3,
    user_id: 4
)

Poem.create(
    title: "s.c.lourie--Untitled",
    author: "s.c. lourie",
    lines: [
        "I just want to be",
        "with cracked people now.",
        "People tht have been",
        "cracked open by life.",
        "Those who aren't frightened",
        "of vulnerability",
        "or scared of tears.",
        "And they grow softer",
        "by the day.",
        "Choosing the uncertain path",
        "where nothing is promised",
        "because that's where dreams live.",
        "They look messier",
        "on the outside.",
        "But their worlds within",
        "are made of gold."
    ],
    linecount: 16,
    user_id: 1
)

Poem.create(
    title: "from Sputnik Sweetheart",
    author: "Haruki Murakami",
    lines: [
        "I began to draw an invisible",
        "boundary between myself and other",
        "people. No matter who I was dealing",
        "with. I maintained a set distance,",
        "carefully monitoring the person's",
        "attitude so that they wouldn't get any",
        "closer. I didn't easily swallow what",
        "other people told me. My only",
        "passions were books and music."
    ],
    linecount: 9,
    user_id: 2
)

Poem.create(
    title: "Pierre Jeanty--Untitled",
    author: "Pierre Jeanty",
    lines: [
        "You are everything",
        "my imagination has painted as love",
        "with even more colors"
    ],
    linecount: 3,
    user_id: 3
)

Poem.create(
    title: "nizariat--Untitled",
    author: "nizariat",
    lines: [
        "The finest souls are those",
        "who gulped pain and avoided",
        "making others taste it."
    ],
    linecount: 3,
    user_id: 4
)

Poem.create(
    title: "Tyler Knott Gregson--Untitled",
    author: "Tyler Knott Gregson",
    lines: [
        "I love you wildly,",
        "madly,",
        "and without reason;",
        "I love you softly,",
        "with tender hands and",
        "softened spirit,",
        "I love you patiently,",
        "but outlined",
        "in an urgency I cannot",
        "define.",
        "I love you",
        "and you can take your time",
        "discovering all",
        "the hows;",
        "I love you",
        "and you will never doubt",
        "the why."
    ],
    linecount: 17,
    user_id: 1
)

Poem.create(
    title: "Silas House--Untitled",
    author: "Silas House",
    lines: [
        "You are so good. So good, you're always",
        "feeling so much. And sometimes it feels",
        "like you're gonna bust wide open from all",
        "the feelings, don't it? People like you are",
        "the best in the world, but you sure do",
        "suffer for it."
    ],
    linecount: 6,
    user_id: 2
)

Poem.create(
    title: "Victoria Erickson--Untitled",
    author: "Victoria Erickson",
    lines: [
        "If you inherently long for",
        "something, become it first. If you",
        "want gardens, become the",
        "gardener. If you want love, embody",
        "love. If you want mental",
        "stimulation, change the",
        "conversation. If you want peace,",
        "exude calmness. If you want to fill",
        "your world with artists, begin to",
        "paint. If you want to be valued,",
        "respect your own time. If you want",
        "to live ecstatically, find the ecstasy,",
        "within yourself. This is how to",
        "draw it in, day by day, inch by inch."
    ],
    linecount: 14,
    user_id: 3
)

Poem.create(
    title: "Unknown",
    author: "Unknown",
    lines: [
        "Thus we're caught in a maelstrom of cyclical crises",
        "and precarity, in a gladatorial arena rigged against",
        "us where losing means poverty and even death,",
        "being crushed between stagnant wages and rising,",
        "costs, under constant pressure and surveillance to",
        "overwork ourselves, consigned to the",
        "meaninglessness of producing for profit,",
        "powerless to contribute to running things,",
        "dehumanised and reduced to mere tools",
        "browbeaten in a hyper-macho militaristic",
        "atmosphere, abandoned in an atomised",
        "'uncommunity', and gaslighted by media into",
        "fetishising commodities and depending on",
        "expensive objects for self-esteem."
    ],
    linecount: 14,
    user_id: 4
)

Poem.create(
    title: "from Extremely Loud and Incredibly Close",
    author: "Jonathan Safran Foer",
    lines: [
        "Sometimes I can hear",
        "my bones straining",
        "under the weight of all",
        "the lives I'm not",
        "living."
    ],
    linecount: 5,
    user_id: 1
)

Poem.create(
    title: "Oxygen",
    author: "Ellis Nightinggale",
    lines: [
        "It's quiet here between the trees",
        "And I can almost feel",
        "The weight of the centuries",
        "Begin to crack and peel.",
        "I breathe and re-breathe oxygen.",
        "What was and what will be,",
        "And for a moment as I walk",
        "It's just the earth and me."
    ],
    linecount: 8,
    user_id: 2
)

Poem.create(
    title: "After a while",
    author: "Jorge Luis Borges",
    lines: [
        "So you plant your own garden",
        "and decorate your own soul,",
        "instead of waiting for",
        "someone to bring you flowers."
    ],
    linecount: 4,
    user_id: 3
)

Poem.create(
    title: "Tell The People You Love That You Love Them",
    author: "Rachel C. Lewis",
    lines: [
        "I love being horribly straightforward. I love sending",
        "reckless text messages (because how reckless can a form",
        "of digitizied communication be?) and telling people I love",
        "them and telling people they are absolutely magical",
        "humans and I cannot believe they really exist. I love",
        " saying, 'Kiss me harder', and 'You're a good person', and,",
        "'You brighten my day'. I live my life as straight-forward",
        "as possible.",
        "Because one day, I might get hit by a bus.",
        "--",
        "Maybe it's weird. Maybe it's scary. Maybe it seems",
        "downright impossible to just be--to just let people know",
        "you want them, need them, feel like, in this very",
        "moment, you will die if you do not see them, hold them,",
        "touch them in some way whether its your feet on their",
        "thighs on the couch or your tongue in their mouth or",
        "your heart in their hands.",
        "--",
        "But there is nothing more beautiful than being desparate.",
        "--",
        "And there is nothing more risky than pretending not to care.",
        "We are young and we are human and we are beautiful",
        "and we are not as in control as we think we are. We",
        "never know who needs us back. We never know the",
        "magic that can arise between ourselves and other",
        "humans.",
        "We never know when the bus is coming."
    ],
    linecount: 24,
    user_id: 4
)

Poem.create(
    title: "Inscription found in 17th century forester's house in Lower Saxony, Germany",
    author: "Unknown",
    lines: [
        "I am the forest, I am ancient. I",
        "treasure the stag, I treasure the",
        "deer. I shelter you from storm, I",
        "shelter you from snow. I resist the",
        "frost, I keep the source. I nurse the",
        "earth, I am always htere. I build",
        "your house, I kindle your hearth.",
        "Therefore, you people, hold me",
        "dear."
    ],
    linecount: 9,
    user_id: 1
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








