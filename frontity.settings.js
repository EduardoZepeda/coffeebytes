const settings = [
  {
  "name": "coffeebytes-en",
  "match": [".*coffeebytes.dev/en(\/.*)?$"], 
  "state": {
    "frontity": {
      "url": "https://coffeebytes.dev",
      "title": "Coffee bytes",
      "description": "Python and Javascript web development blog"
    },
    "analytics": {
      "pageviews": {
        "googleAnalytics": true,
      },
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
              "/en/eduardo-zepeda-profile/"
            ],
            [
              "Books I've read and reviews",
              "/en/books-ive-read-and-reviews/"
            ],
            [
              "Contact me",
              "/en/contact-eduardo-zepeda/"
            ],
            [
              "Gifts for you",
              "/en/gifts/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false,
          },
          "mailChimp": {
            "modalCooldownInDays": 30,
            "delayModalShowUpInSeconds": 60, 
            "formUrl": "https://dev.us17.list-manage.com/subscribe/post?u=5db658017fc3fb83c8ab5ff63&amp;id=c4ad1325c9",
            "formHiddenField": "b_5db658017fc3fb83c8ab5ff63_c4ad1325c9"
          },
        },
        "socialMedia": {
          "twitter": "https://twitter.com/hello_wired",
          "github": "https://github.com/eduardoZepeda",
          "linkedin": "https://linkedin.com/--eduardozepeda--",
          "codewars": "https://www.codewars.com/users/EduardoZepeda"
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
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-112824408-2",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
},
{
  "name": "coffeebytes",
  "match": [".*coffeebytes.dev(\/.*)?$"], 
  "state": {
    "frontity": {
      "url": "https://coffeebytes.dev",
      "title": "Coffee bytes",
      "description": "Blog de desarrollo web con Python y Javascript"
    },
    "analytics": {
      "pageviews": {
        "googleAnalytics": true,
      },
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
              "/perfil-de-eduardo-zepeda-autor-de-coffee-bytes/"
            ],
            [
              "Libros que he leído y reseñas",
              "/libros-que-he-leido-y-resenas/"
            ],
            [
              "Contáctame",
              "/contacto-eduardo-zepeda/"
            ],
            [
              "Regalos",
              "/regalos/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false          
          },
          "mailChimp": {
            "modalCooldownInDays": 30,
            "delayModalShowUpInSeconds": 30, 
            "formUrl": "https://dev.us17.list-manage.com/subscribe/post?u=5db658017fc3fb83c8ab5ff63&amp;id=c4ad1325c9",
            "formHiddenField": "b_5db658017fc3fb83c8ab5ff63_c4ad1325c9"
          },
        },
        "socialMedia": {
          "twitter": "https://twitter.com/hello_wired",
          "github": "https://github.com/eduardoZepeda",
          "linkedin": "https://linkedin.com/--eduardozepeda--",
          "codewars": "https://www.codewars.com/users/EduardoZepeda"
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
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-112824408-2",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
}
];


export default settings;
