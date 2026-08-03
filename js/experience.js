const destinationData = [
    {
        "id": "marrakech",
        "city": "Marrakech",
        "country": "Morocco",
        "image": "assets/images/morocco.jpg",
        "activities": [
            {
                "name": "Bacha Coffee at Dar el Bacha",
                "categories": [
                    "food",
                    "history"
                ],
                "duration": 1,
                "budget": "high",
                "area": "Medina",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Coffee and pastries inside the restored Dar el Bacha palace, ideal when you only have an hour."
            },
            {
                "name": "Nomad Rooftop Lunch",
                "categories": [
                    "food",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Rahba Kedima",
                "timeSlots": [
                    "afternoon"
                ],
                "trend": 3,
                "description": "A modern Moroccan lunch with rooftop views over the spice square and Medina rooftops."
            },
            {
                "name": "Jajjah by Hassan Hajjaj",
                "categories": [
                    "culture",
                    "food",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Sidi Ghanem",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A colourful art, design and food stop shaped by Hassan Hajjaj’s contemporary Moroccan style."
            },
            {
                "name": "Bahia Palace",
                "categories": [
                    "history",
                    "culture",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Mellah",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 1,
                "description": "Tiled courtyards, carved cedar ceilings and richly decorated rooms in one focused visit."
            },
            {
                "name": "Le Jardin Secret",
                "categories": [
                    "nature",
                    "history",
                    "photography"
                ],
                "duration": 1,
                "budget": "medium",
                "area": "Medina",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Restored Islamic gardens and traditional irrigation hidden behind the Medina walls."
            },
            {
                "name": "Maison de la Photographie",
                "categories": [
                    "photography",
                    "history",
                    "culture"
                ],
                "duration": 1.25,
                "budget": "low",
                "area": "Medina",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Historic Moroccan photography followed by a quiet rooftop view across the old city."
            },
            {
                "name": "Souk Semmarine Edit",
                "categories": [
                    "shopping",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Medina",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 1,
                "description": "A focused route through textiles, lanterns, leather goods and artisan workshops without wandering aimlessly."
            },
            {
                "name": "33 Rue Majorelle",
                "categories": [
                    "shopping",
                    "culture"
                ],
                "duration": 1,
                "budget": "high",
                "area": "Majorelle",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Contemporary Moroccan fashion, homeware and design in a carefully curated concept store."
            },
            {
                "name": "MACAAL Contemporary Art Visit",
                "categories": [
                    "culture",
                    "hidden-gems",
                    "photography"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Al Maaden",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A modern African art collection that gives the itinerary a strong contemporary Marrakech moment."
            },
            {
                "name": "Mellah Street Photography Walk",
                "categories": [
                    "photography",
                    "history",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Mellah",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Warm walls, carved doors, spice stalls and quieter lanes in Marrakech’s historic quarter."
            },
            {
                "name": "Kabana Rooftop at Sunset",
                "categories": [
                    "food",
                    "hidden-gems",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Koutoubia",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A stylish rooftop stop for dinner, music and sunset views near the Koutoubia."
            },
            {
                "name": "Agafay Desert Golden-Hour Escape",
                "categories": [
                    "nature",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 5,
                "budget": "high",
                "area": "Agafay",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "weekendOnly": true,
                "trend": 3,
                "description": "A longer escape beyond the city for desert landscapes, dinner and golden-hour views."
            },
            {
                "name": "Jardin Majorelle and YSL Museum",
                "categories": [
                    "nature",
                    "culture",
                    "photography"
                ],
                "duration": 2.5,
                "budget": "high",
                "area": "Majorelle",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A polished pairing of iconic gardens, colour, fashion history and architecture."
            },
            {
                "name": "Jemaa el-Fna Food Trail",
                "categories": [
                    "food",
                    "culture",
                    "hidden-gems"
                ],
                "duration": 2,
                "budget": "low",
                "area": "Jemaa el-Fna",
                "timeSlots": [
                    "evening"
                ],
                "trend": 2,
                "description": "A guided-style tasting route through grills, juices and classic evening street-food stalls."
            }
        ]
    },
    {
        "id": "guangzhou",
        "city": "Guangzhou",
        "country": "China",
        "image": "assets/images/china.jpg",
        "activities": [
            {
                "name": "Panxi Garden Dim Sum",
                "categories": [
                    "food",
                    "culture"
                ],
                "duration": 1.25,
                "budget": "medium",
                "area": "Liwan",
                "timeSlots": [
                    "morning"
                ],
                "trend": 2,
                "description": "Traditional Cantonese dim sum in a garden setting that works well for a short morning plan."
            },
            {
                "name": "Yongqing Fang Creative Lanes",
                "categories": [
                    "photography",
                    "culture",
                    "shopping"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Liwan",
                "timeSlots": [
                    "morning",
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Restored lane houses, design shops, cafés and old-meets-new Guangzhou street scenes."
            },
            {
                "name": "Chen Clan Ancestral Hall",
                "categories": [
                    "history",
                    "culture",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Liwan",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Detailed wood, stone and ceramic carvings with Guangdong folk-art displays."
            },
            {
                "name": "Dongshankou Café and Design Walk",
                "categories": [
                    "food",
                    "photography",
                    "shopping",
                    "hidden-gems"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Yuexiu",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A compact route through independent cafés, boutiques and photogenic early-20th-century villas."
            },
            {
                "name": "Sacred Heart Cathedral and Haizhu Square",
                "categories": [
                    "history",
                    "photography"
                ],
                "duration": 1,
                "budget": "low",
                "area": "Yuexiu",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 1,
                "description": "A focused architecture stop around Guangzhou’s granite Gothic cathedral."
            },
            {
                "name": "Beijing Road Archaeology and Shopping",
                "categories": [
                    "shopping",
                    "history",
                    "food"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Yuexiu",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 2,
                "description": "Historic road remains beneath glass, busy shops and easy snack stops in one central route."
            },
            {
                "name": "K11 Art Mall and Zhujiang New Town",
                "categories": [
                    "shopping",
                    "culture",
                    "photography"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Tianhe",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Contemporary art, design retail and polished skyline architecture in the city’s modern core."
            },
            {
                "name": "Canton Tower Sunset View",
                "categories": [
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Haizhu",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A high-impact skyline stop timed for blue hour and city lights."
            },
            {
                "name": "Pearl River Night Cruise",
                "categories": [
                    "hidden-gems",
                    "photography",
                    "culture"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Pearl River",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "Illuminated bridges, towers and riverfront architecture from the water."
            },
            {
                "name": "Bai’etan Riverside Art Walk",
                "categories": [
                    "nature",
                    "photography",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Liwan",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A newer riverside route with open views, contemporary architecture and space to slow down."
            },
            {
                "name": "Shamian Island Architecture Walk",
                "categories": [
                    "history",
                    "photography",
                    "nature"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Liwan",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Tree-lined streets and preserved historic buildings on a calm island route."
            },
            {
                "name": "Tianhe Mall and Café Hop",
                "categories": [
                    "shopping",
                    "food"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Tianhe",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A modern shopping and café plan for travellers who want a polished city experience."
            },
            {
                "name": "Chimelong Safari Park Day",
                "categories": [
                    "nature",
                    "culture"
                ],
                "duration": 6,
                "budget": "high",
                "area": "Panyu",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "weekendOnly": true,
                "trend": 2,
                "description": "A full-day wildlife experience suited to a weekend rather than a rushed city stop."
            },
            {
                "name": "Xiguan Food and Arcade Walk",
                "categories": [
                    "food",
                    "history",
                    "hidden-gems"
                ],
                "duration": 2.5,
                "budget": "low",
                "area": "Liwan",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 2,
                "description": "Cantonese snacks, old arcades and neighbourhood details in the historic west of the city."
            }
        ]
    },
    {
        "id": "nairobi",
        "city": "Nairobi",
        "country": "Kenya",
        "image": "assets/images/nairobi.jpg",
        "activities": [
            {
                "name": "Specialty Coffee at Spring Valley Coffee",
                "categories": [
                    "food",
                    "hidden-gems"
                ],
                "duration": 0.75,
                "budget": "medium",
                "area": "Westlands",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A quick, high-quality coffee stop designed for a one-hour itinerary."
            },
            {
                "name": "Cultiva Farm-to-Table Lunch",
                "categories": [
                    "food",
                    "nature"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Karen",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Seasonal cooking in a lush garden setting for a polished Nairobi food experience."
            },
            {
                "name": "Hero at Trademark Hotel",
                "categories": [
                    "food",
                    "culture",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Village Market",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A playful, design-led pan-Asian stop inside one of Nairobi’s most distinctive hotels."
            },
            {
                "name": "Circle Art Gallery",
                "categories": [
                    "culture",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1,
                "budget": "low",
                "area": "Lavington",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Rotating East African contemporary art in a compact gallery visit."
            },
            {
                "name": "The Living Rooms Creative Evening",
                "categories": [
                    "culture",
                    "food",
                    "hidden-gems"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Nairobi",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A relaxed community space combining music, art, conversation and food."
            },
            {
                "name": "Karura Forest Waterfall Loop",
                "categories": [
                    "nature",
                    "photography"
                ],
                "duration": 2,
                "budget": "low",
                "area": "Karura",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A manageable forest route with trails, greenery and waterfall photography."
            },
            {
                "name": "Nairobi National Museum Focus Visit",
                "categories": [
                    "history",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Museum Hill",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 1,
                "description": "A concise route through Kenya’s natural, cultural and historical collections."
            },
            {
                "name": "Maasai Market Curated Browse",
                "categories": [
                    "shopping",
                    "culture"
                ],
                "duration": 1,
                "budget": "low",
                "area": "Rotating Location",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A focused hour for jewellery, baskets, artwork and locally made pieces."
            },
            {
                "name": "Village Market Design and Dining",
                "categories": [
                    "shopping",
                    "food",
                    "culture"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Gigiri",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Independent design, fashion and strong dining choices in one easy location."
            },
            {
                "name": "Nairobi Gallery and City Architecture",
                "categories": [
                    "culture",
                    "history",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "CBD",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Art and architecture around the historic Old PC’s Office, best done in daylight."
            },
            {
                "name": "Giraffe Centre Visit",
                "categories": [
                    "nature",
                    "culture"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Karen",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A close wildlife encounter that fits a half-day better than a rushed one-hour plan."
            },
            {
                "name": "Nairobi National Park Sunrise Drive",
                "categories": [
                    "nature",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 5,
                "budget": "high",
                "area": "Nairobi National Park",
                "timeSlots": [
                    "morning"
                ],
                "weekendOnly": true,
                "trend": 3,
                "description": "A proper early safari with enough time for wildlife sightings and skyline views."
            },
            {
                "name": "Tribe Hotel Art and Jiko Dinner",
                "categories": [
                    "food",
                    "culture",
                    "photography"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Gigiri",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "African art-filled interiors followed by a refined dinner at Jiko."
            },
            {
                "name": "Ngong Hills Half-Day Hike",
                "categories": [
                    "nature",
                    "photography"
                ],
                "duration": 4,
                "budget": "medium",
                "area": "Ngong",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "weekendOnly": true,
                "trend": 2,
                "description": "A longer outdoor option with ridge views, wind and a clear sense of escape from the city."
            }
        ]
    },
    {
        "id": "kuala-lumpur",
        "city": "Kuala Lumpur",
        "country": "Malaysia",
        "image": "assets/images/malaysia.jpg",
        "activities": [
            {
                "name": "Kopitiam Breakfast in Chinatown",
                "categories": [
                    "food",
                    "culture"
                ],
                "duration": 0.75,
                "budget": "low",
                "area": "Chinatown",
                "timeSlots": [
                    "morning"
                ],
                "trend": 2,
                "description": "Kaya toast, local coffee and a fast classic breakfast for a short morning window."
            },
            {
                "name": "Kwai Chai Hong Photo Walk",
                "categories": [
                    "photography",
                    "history",
                    "hidden-gems"
                ],
                "duration": 1,
                "budget": "low",
                "area": "Chinatown",
                "timeSlots": [
                    "morning",
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Murals, lanterns and restored heritage details in a compact cinematic alley."
            },
            {
                "name": "REXKL Creative Hub",
                "categories": [
                    "culture",
                    "food",
                    "shopping",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Chinatown",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Books, food, events and creative spaces inside a repurposed old cinema."
            },
            {
                "name": "Central Market and Petaling Street",
                "categories": [
                    "shopping",
                    "culture",
                    "food"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Chinatown",
                "timeSlots": [
                    "morning",
                    "afternoon",
                    "evening"
                ],
                "trend": 2,
                "description": "Crafts, souvenirs, street snacks and heritage streets in one efficient route."
            },
            {
                "name": "Bangsar Café and Boutique Hop",
                "categories": [
                    "food",
                    "shopping",
                    "hidden-gems"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Bangsar",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A polished neighbourhood route through stylish cafés, design stores and local labels."
            },
            {
                "name": "The Exchange TRX",
                "categories": [
                    "shopping",
                    "food",
                    "photography"
                ],
                "duration": 2,
                "budget": "high",
                "area": "TRX",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "New-generation retail, restaurants and architecture in one of KL’s freshest districts."
            },
            {
                "name": "Islamic Arts Museum Malaysia",
                "categories": [
                    "culture",
                    "history",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Lake Gardens",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Beautiful galleries, architecture and decorative arts in a calm museum setting."
            },
            {
                "name": "KLCC Park and Petronas Blue Hour",
                "categories": [
                    "nature",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "KLCC",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A garden walk timed for the towers lighting up after sunset."
            },
            {
                "name": "Jalan Alor Food Trail",
                "categories": [
                    "food",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Bukit Bintang",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A focused evening tasting route through one of the city’s liveliest food streets."
            },
            {
                "name": "Merdeka 118 Skyline Stop",
                "categories": [
                    "photography",
                    "culture"
                ],
                "duration": 1,
                "budget": "medium",
                "area": "Merdeka",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A modern skyline and architecture moment centred on KL’s newest landmark."
            },
            {
                "name": "Batu Caves Early Visit",
                "categories": [
                    "history",
                    "culture",
                    "photography"
                ],
                "duration": 3,
                "budget": "medium",
                "area": "Gombak",
                "timeSlots": [
                    "morning"
                ],
                "trend": 2,
                "description": "Colourful steps, limestone caves and temple spaces before the day becomes too busy."
            },
            {
                "name": "Perdana Botanical Gardens",
                "categories": [
                    "nature",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Lake Gardens",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 1,
                "description": "A slower green break close to several major cultural attractions."
            },
            {
                "name": "Bukit Bintang Night Edit",
                "categories": [
                    "shopping",
                    "food",
                    "photography"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Bukit Bintang",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "City lights, fashion, dessert and late dining without trying to cover the whole district."
            },
            {
                "name": "Putrajaya Architecture Day Trip",
                "categories": [
                    "architecture",
                    "photography",
                    "culture"
                ],
                "duration": 6,
                "budget": "high",
                "area": "Putrajaya",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "weekendOnly": true,
                "trend": 2,
                "description": "A longer weekend route through monumental architecture, lakeside views and modern civic design."
            }
        ]
    },
    {
        "id": "dubai",
        "city": "Dubai",
        "country": "United Arab Emirates",
        "image": "assets/images/dubai.jpg",
        "activities": [
            {
                "name": "Nightjar Coffee at Alserkal Avenue",
                "categories": [
                    "food",
                    "culture",
                    "hidden-gems"
                ],
                "duration": 0.75,
                "budget": "medium",
                "area": "Al Quoz",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Specialty coffee inside Dubai’s leading contemporary arts district."
            },
            {
                "name": "Alserkal Avenue Gallery Circuit",
                "categories": [
                    "culture",
                    "photography",
                    "shopping"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Al Quoz",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A curated route through galleries, concept stores and design spaces."
            },
            {
                "name": "Museum of the Future",
                "categories": [
                    "culture",
                    "photography",
                    "history"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Sheikh Zayed Road",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Immersive future-focused exhibits inside one of Dubai’s most recognisable buildings."
            },
            {
                "name": "Al Fahidi and Creek Abra",
                "categories": [
                    "history",
                    "culture",
                    "photography"
                ],
                "duration": 2,
                "budget": "low",
                "area": "Bur Dubai",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "Wind-tower lanes followed by a traditional abra crossing over Dubai Creek."
            },
            {
                "name": "Al Seef Golden-Hour Walk",
                "categories": [
                    "photography",
                    "food",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Dubai Creek",
                "timeSlots": [
                    "evening"
                ],
                "trend": 2,
                "description": "Creek views, heritage-inspired architecture and an easy dinner stop at sunset."
            },
            {
                "name": "The View at The Palm",
                "categories": [
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Palm Jumeirah",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A high-impact skyline and Palm view that suits a short luxury itinerary."
            },
            {
                "name": "Dubai Design District Edit",
                "categories": [
                    "shopping",
                    "culture",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "d3",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Contemporary architecture, fashion, design studios and stylish café stops."
            },
            {
                "name": "DIFC Gate Village Art and Dinner",
                "categories": [
                    "food",
                    "culture",
                    "shopping"
                ],
                "duration": 2,
                "budget": "high",
                "area": "DIFC",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Galleries, polished public spaces and a premium dinner in Dubai’s financial district."
            },
            {
                "name": "J1 Beach Afternoon",
                "categories": [
                    "food",
                    "nature",
                    "hidden-gems"
                ],
                "duration": 3,
                "budget": "high",
                "area": "Jumeirah",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A newer beachfront dining and leisure district for a relaxed premium afternoon."
            },
            {
                "name": "Dubai Mall Fashion and Fountain Route",
                "categories": [
                    "shopping",
                    "photography",
                    "food"
                ],
                "duration": 2.5,
                "budget": "high",
                "area": "Downtown",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 2,
                "description": "A focused route through fashion, dessert and the evening fountain area."
            },
            {
                "name": "Ras Al Khor Flamingo View",
                "categories": [
                    "nature",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1,
                "budget": "low",
                "area": "Ras Al Khor",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A surprising wildlife stop close to the skyline, ideal for a short nature-focused plan."
            },
            {
                "name": "Time Out Market Dubai Tasting Loop",
                "categories": [
                    "food",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Downtown",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A flexible tasting route through several strong local restaurant concepts in one place."
            },
            {
                "name": "Desert Sunset and Dinner",
                "categories": [
                    "nature",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 5,
                "budget": "high",
                "area": "Dubai Desert",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "weekendOnly": true,
                "trend": 3,
                "description": "A proper dune and sunset experience with enough time to leave the city comfortably."
            },
            {
                "name": "Hatta Mountain Day",
                "categories": [
                    "nature",
                    "photography"
                ],
                "duration": 7,
                "budget": "high",
                "area": "Hatta",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "weekendOnly": true,
                "trend": 2,
                "description": "A full-day weekend escape for mountains, water and outdoor scenery."
            }
        ]
    },
    {
        "id": "istanbul",
        "city": "Istanbul",
        "country": "Türkiye",
        "image": "assets/images/istanbul.jpg",
        "activities": [
            {
                "name": "Karaköy Güllüoğlu Baklava Stop",
                "categories": [
                    "food",
                    "culture"
                ],
                "duration": 0.75,
                "budget": "low",
                "area": "Karaköy",
                "timeSlots": [
                    "morning",
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A quick classic dessert stop that fits naturally into a one-hour Karaköy plan."
            },
            {
                "name": "Istanbul Modern",
                "categories": [
                    "culture",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Galataport",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Contemporary Turkish art in a Renzo Piano-designed waterfront museum."
            },
            {
                "name": "Galataport Waterfront Edit",
                "categories": [
                    "shopping",
                    "food",
                    "photography"
                ],
                "duration": 1.5,
                "budget": "high",
                "area": "Galataport",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "A polished Bosphorus promenade with design stores, restaurants and sunset views."
            },
            {
                "name": "Karaköy and Galata Photo Walk",
                "categories": [
                    "photography",
                    "history",
                    "food"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Karaköy",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Steep lanes, cafés, historic façades and Galata Tower viewpoints."
            },
            {
                "name": "Hagia Sophia and Sultanahmet Focus Visit",
                "categories": [
                    "history",
                    "culture",
                    "photography"
                ],
                "duration": 2,
                "budget": "medium",
                "area": "Sultanahmet",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A carefully paced visit centred on the city’s most important historic architecture."
            },
            {
                "name": "Basilica Cistern",
                "categories": [
                    "history",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1,
                "budget": "medium",
                "area": "Sultanahmet",
                "timeSlots": [
                    "morning",
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Atmospheric underground columns and reflections in a compact, high-impact visit."
            },
            {
                "name": "Grand Bazaar Design Hunt",
                "categories": [
                    "shopping",
                    "history",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Beyazıt",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 2,
                "description": "A focused search for ceramics, textiles and jewellery rather than an exhausting full-bazaar wander."
            },
            {
                "name": "Balat Colour and Café Walk",
                "categories": [
                    "photography",
                    "food",
                    "hidden-gems"
                ],
                "duration": 2,
                "budget": "low",
                "area": "Balat",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Colourful façades, steep streets, independent cafés and neighbourhood details."
            },
            {
                "name": "Kadıköy Market and Moda Evening",
                "categories": [
                    "food",
                    "culture",
                    "shopping"
                ],
                "duration": 3,
                "budget": "medium",
                "area": "Kadıköy",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "Market tastings, local shops and a relaxed waterfront finish on the Asian side."
            },
            {
                "name": "Cihangir Creative Café Walk",
                "categories": [
                    "food",
                    "culture",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Cihangir",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "Independent cafés, small design spaces and the relaxed creative energy of Cihangir."
            },
            {
                "name": "Bosphorus Sunset Ferry",
                "categories": [
                    "nature",
                    "photography",
                    "culture"
                ],
                "duration": 1.5,
                "budget": "low",
                "area": "Bosphorus",
                "timeSlots": [
                    "evening"
                ],
                "trend": 3,
                "description": "A simple public-ferry-style sunset journey between the European and Asian sides."
            },
            {
                "name": "Nişantaşı Fashion and Dinner",
                "categories": [
                    "shopping",
                    "food"
                ],
                "duration": 2,
                "budget": "high",
                "area": "Nişantaşı",
                "timeSlots": [
                    "afternoon",
                    "evening"
                ],
                "trend": 3,
                "description": "High-end local fashion, polished streets and a refined dinner stop."
            },
            {
                "name": "Arter Contemporary Art",
                "categories": [
                    "culture",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 1.5,
                "budget": "medium",
                "area": "Dolapdere",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "trend": 3,
                "description": "A strong contemporary art stop away from the most obvious historic circuit."
            },
            {
                "name": "Princes’ Islands Day Escape",
                "categories": [
                    "nature",
                    "photography",
                    "hidden-gems"
                ],
                "duration": 7,
                "budget": "medium",
                "area": "Princes’ Islands",
                "timeSlots": [
                    "morning",
                    "afternoon"
                ],
                "weekendOnly": true,
                "trend": 2,
                "description": "A full-day ferry escape with quieter streets, sea views and time to explore without rushing."
            }
        ]
    }
];


const preferences = JSON.parse(localStorage.getItem("atelierPreferences"));

const experienceHero = document.querySelector(".experience-hero");
const itinerarySection = document.querySelector(".itinerary-section");
const saveJourneySection = document.querySelector(".save-journey-section");
const emptyState = document.getElementById("emptyState");

function showEmptyState(message = "Return to the planner and choose your city, time, budget and interests.") {
    localStorage.removeItem("atelierGeneratedJourney");

    if (experienceHero) experienceHero.style.display = "none";
    if (itinerarySection) itinerarySection.style.display = "none";
    if (saveJourneySection) saveJourneySection.style.display = "none";

    if (emptyState) {
        emptyState.style.display = "flex";
        const emptyCopy = emptyState.querySelector("p:not(.section-label)");
        if (emptyCopy) emptyCopy.textContent = message;
    }
}

if (!preferences) {
    showEmptyState();
} else {
    createItinerary(preferences);
}

function getAvailableHours(time) {
    const hours = {
        "1": 1,
        "2": 2,
        "4": 4,
        "8": 8
    };

    return hours[time] || 2;
}

function getMaximumStops(time) {
    const stops = {
        "1": 1,
        "2": 2,
        "4": 3,
        "8": 5
    };
    return stops[time] || 2;
}

function getBudgetLevel(budget) {
    const levels = {
        low: 1,
        medium: 2,
        high: 3
    };

    return levels[budget] || 1;
}

function formatTimeChoice(time) {
    const labels = {
        "1": "1 hour",
        "2": "2 hours",
        "4": "Half day",
        "8": "Full day"

    };

    return labels[time] || "Flexible";
}

function formatBudget(budget) {
    const labels = {
        low: "Budget friendly",
        medium: "Moderate",
        high: "Luxury"
    };

    return labels[budget] || "Flexible";
}

function formatInterest(interest) {
    return interest
        .replaceAll("-", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
} function getActivityImage(activity, destination) {

    const city = destination.id;

    const fileNames = {

        istanbul: {
            "Bosphorus Sunset Ferry":
                "istanbul-bosphorus.jpg",

            "Balat Colour and Café Walk":
                "istanbul-balat-street.jpg",

            "Cihangir Creative Café Walk":
                "istanbul-karakoy-cafe.jpg",

            "Karaköy and Galata Photo Walk":
                "istanbul-galata.jpg",

            "Grand Bazaar Design Hunt":
                "istanbul-spice-market.jpg"
        },

        dubai: {
            "Nightjar Coffee at Alserkal Avenue":
                "dubai-alserkal.jpg",

            "Museum of the Future":
                "dubai-museum-future.jpg",

            "Al Fahidi and Creek Abra":
                "dubai-al-fahidi.jpg",

            "J1 Beach Afternoon":
                "dubai-jumeirah-beach.jpg"
        },

        marrakech: {
            "Bacha Coffee at Dar el Bacha":
                "marrakech-bacha-coffee.jpg",

            "Bahia Palace":
                "marrakech-bahia-palace.jpg"
        },

        guangzhou: {
            "Chen Clan Ancestral Hall":
                "guangzhou-chen-clan-hall.jpg"
        },

        nairobi: {
            "Cultiva Farm-to-Table Lunch":
                "nairobi-cultiva.jpg"
        },

        "kuala-lumpur": {
            "Batu Caves Early Visit":
                "kuala-lumpur-batu-caves.jpg",

            "REXKL Creative Hub":
                "kuala-lumpur-rexkl.jpg"
        }

    };

    const image =
        fileNames[city]?.[activity.name];

    if (!image) {
        return destination.image;
    }

    return `assets/images/activities/${image}`;

}

function matchesSelectedInterest(activity, interests) {
    return activity.categories.some((category) => {
        return interests.includes(category);
    });
}

function countInterestMatches(activity, interests) {
    return activity.categories.filter((category) => {
        return interests.includes(category);
    }).length;
}

function scoreActivity(activity, userPreferences, remainingHours) {
    const interestScore =
        countInterestMatches(activity, userPreferences.interests) * 12;

    const selectedBudget = getBudgetLevel(userPreferences.budget);
    const activityBudget = getBudgetLevel(activity.budget);

    const budgetScore =
        activityBudget === selectedBudget
            ? 4
            : selectedBudget - activityBudget;

    const durationScore =
        activity.duration <= remainingHours
            ? Math.min(activity.duration, remainingHours)
            : -100;

    const trendScore = activity.trend || 0;

    const variation = Math.random() * 2.5;

    return (
        interestScore +
        budgetScore +
        durationScore +
        trendScore +
        variation
    );
}

function createItinerary(userPreferences) {
    const selectedDestination = destinationData.find((destination) => {
        return destination.id === userPreferences.destination;
    });

    if (!selectedDestination) {
        showEmptyState("That city was not found. Return to the planner and choose it again.");
        return;
    }

    const availableHours = getAvailableHours(userPreferences.time);
    const maximumStops = getMaximumStops(userPreferences.time);
    const selectedBudgetLevel = getBudgetLevel(userPreferences.budget);

    let candidates = selectedDestination.activities.filter((activity) => {
        const fitsBudget =
            getBudgetLevel(activity.budget) <= selectedBudgetLevel;

        const fitsTime =
            activity.duration <= availableHours;
        return (
            fitsBudget &&
            fitsTime &&
            matchesSelectedInterest(
                activity,
                userPreferences.interests
            )
        );
    });

    if (candidates.length === 0) {
        showEmptyState(
            `Atelier could not find a strong ${formatBudget(
                userPreferences.budget
            ).toLowerCase()} match for those interests in ${selectedDestination.city
            }. Try another interest or budget.`
        );
        return;
    }

    const selectedActivities = [];
    let usedHours = 0;

    // First, try to represent every chosen interest.
    userPreferences.interests.forEach((interest) => {
        const remainingHours = availableHours - usedHours;

        const bestForInterest = candidates
            .filter((activity) => {
                const notUsed = !selectedActivities.some(
                    (selected) => selected.name === activity.name
                );

                return (
                    activity.categories.includes(interest) &&
                    activity.duration <= remainingHours &&
                    notUsed
                );
            })
            .sort((a, b) => {
                return (
                    scoreActivity(b, userPreferences, remainingHours) -
                    scoreActivity(a, userPreferences, remainingHours)
                );
            })[0];

        if (
            bestForInterest &&
            selectedActivities.length < maximumStops
        ) {
            selectedActivities.push(bestForInterest);
            usedHours += bestForInterest.duration;
        }
    });

    // Then fill remaining time only with matching-interest activities.
    candidates = candidates
        .filter((activity) => {
            return !selectedActivities.some(
                (selected) => selected.name === activity.name
            );
        })
        .sort((a, b) => {
            const remainingHours = availableHours - usedHours;

            return (
                scoreActivity(b, userPreferences, remainingHours) -
                scoreActivity(a, userPreferences, remainingHours)
            );
        });

    for (const activity of candidates) {
        const remainingHours = availableHours - usedHours;

        if (
            selectedActivities.length >= maximumStops ||
            activity.duration > remainingHours
        ) {
            continue;
        }

        const repeatsArea =
            selectedActivities.length > 0 &&
            selectedActivities[
                selectedActivities.length - 1
            ].area === activity.area;

        if (repeatsArea && candidates.length > 1) {
            continue;
        }

        selectedActivities.push(activity);
        usedHours += activity.duration;
    }
    const scheduledActivities =
        createSchedule(selectedActivities);

    const generatedJourney = {
        id: `${selectedDestination.id}-${Date.now()}`,
        createdAt: new Date().toISOString(),
        destination: selectedDestination,
        preferences: userPreferences,
        activities: scheduledActivities,
        totalHours: usedHours
    };

    localStorage.setItem(
        "atelierGeneratedJourney",
        JSON.stringify(generatedJourney)
    );

    displayJourney(generatedJourney);
}

function createSchedule(activities) {
    let currentMinutes = 9 * 60;

    return activities.map((activity) => {
        const hours = Math.floor(currentMinutes / 60);
        const minutes = currentMinutes % 60;

        const scheduled = {
            ...activity,
            scheduleLabel:
                `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
        };

        currentMinutes += (activity.duration * 60) + 30;

        return scheduled;
    });
}
function displayJourney(journey) {
    const destination = journey.destination;
    const userPreferences = journey.preferences;
    const activities = journey.activities;

    const formattedTime = formatTimeChoice(userPreferences.time);
    const formattedBudget = formatBudget(userPreferences.budget);

    const formattedInterests = userPreferences.interests
        .map(formatInterest)
        .join(" · ");

    document.getElementById("journeyTitle").textContent =
        `Your ${formattedTime.toLowerCase()} in ${destination.city}.`;

    document.getElementById("journeySummary").textContent =
        `${activities.length} carefully matched stops across ${destination.city}, selected for your time, budget and interests.`;

    document.getElementById("journeyTime").textContent = formattedTime;
    document.getElementById("journeyBudget").textContent = formattedBudget;
    document.getElementById("journeyInterests").textContent = formattedInterests;

    document.getElementById("sidebarDestination").textContent =
        destination.city;
    document.getElementById("sidebarTime").textContent = formattedTime;
    document.getElementById("sidebarBudget").textContent = formattedBudget;
    document.getElementById("sidebarStops").textContent = activities.length;

    const totalHours =
        Math.round(journey.totalHours * 10) / 10;

    document.getElementById("itineraryIntro").textContent =
        `${totalHours} hours planned, with time between each stop to travel and explore.`;
    const readableInterests = userPreferences.interests
        .map(formatInterest)
        .join(", ");

    document.getElementById("itineraryReason").innerHTML = `
    <span>Why this itinerary</span>
    <p>
        Built around your interests in ${readableInterests},
        within a ${formattedBudget.toLowerCase()} budget
        and ${formattedTime.toLowerCase()} schedule.
    </p>
`;

    document.getElementById(
        "experienceBackground"
    ).style.backgroundImage = `url("${destination.image}")`;

    const timeline = document.getElementById("itineraryTimeline");
    timeline.innerHTML = "";
    activities.forEach((activity) => {
        const durationText =
            activity.duration === 1
                ? "1 hour"
                : `${activity.duration} hours`;

        const itineraryItem =
            document.createElement("article");

        itineraryItem.className = "collage-card";

        const activityImage =
            getActivityImage(activity, destination);

        itineraryItem.innerHTML = `
        <div class="collage-image-wrapper">

    <img
        src="${activityImage}"
        alt=""
        class="collage-blur-image"
        aria-hidden="true"
    >

    <img
        src="${activityImage}"
        alt="${activity.name}"
        class="collage-image"
    >

    <div class="collage-overlay">

                <div class="collage-topline">
                    <span class="collage-time">
                        ${activity.scheduleLabel}
                    </span>

                    <span class="collage-duration">
                        ${durationText}
                    </span>
                </div>

                <div class="collage-content">
                    <h3>${activity.name}</h3>

                    <p class="collage-description">
                        ${activity.description}
                    </p>

                    <div class="collage-meta">
                        <span>
                            ${activity.categories
                .map(formatInterest)
                .join(" • ")}
                        </span>

                        <span>${activity.area}</span>
                    </div>
                </div>

            </div>
        </div>
    `;

        timeline.appendChild(itineraryItem);
    });

    const saveJourneyButton =
        document.getElementById("saveJourneyButton");

    const saveMessage =
        document.getElementById("saveMessage");

    if (saveJourneyButton && saveMessage) {
        saveJourneyButton.addEventListener("click", () => {
            const generatedJourney =
                localStorage.getItem("atelierGeneratedJourney");

            if (!generatedJourney) {
                saveMessage.textContent =
                    "There is no journey to save yet.";
                return;
            }

            const savedJourneys =
                JSON.parse(
                    localStorage.getItem("atelierSavedJourneys")
                ) || [];

            const journeyToSave =
                JSON.parse(generatedJourney);

            savedJourneys.push(journeyToSave);

            localStorage.setItem(
                "atelierSavedJourneys",
                JSON.stringify(savedJourneys)
            );

            saveMessage.textContent =
                "Journey saved. Create an account later to keep it permanently.";

            saveJourneyButton.innerHTML =
                "Saved <span>♥</span>";

            saveJourneyButton.disabled = true;
        });
    }
}
    
    