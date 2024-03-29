const settings = [
  {
    name: 'coffeebytes',
    match: ['.*coffeebytes.dev(/.*)?$'],
    state: {
      frontity: {
        url: 'https://coffeebytes.dev',
        title: 'Coffee bytes',
        description: 'Blog de desarrollo web frontend y backend'
      },
      analytics: {
        pageviews: {
          googleAnalytics: true
        }
      }
    },
    packages: [
      {
        name: '@frontity/mars-theme',
        state: {
          theme: {
            lang: 'es',
            askCookieConsent: false,
            menu: [
              [
                'Home',
                '/'
              ],
              [
                'Sobre mi',
                '/perfil-de-eduardo-zepeda-autor-de-coffee-bytes/'
              ],
              [
                'Libros que he leído y reseñas',
                '/libros-que-he-leido-y-resenas/'
              ],
              [
                'Regalos',
                '/regalos/'
              ]
            ],
            featured: {
              showOnList: true,
              showOnPost: false
            },
            mailChimp: {
              modalCooldownInDays: 30,
              delayModalShowUpInSeconds: 13,
              formUrl: 'https://dev.us17.list-manage.com/subscribe/post?u=5db658017fc3fb83c8ab5ff63&amp;id=c4ad1325c9',
              formHiddenField: 'b_5db658017fc3fb83c8ab5ff63_c4ad1325c9'
            }
          },
          socialMedia: {
            instagram: 'https://bit.ly/3jnxnMF',
            twitter: 'https://twitter.com/hello_wired',
            linkedin: 'https://linkedin.com/in/eduardomzepeda',
            codewars: 'https://www.codewars.com/users/EduardoZepeda',
            website: 'https://eduardozepeda.dev'
          }
        }
      },
      {
        name: '@frontity/wp-source',
        state: {
          source: {
            url: 'https://coffeebytes.dev'
          }
        }
      },
      {
        name: '@frontity/google-analytics',
        state: {
          googleAnalytics: {
            trackingId: 'UA-112824408-2',
            id: 'UA-112824408-2'
          }
        }
      },
      '@frontity/tiny-router',
      '@frontity/html2react',
      '@frontity/yoast'
    ]
  },
  {
    name: 'coffeebytes-en',
    match: ['.*coffeebytes.dev/en(/.*)?$'],
    state: {
      frontity: {
        url: 'https://coffeebytes.dev',
        title: 'Coffee bytes',
        description: 'Backend and frontend web development blog'
      },
      analytics: {
        pageviews: {
          googleAnalytics: true
        }
      }
    },
    packages: [
      {
        name: '@frontity/mars-theme',
        state: {
          theme: {
            lang: 'en',
            askCookieConsent: false,
            menu: [
              [
                'Home',
                '/en/'
              ],
              [
                'About me',
                '/en/eduardo-zepeda-profile/'
              ],
              [
                "Books I've read and reviews",
                '/en/books-ive-read-and-reviews/'
              ],
              [
                'Gifts for you',
                '/en/gifts/'
              ]
            ],
            featured: {
              showOnList: true,
              showOnPost: false
            },
            mailChimp: {
              modalCooldownInDays: 30,
              delayModalShowUpInSeconds: 13,
              formUrl: 'https://dev.us17.list-manage.com/subscribe/post?u=5db658017fc3fb83c8ab5ff63&amp;id=c4ad1325c9',
              formHiddenField: 'b_5db658017fc3fb83c8ab5ff63_c4ad1325c9'
            }
          },
          socialMedia: {
            instagram: 'https://instagram.com/coffeebytes.dev',
            twitter: 'https://twitter.com/hello_wired',
            linkedin: 'https://linkedin.com/in/eduardomzepeda',
            codewars: 'https://www.codewars.com/users/EduardoZepeda',
            website: 'https://eduardozepeda.dev'
          }
        }
      },
      {
        name: '@frontity/wp-source',
        state: {
          source: {
            url: 'https://coffeebytes.dev'
          }
        }
      },
      {
        name: '@frontity/google-analytics',
        state: {
          googleAnalytics: {
            trackingId: 'UA-112824408-2',
            id: 'UA-112824408-2'
          }
        }
      },
      '@frontity/tiny-router',
      '@frontity/html2react',
      '@frontity/yoast'
    ]
  }
]

export default settings
