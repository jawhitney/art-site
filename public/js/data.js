var type = [
    { "name": "Abstract" },
    { "name": "Buildings" },
    { "name": "Design" },
    { "name": "Landscape" },
    { "name": "Realistic" },
    { "name": "Plein Air" },
    { "name": "Pop Art" }
];

var series = [
    { "name": "Chromatic Canyon" },
    { "name": "Pop Art Portrait" }
];

var portfolio = [
    {
        "id": 0,
        "title": "Purple Haze",
        "medium": "Oil on gallery wrapped canvas",
        "width": 30,
        "height": 40,
        "description": "First painting in the \"Chromatic Canyon\" series. Each painting in this series is based upon an original photo of the Grand Canyon. For each photo, I created a paper and oil pastel collage and then crafted a painting based upon that collage.",
        "type": [ "Abstract", "Landscape" ],
        "series": [ "Chromatic Canyon" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 1,
        "title": "Canyon at Sunset",
        "medium": "Oil on gallery wrapped canvas",
        "width": 30,
        "height": 40,
        "description": "",
        "type": [ "Abstract", "Landscape" ],
        "series": [ "Chromatic Canyon" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg",
            "full": "images/abstract/canyon-at-sunset-full.jpg"
        }
    },
    {
        "id": 2,
        "title": "Afternoon Distance",
        "medium": "Oil on canvas, two canvases",
        "width": 30,
        "height": 40,
        "description": "",
        "type": [ "Abstract", "Landscape" ],
        "series": [ "Chromatic Canyon" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 3,
        "title": "Peaceful Morning",
        "medium": "Oil on gallery wrapped canvas",
        "width": 18,
        "height": 24,
        "description": "",
        "type": [ "Abstract", "Landscape" ],
        "series": [ "Chromatic Canyon" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 4,
        "title": "Bright Rock Wall",
        "medium": "Oil on gallery wrapped canvas",
        "width": 18,
        "height": 24,
        "description": "",
        "type": [ "Abstract", "Landscape" ],
        "series": [ "Chromatic Canyon" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 5,
        "title": "Spring Emerges",
        "medium": "Oil on canvas",
        "width": 30,
        "height": 40,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 6,
        "title": "Smudged Orchid",
        "medium": "Acrylic on canvas",
        "width": 16,
        "height": 20,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 6,
        "title": "Smudged Sunset",
        "medium": "Acrylic on canvas",
        "width": 16,
        "height": 20,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 7,
        "title": "Summer Breeze",
        "medium": "Oil on canvas",
        "width": 5,
        "height": 7,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 8,
        "title": "Loss Rebuilding",
        "medium": "Oil on panel",
        "width": 7,
        "height": 11,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 9,
        "title": "Peacock",
        "medium": "Acrylic on wood panel",
        "width": 11,
        "height": 14,
        "description": "",
        "type": [ "Abstract" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 10,
        "title": "Margaret Island Close-Up",
        "medium": "Acrylic",
        "width": 16,
        "height": 20,
        "description": "This painting is based upon photos of a combination of a variety of flowers that can be found on Margaret Island in Hungary. Photos were taken while I was there in late Summer of 2010.",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 11,
        "title": "Bowl of Pears",
        "medium": "Oil on canvas",
        "width": 8,
        "height": 10,
        "description": "",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 12,
        "title": "Corvair",
        "medium": "Acrylic on canvas",
        "width": 11,
        "height": 14,
        "description": "",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 13,
        "title": "Hershey Gardens",
        "medium": "Oil on canvas",
        "width": 16,
        "height": 20,
        "description": "",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 14,
        "title": "Arty",
        "medium": "Oil on canvas",
        "width": 16,
        "height": 20,
        "description": "",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 15,
        "title": "Springtime at the IMA",
        "medium": "Oil on canvas",
        "width": 11,
        "height": 14,
        "description": "Painted from an original photo taken on the grounds of the Indianapolis Museum of Art.",
        "type": [ "Realistic" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 16,
        "title": "Self Portrait",
        "medium": "Acrylic on canvas",
        "width": 24,
        "height": 48,
        "description": "",
        "type": [ "Pop Art" ],
        "series": [ "Pop Art Portrait" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 17,
        "title": "Jonathan",
        "medium": "Acrylic on canvas",
        "width": 24,
        "height": 48,
        "description": "",
        "type": [ "Pop Art" ],
        "series": [ "Pop Art Portrait" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 18,
        "title": "Growing Family",
        "medium": "Acrylic on canvas",
        "width": 20,
        "height": 20,
        "description": "",
        "type": [ "Pop Art" ],
        "series": [ "Pop Art Portrait" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 19,
        "title": "Gracie Pop",
        "medium": "Watercolor on paper",
        "width": 18,
        "height": 24,
        "description": "Painted from an original photo of a client's pet cat.",
        "type": [ "Pop Art" ],
        "series": [ "Pop Art Portrait" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 20,
        "title": "Impact Conference Flyer",
        "medium": "Digital",
        "description": "Established the branding for Impact's annual event held in both Chicago and Atlanta. This piece is part of the flyer college students received inviting them to the conference.",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 21,
        "title": "Keynote Business Card",
        "medium": "Digital",
        "description": "Established a new, temporary branding for Keynote during a time of transition. This piece is the front side of their business card.",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 22,
        "title": "Chevronbone Coastet Set",
        "medium": "Coasters",
        "description": "",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 23,
        "title": "Chevronbone Pattern",
        "medium": "Pastel on cardboard",
        "description": "",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 24,
        "title": "St. Basil’s Cathedral",
        "medium": "Watercolor and Ink on paper",
        "width": 5,
        "height": 6,
        "description": "One of more than 50 hand drawn, hand painted items created with another artist at Keynote for a stop-motion promotional video.",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 25,
        "title": "Transworld Squirrel Logo",
        "medium": "Digital",
        "description": "Logo created for <a href=\"http://vimeo.com/transworldsquirrel\" target=\"_blank\">Transworld Squirrel</a> video company creating short films.",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 26,
        "title": "Lindsay Smith Life Coaching",
        "medium": "Digital",
        "description": "Emerging Life Coach, <a href=\"http://lindsaysmithcoaching.com/\" target=\"_blank\">Lindsay Smith</a> commissioned me to help her create her logo and beginning elements of her branding as well as her business card",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 27,
        "title": "University of Washington Cru Logo",
        "medium": "Digital",
        "description": "",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    },
    {
        "id": 28,
        "title": "Foulds Photography",
        "medium": "Digital",
        "description": "Commissioned logo for <a href=\"https://www.facebook.com/pages/Foulds-Photography/166812621292?fref=photo\" target=\"_blank\">Foulds Photography</a> looking to update their brand.",
        "type": [ "Design" ],
        "images": {
            "thumbnail": "images/abstract/canyon-at-sunset-thumbnail.jpg"
        }
    }
];