import { defineMcp, auth } from "@lovable.dev/mcp-js";
import listNewsPosts from "./tools/list-news-posts";
import getNewsPost from "./tools/get-news-post";
import getCompanyInfo from "./tools/get-company-info";

const SUPABASE_URL = "https://qhfgdmbqwpdvdclqsbbd.supabase.co";

export default defineMcp({
  name: "relanova-mcp",
  title: "Relanova MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Relanova consulting website. Use `get_company_info` for contact, focus and the BRIDGE methodology; `list_news_posts` to browse published news/blog posts; `get_news_post` to read a single post by slug.",
  // Require an OAuth bearer token minted by the project's Supabase auth issuer.
  // Any signed-in user of Relanova can call the tools; unauthenticated callers are rejected.
  auth: auth.oauth.issuer({
    issuer: `${SUPABASE_URL}/auth/v1`,
    jwksUri: `${SUPABASE_URL}/auth/v1/.well-known/jwks.json`,
    acceptedAudiences: ["authenticated"],
    resourceName: "Relanova MCP",
  }),
  tools: [getCompanyInfo, listNewsPosts, getNewsPost],
});
