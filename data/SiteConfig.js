const config = {
  // Site info
  siteTitle: "CrumbsForever", // Site title.
  siteTitleShort: "Crumbs Forever", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "CrumbsForever", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS Blog Template for blogging purpose.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  // siteFBAppID: "399626517562189", // FB Application ID for using app insights
  googleAnalyticsID: "G-0V86D8ME07", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disableComments: true,
  disqusShortname: "crumbs-forever", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: false,
  homeHasThumbnail: true,
  homeHeader: "Home",
  homeMoreArticles: "More articles",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent:
    "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for blog
  pathPrefixBlog: "/blog", // Prefix path for blog
  blogHeader: "Blog", // use in header of category-template page
  blogHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Complete JavaScript",
      url: "https://completejavascript.com/",
    },
    {
      label: "Lam Pham Blog",
      url: "https://phamvanlam.com/",
    },
    {
      label: "Lam Pham Portfolio",
      url: "http://about.phamvanlam.com/",
    },
  ],
  // Use for user info
  userName: "CrumbsForever", // Username to display in the author segment.
  userEmail: "crumbsforever@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "CrumbsForever", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "United States of America", // User location to display in the author segment.
  // userAvatar:
  //   "https://www.gravatar.com/avatar/42fd3d526fde1ef76d5002e4ebd303e9.jpg?s=300", // User avatar to display in the author segment.
  // userDescription:
  //   "Software Engineer, Web Developer, JavaScript Lover & Blogger @completejavascript.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:crumbsforever@gmail.com",
      iconClassName: "far envelope",
    },
    {
      label: "Website",
      url: "https://crumbsforever.com/",
      iconClassName: "fas globe",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CmpltJavaScript",
      iconClassName: "fab twitter",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/completejavascript/",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/completejavascript/",
      iconClassName: "fab linkedin-in",
    },
  ],
  // Use for navigation
  navTitle: "GB Template",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    // {
    //   label: "Facebook",
    //   url: "https://www.facebook.com/completejavascript/",
    //   iconClassName: "fab facebook-f",
    // },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/CmpltJavaScript",
    //   iconClassName: "fab twitter",
    // },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
    { label: "Sitemap", url: "/sitemap.xml" },
  ],
  copyright:
    "Copyright © 2023 Crumbs Forever. Made with love ♥ in the USA.",
  // Use for manifest
  themeColor: "#f8f822", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
