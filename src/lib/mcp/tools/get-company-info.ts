import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  name: "Relanova",
  founder: "Monia Ben Tahar",
  role: "Ecosystem Architect",
  location: "Sint-Baafs-Vijve, België",
  email: "monia@mbtconsult.be",
  phone: "+32 488 285 886",
  website: "https://relanova.be",
  languages: ["Nederlands (NL-BE)", "Engels", "Frans"],
  focus:
    "Strategisch consulting voor KMO's en scale-ups: strategie, business development, marketing, communicatie en partnerships.",
  methodology: {
    name: "BRIDGE",
    tagline: "6-layer strategic framework",
    layers: [
      { letter: "B", title: "Business Focus", description: "Strategie & ambitie" },
      { letter: "R", title: "Relevantie & Realiteit", description: "Marktanalyse" },
      { letter: "I", title: "Identiteit & Inzicht", description: "Positionering" },
      { letter: "D", title: "Design & Richting", description: "Strategische planning" },
      { letter: "G", title: "Groei & Partnerships", description: "Business development" },
      { letter: "E", title: "Expansie & Evaluatie", description: "Schaalbaar maken" },
    ],
  },
};

export default defineTool({
  name: "get_company_info",
  title: "Get Relanova info",
  description: "Returns public information about Relanova: contact, focus, and the BRIDGE methodology.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO, null, 2) }],
    structuredContent: INFO,
  }),
});
