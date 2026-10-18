import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = "https://www.relanova.be";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5bd42d3c-b915-41af-be8a-ee9896df585f";

const SEO = ({ title, description, path, ogType = "website", image, jsonLd }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : []) : [];

  // De vaste metadata uit index.html blijft in de meegeleverde HTML staan als vangnet
  // voor scrapers zonder JavaScript, maar in een browser moet de pagina-eigen tekst winnen.
  useEffect(() => {
    const statisch =
      'meta[name="description"]:not([data-rh]), meta[property="og:description"]:not([data-rh]), meta[name="twitter:description"]:not([data-rh])';
    document.querySelectorAll(statisch).forEach((el) => el.remove());
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
