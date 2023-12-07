const blogPluginExports = require("@docusaurus/plugin-content-blog");

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginOptions) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginOptions);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (data) {
      const { content, actions } = data;

      // Get the 5 latest blog posts
      const recentPostsLimit = 3;
      const allBlogPosts = content.blogPosts;
      const recentPosts = [...content.blogPosts].splice(0, recentPostsLimit);

      const postsJsonPath = await actions.createData(
        "recentPosts.json",
        JSON.stringify(recentPosts)
      );

      actions.addRoute({
        path: "/",
        component: "@site/src/components/Home/index.js",
        modules: {
          // propName -> JSON file path
          recentPosts: postsJsonPath,
        },
        exact: true,
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded(data);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
