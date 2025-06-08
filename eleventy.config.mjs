import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("icon.svg");
  eleventyConfig.addPlugin(HtmlBasePlugin);
}

export const config = {
  pathPrefix: "/exegesis/",
};
