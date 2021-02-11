const settings = [
  {
  "name": "coffeebytes-en",
  "match": [".*coffeebytes.dev/en(\/.*)?$"], 
  "state": {
    "frontity": {
      "url": "https://coffeebytes.dev",
      "title": "Coffee bytes",
      "description": "Python, Javascript and GNU/Linux web development notes"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "lang": "en",
          "menu": [
            [
              "Home",
              "/en/"
            ],
            [
              "About me",
              "/en/about-me/"
            ],
            [
              "Books I've read and reviews",
              "/en/books-ive-read-and-reviews/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false,
          }
        },
        "socialMedia": {
          "twitter": "https://twitter.com/neon_affogato",
          "github": "https://github.com/eduardoZepeda",
          "linkedin": "https://linkedin.com/--eduardozepeda--"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://coffeebytes.dev"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
},
{
  "name": "coffeebytes",
  "match": [".*coffeebytes.dev(\/.*)?$"], 
  "state": {
    "frontity": {
      "url": "https://coffeebytes.dev",
      "title": "Coffee bytes",
      "description": "Apuntes de desarrollo web con GNU/Linux, Python y Javascript"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "lang": "es",
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Sobre mi",
              "/about/"
            ],
            [
              "Libros que he leído y reseñas",
              "/libros-que-he-leido-y-resenas/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false          }
        },
        "socialMedia": {
          "twitter": "https://twitter.com/neon_affogato",
          "github": "https://github.com/eduardoZepeda",
          "linkedin": "https://linkedin.com/--eduardozepeda--"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://coffeebytes.dev"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
}
];


export default settings;
