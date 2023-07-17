const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src/assets");
    
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL");
    });
    
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });    
    
    return {
        dir: {
            input: "src", 
            output: "public"
        }
    };
}