const lowers = ["a", "an", "the", "aboard", "about", "abt.", "above", "abreast", "absent", "across", "after", "against", "along", "aloft", "alongside", "amid", "amidst", "mid", "midst", "among", "amongst", "anti", "apropos", "around", "round", "as", "aslant", "astride", "at", "atop", "ontop", "bar", "barring", "before", "B4", "behind", "below", "beneath", "neath", "beside", "besides", "between", "'tween", "beyond", "but", "by", "chez", "circa", "c.", "ca.", "come", "concerning", "contra", "counting", "cum", "despite", "spite", "down", "during", "effective", "ere", "except", "excepting", "excluding", "failing", "following", "for", "from", "in", "including", "inside", "into", "less", "like", "minus", "modulo", "mod", "near", "nearer", "nearest", "next", "notwithstanding", "of", "o'", "off", "offshore", "on", "onto", "opposite", "out", "outside", "over", "o'er", "pace", "past", "pending", "per", "plus", "post", "pre", "pro", "qua", "re", "regarding", "respecting", "sans", "save", "saving", "short", "since", "sub", "than", "through", "thru", "throughout", "thruout", "till", "times", "to", "t'", "touching", "toward", "towards", "under", "underneath", "unlike", "until", "unto", "up", "upon", "versus", "vs.", "v.", "via", "vice", "vis-à-vis", "wanting", "with", "w/", "w.", "c̄", "within", "w/i", "without", "'thout", "w/o", "abroad", "adrift", "aft", "afterward", "afterwards", "ahead", "apart", "ashore", "aside", "away", "back", "backward", "backwards", "beforehand", "downhill", "downstage", "downstairs", "downstream", "downward", "downwards", "downwind", "east", "eastward", "eastwards", "forth", "forward", "forwards", "heavenward", "heavenwards", "hence", "henceforth", "here", "hereby", "herein", "hereof", "hereto", "herewith", "home", "homeward", "homewards", "indoors", "inward", "inwards", "leftward", "leftwards", "north", "northeast", "northward", "northwards", "northwest", "now", "onward", "onwards", "outdoors", "outward", "outwards", "overboard", "overhead", "overland", "overseas", "rightward", "rightwards", "seaward", "seawards", "skywards", "skyward", "south", "southeast", "southwards", "southward", "southwest", "then", "thence", "thenceforth", "there", "thereby", "therein", "thereof", "thereto", "therewith", "together", "underfoot", "underground", "uphill", "upstage", "upstairs", "upstream", "upward", "upwards", "upwind", "west", "westward", "westwards", "when", "whence", "where", "whereby", "wherein", "whereto", "wherewith", "although", "because", "considering", "given", "granted", "if", "lest", "once", "provided", "providing", "seeing", "so", "supposing", "though", "unless", "whenever", "whereas", "wherever", "while", "whilst", "ago", "according to", "as regards", "counter to", "instead of", "owing to", "pertaining to", "at the behest of", "at the expense of", "at the hands of", "at risk of", "at the risk of", "at variance with", "by dint of", "by means of", "by virtue of", "by way of", "for the sake of", "for sake of", "for lack of", "for want of", "from want of", "in accordance with", "in addition to", "in case of", "in charge of", "in compliance with", "in conformity with", "in contact with", "in exchange for", "in favor of", "in front of", "in lieu of", "in light of", "in the light of", "in line with", "in place of", "in point of", "in quest of", "in relation to", "in regard to", "with regard to", "in respect to", "with respect to", "in return for", "in search of", "in step with", "in touch with", "in terms of", "in the name of", "in view of", "on account of", "on behalf of", "on grounds of", "on the grounds of", "on the part of", "on top of", "with a view to", "with the exception of", "à la", "a la", "as soon as", "as well as", "close to", "due to", "far from", "in case", "other than", "prior to", "pursuant to", "regardless of", "subsequent to", "as long as", "as much as", "as far as", "by the time", "in as much as", "inasmuch", "in order to", "in order that", "even", "provide that", "if only", "whether", "whose", "whoever", "why", "how", "or not", "whatever", "what", "both", "and", "or", "not only", "but also", "either", "neither", "nor", "just", "rather", "no sooner", "such", "that", "yet", "is", "it"]

const uppers = ['Id', 'Dfs', 'Bfs', 'Gcd', 'Ccdak'];

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://notes.aboureada.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'images/logo.png',
    logoLink: '/',
    title: "Anas's Digital Garden",
    githubUrl: 'https://github.com/AnasAboureada/Anas-Digital-Garden',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/AnasAboureada" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <i class="fa-brands fa-twitter"></i>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.linkedin.com/in/anasaboureada/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <i class="fa-brands fa-linkedin"></i>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'DigitalGarden',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
    ],
    collapsedNav: [
    ],
    links: [{ text: 'Profile', link: 'https://aboureada.com' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "Notes",
  },
  siteMetadata: {
    title: 'Anas\'s Aboureada Digital Garden',
    description: 'Anas\'s Aboureada study notes, learnings, interests, blog posts, thoughts',
    ogImage: null,
    docsLocation: 'https://github.com/AnasAboureada/Anas-Digital-Garden/tree/main/content',
    favicon: 'images/logo.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Anas\'s Digital Garden',
      short_name: 'DigitalGardenByAnas',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'images/logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
  lowers,
  uppers,
};

module.exports = config;

