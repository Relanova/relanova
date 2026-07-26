import { defineMcp } from "@lovable.dev/mcp-js";
import listNewsPosts from "./tools/list-news-posts";
import getNewsPost from "./tools/get-news-post";
import getCompanyInfo from "./tools/get-company-info";

export default defineMcp({
  name: "relanova-mcp",
  title: "Relanova MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the Relanova consulting website. Use `get_company_info` for contact, focus and the BRIDGE methodology; `list_news_posts` to browse published news/blog posts; `get_news_post` to read a single post by slug.",
  tools: [getCompanyInfo, listNewsPosts, getNewsPost],
});
