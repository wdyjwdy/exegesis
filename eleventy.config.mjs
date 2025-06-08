import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("icon.svg");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ breaks: true }).use(MarkdownItGitHubAlerts),
  );
}

export const config = {
  pathPrefix: "/exegesis/",
};
