import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import prismProcessor from "./processors/prism";
import exitIntentCookies from "./utils/cookie-handler";
import searchByRelevanceHandler from "./handlers/searchByRelevanceHandler";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      lang: "es",
      menu: [],
      searchQuery: "",
      showMailChimpForm: false,
      isSearchBarOpen: false,
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({state, libraries}) => {
        libraries.source.handlers.push({
          name: "search by relevance",
          priority: 10,
          pattern: "RegExp:(\\?|&)s=\\w+",
          func: searchByRelevanceHandler({
            type: "post",
            endpoint: "posts",
          }),
      })
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
        state.theme.isSearchBarOpen = false;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      toggleSearchBar: ({ state }) => event => {
          event.persist();
          if(event.target.type!=="submit" && event.target.id!=="search"){
            state.theme.isSearchBarOpen = !state.theme.isSearchBarOpen;
          }
      },
      setSearchQuery: ({ state }) => event => {
        state.theme.searchQuery = event.target.value;
      },
      closeMailChimpForm: ({ state }) => event => {
        event.preventDefault();
        state.theme.showMailChimpForm = false;
      },
      openMailChimpForm: ({ state }) => event => {
        if(!exitIntentCookies.getCookie("mailChimpNewsletterShown")){
          state.theme.showMailChimpForm = true;
          exitIntentCookies.setCookie("mailChimpNewsletterShown", true, 30);
        }
      },
      enableAnalytics: ({ state }) => {
              state.analytics.pageviews.googleAnalytics = true
              state.googleAnalytics.trackingId = state.googleAnalytics.id
            },
      toggleAnalytics: ({state}) => {
        state.analytics.pageviews.googleAnalytics = !state.analytics.pageviews.googleAnalytics
      },
      processCookieConsent: ({state, actions}) => {
       if(state.analytics.pageviews.googleAnalytics){
         actions.theme.enableAnalytics()
       }else{
         exitIntentCookies.setCookie("CookieConsent", false, 30)
       }
      },
      searchQuery: ({ state, actions }) => event => {
        event.preventDefault();
        if(state.theme.searchQuery){
          actions.router.set("?s=" + state.theme.searchQuery);
          state.theme.searchQuery = "";
          state.theme.isMobileMenuOpen = false;
          state.theme.isSearchBarOpen = false;
        }
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link, prismProcessor],
    },
  },
};

export default marsTheme;
