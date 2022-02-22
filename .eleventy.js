const embeds = require("eleventy-plugin-embed-everything");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(embeds);
    eleventyConfig.addWatchTarget('_site/assets/*.css');
    eleventyConfig.setBrowserSyncConfig({
    files: ['_site/assets/*.css']
    });
    
    return { dir: { input: "src" } };
}