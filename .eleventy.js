const embeds = require("eleventy-plugin-embed-everything");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(embeds);
    eleventyConfig.addPlugin(syntaxHighlight);
    
    eleventyConfig.addWatchTarget('_site/assets/*.css');
    eleventyConfig.setBrowserSyncConfig({
    files: ['_site/assets/*.css']
    });
    
    return { 
        dir: { input: "src" },
        pathPrefix: "/11ty-hello-horse/",
        jsDataFileSuffix: ".11tydata" 
    };
}