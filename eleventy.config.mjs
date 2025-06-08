import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPlugin(HtmlBasePlugin);
}

export const config = {
  pathPrefix: "/exegesis/",
};
