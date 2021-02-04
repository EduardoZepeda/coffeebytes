const settings = {
  "name": "coffeebytes",
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
            ],
            [
              "Contáctame",
              "/contacto/"
            ],
            [
              "Subscríbete aquí",
              "/no-te-pierdas-ninguna-de-nuestras-entradas/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
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
    "@frontity/html2react"
  ]
};

export default settings;
