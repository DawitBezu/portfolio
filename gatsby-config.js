module.exports = {
  siteMetadata: {
    description: "Personal page of Dawit",
    locale: "en",
    title: "Dawit Bezu | JS Developer",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-blue",
        showThemeLogo: false,
      },
    }
  ],
}
