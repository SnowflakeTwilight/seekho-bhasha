export interface FlashCard {
  id: string
  image: string
  question: string
  options: string[]
  correctAnswer: number
}

export interface Module {
  name: string
  description: string
  cards: FlashCard[]
}

export const modules: Record<string, Record<"en" | "sa", Module>> = {
    fruits: {
        en: {
            name: "Fruits",
            description: "Learn common fruit names",
            cards: [
                {
                    id: "apple",
                    image: "/images/fruits/apple.jpg",
                    question: "What is this fruit?",
                    options: ["Apple", "Orange", "Banana"],
                    correctAnswer: 0,
                },
                {
                    id: "banana",
                    image: "/images/fruits/banana.jpg",
                    question: "What is this fruit?",
                    options: ["Apple", "Banana", "Grape"],
                    correctAnswer: 1,
                },
                {
                    id: "orange",
                    image: "/images/fruits/orange.jpg",
                    question: "What is this fruit?",
                    options: ["Lemon", "Orange", "Apple"],
                    correctAnswer: 1,
                },
                {
                    id: "strawberry",
                    image: "/images/fruits/strawberry.jpg",
                    question: "What is this fruit?",
                    options: ["Cherry", "Strawberry", "Raspberry"],
                    correctAnswer: 1,
                },
                {
                    id: "grapes",
                    image: "/images/fruits/grape.jpg",
                    question: "What is this fruit?",
                    options: ["Grapes", "Blueberries", "Olives"],
                    correctAnswer: 0,
                },
            ],
        },
        sa: {
            name: "फलानि",
            description: "फलनामानि पठन्तु",
            cards: [
                {
                    id: "apple",
                    image: "/images/fruits/apple.jpg",
                    question: "एषः कः फलः?",
                    options: ["सेबः", "नारङ्गम्", "कदली"],
                    correctAnswer: 0,
                },
                {
                    id: "banana",
                    image: "/images/fruits/banana.jpg",
                    question: "एषः कः फलः?",
                    options: ["सेबः", "कदली", "द्राक्षा"],
                    correctAnswer: 1,
                },
                {
                    id: "orange",
                    image: "/images/fruits/orange.jpg",
                    question: "एषः कः फलः?",
                    options: ["जम्बीरम्", "नारङ्गम्", "सेबः"],
                    correctAnswer: 1,
                },
                {
                    id: "strawberry",
                    image: "/images/fruits/strawberry.jpg",
                    question: "एषः कः फलः?",
                    options: ["चेर्री", "त्रणबेर्यम्", "रसबेर्यम्"],
                    correctAnswer: 1,
                },
                {
                    id: "grapes",
                    image: "/images/fruits/grape.jpg",
                    question: "एषः कः फलः?",
                    options: ["द्राक्षा", "नीलद्राक्षा", "जैतूनम्"],
                    correctAnswer: 0,
                },
            ],
        },
    },

    animals: {
        en: {
            name: "Animals",
            description: "Learn animal names",
            cards: [
                {
                    id: "cat",
                    image: "/images/animals/cat.jpg",
                    question: "What animal is this?",
                    options: ["Dog", "Cat", "Rabbit"],
                    correctAnswer: 1,
                },
                {
                    id: "dog",
                    image: "/images/animals/dog.jpg",
                    question: "What animal is this?",
                    options: ["Dog", "Wolf", "Fox"],
                    correctAnswer: 0,
                },
                {
                    id: "elephant",
                    image: "/images/animals/elephant.jpg",
                    question: "What animal is this?",
                    options: ["Hippo", "Rhino", "Elephant"],
                    correctAnswer: 2,
                },
                {
                    id: "lion",
                    image: "/images/animals/lion.png",
                    question: "What animal is this?",
                    options: ["Tiger", "Lion", "Leopard"],
                    correctAnswer: 1,
                },
                {
                    id: "bird",
                    image: "/images/animals/bird.webp",
                    question: "What animal is this?",
                    options: ["Bird", "Bat", "Butterfly"],
                    correctAnswer: 0,
                },
            ],
        },
        sa: {
            name: "पशवः",
            description: "पशुनामानि पठन्तु",
            cards: [
                {
                    id: "cat",
                    image: "/images/animals/cat.jpg",
                    question: "एषः कः पशुः?",
                    options: ["श्वानः", "मार्जारः", "शशकः"],
                    correctAnswer: 1,
                },
                {
                    id: "dog",
                    image: "/images/animals/dog.jpg",
                    question: "एषः कः पशुः?",
                    options: ["श्वानः", "वृकः", "लङ्कः"],
                    correctAnswer: 0,
                },
                {
                    id: "elephant",
                    image: "/images/animals/elephant.jpg",
                    question: "एषः कः पशुः?",
                    options: ["गजः", "गवयः", "गण्डः"],
                    correctAnswer: 0,
                },
                {
                    id: "lion",
                    image: "/images/animals/lion.png",
                    question: "एषः कः पशुः?",
                    options: ["सिंहः", "व्याघ्रः", "चित्रकः"],
                    correctAnswer: 0,
                },
                {
                    id: "bird",
                    image: "/images/animals/bird.webp",
                    question: "एषः कः पक्षी?",
                    options: ["पक्षी", "वटः", "पतङ्गः"],
                    correctAnswer: 0,
                },
            ],
        },
    },

    places: {
        en: {
            name: "Places",
            description: "Learn about different places",
            cards: [
                {
                    id: "house",
                    image: "/images/places/home.jpg",
                    question: "What place is this?",
                    options: ["House", "School", "Hospital"],
                    correctAnswer: 0,
                },
                {
                    id: "school",
                    image: "/images/places/school.jpg",
                    question: "What place is this?",
                    options: ["Library", "School", "Museum"],
                    correctAnswer: 1,
                },
                {
                    id: "hospital",
                    image: "/images/places/hospital.jpg",
                    question: "What place is this?",
                    options: ["Clinic", "Hospital", "Pharmacy"],
                    correctAnswer: 1,
                },
                {
                    id: "park",
                    image: "/images/places/park.webp",
                    question: "What place is this?",
                    options: ["Park", "Forest", "Garden"],
                    correctAnswer: 0,
                },
                {
                    id: "beach",
                    image: "/images/places/beach.avif",
                    question: "What place is this?",
                    options: ["Lake", "Beach", "River"],
                    correctAnswer: 1,
                },
            ],
        },
        sa: {
            name: "स्थलानि",
            description: "स्थलनामानि पठन्तु",
            cards: [
                {
                    id: "house",
                    image: "/images/places/home.jpg",
                    question: "एषः कः स्थलः?",
                    options: ["गृहः", "विद्यालयः", "आरोग्यशाला"],
                    correctAnswer: 0,
                },
                {
                    id: "school",
                    image: "/images/places/school.jpg",
                    question: "एषः कः स्थलः?",
                    options: ["पुस्तकालयः", "विद्यालयः", "संग्रहालयः"],
                    correctAnswer: 1,
                },
                {
                    id: "hospital",
                    image: "/images/places/hospital.jpg",
                    question: "एषः कः स्थलः?",
                    options: ["चिकित्सालयः", "आरोग्यशाला", "औषधालयः"],
                    correctAnswer: 1,
                },
                {
                    id: "park",
                    image: "/images/places/park.webp",
                    question: "एषः कः स्थलः?",
                    options: ["उद्यानम्", "अरण्यम्", "वाटिका"],
                    correctAnswer: 0,
                },
                {
                    id: "beach",
                    image: "/images/places/beach.avif",
                    question: "एषः कः स्थलः?",
                    options: ["सरोवरः", "समुद्रतटम्", "नदी"],
                    correctAnswer: 1,
                },
            ],
        },
    },

    people: {
        en: {
            name: "People",
    description: "Learn about different people and professions",
    cards: [
      {
        id: "doctor",
        image: "/images/people/doctor.webp",
        question: "What profession is this?",
        options: ["Doctor", "Nurse", "Dentist"],
        correctAnswer: 0,
      },
      {
        id: "teacher",
        image: "/images/people/teacher.jpeg",
        question: "What profession is this?",
        options: ["Student", "Teacher", "Principal"],
        correctAnswer: 1,
      },
      {
        id: "chef",
        image: "/images/people/chef.jpg",
        question: "What profession is this?",
        options: ["Waiter", "Chef", "Baker"],
        correctAnswer: 1,
      },
      {
        id: "police",
        image: "/images/people/police.webp",
        question: "What profession is this?",
        options: ["Police Officer", "Security Guard", "Firefighter"],
        correctAnswer: 0,
      },
      {
        id: "farmer",
        image: "/images/people/farmer.jpg",
        question: "What profession is this?",
        options: ["Gardener", "Farmer", "Botanist"],
        correctAnswer: 1,
      },
    ],
        },
        sa: {
            name: "व्यक्तयः",
            description: "व्यक्तिनामानि वा व्यवसायाः पठन्तु",
            cards: [
                {
                    id: "doctor",
                    image: "/images/people/doctor.webp",
                    question: "एषः कः व्यवसायी?",
                    options: ["वैद्यः", "सेविका", "दन्तचिकित्सकः"],
                    correctAnswer: 0,
                },
                {
                    id: "teacher",
                    image: "/images/people/teacher.jpeg",
                    question: "एषः कः व्यवसायी?",
                    options: ["छात्रः", "अध्यापकः", "प्रधानाचार्यः"],
                    correctAnswer: 1,
                },
                {
                    id: "chef",
                    image: "/images/people/chef.jpg",
                    question: "एषः कः व्यवसायी?",
                    options: ["सेवकः", "पाकशास्त्रज्ञः", "पेषकः"],
                    correctAnswer: 1,
                },
                {
                    id: "police",
                    image: "/images/people/police.webp",
                    question: "एषः कः व्यवसायी?",
                    options: ["पोलिस् अधिकारी", "सुरक्षारक्षकः", "दहनदग्ध-निवारकः"],
                    correctAnswer: 0,
                },
                {
                    id: "farmer",
                    image: "/images/people/farmer.jpg",
                    question: "एषः कः व्यवसायी?",
                    options: ["उद्यानपालकः", "कृषकः", "वनस्पतिशास्त्रज्ञः"],
                    correctAnswer: 1,
                },
            ],
        },
    }


}
