import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { Quote } from "lucide-react";

const recommendations = [
  {
    quote:
      "Monia is een getalenteerde professional met een opmerkelijk vermogen om samen te werken. Haar sociale vaardigheden zijn van onschatbare waarde gebleken bij de realisatie van complexe marketing en sponsoring projecten. Ze blinkt uit in het opbouwen van sterke relaties met partners / leveranciers en ze is in staat om mensen van diverse achtergronden samen te brengen om gemeenschappelijke doelen te bereiken. Ze is dan ook empathisch, geduldig en luistert actief naar de standpunten van anderen, wat resulteert in een cultuur van openheid en samenwerking. Haar diplomatieke aanpak en vermogen om conflicten op te lossen hebben mijn team geholpen om soepel te functioneren, zelfs in uitdagende situaties.",
    name: "Nico Ruell",
    role: "Founder at BUTIK agency",
  },
  {
    quote:
      "Monia denkt heel oplossingsgericht en is steeds vlot bereikbaar om dingen te overleggen. Als people manager stuurt ze haar team aan en legt ze de lat hoog voor zichzelf. Haar aanpak getuigt van veel inzichten en ze gaat resoluut voor duurzame lange termijn oplossingen. Ze investeert bijzonder veel in haar netwerk waardoor telkens weer nieuwe opportuniteiten opborrelen. Ze schuwt ook de operationele taken niet en helpt waar ze kan.",
    name: "Dirk Hermans",
    role: "Partner at Deloitte Accountancy",
  },
  {
    quote:
      "I highly recommend Monia for anyone seeking a seasoned professional in sponsorship and marketing. Monia's extensive expertise in these areas is truly impressive, and she has a remarkable talent for building networks and connecting people. I've witnessed firsthand her ability to foster mutually beneficial relationships and facilitate impactful collaborations. With Monia, you can expect nothing short of excellence in navigating the complexities of sponsorship and marketing, coupled with a genuine passion for bringing individuals together to achieve shared goals.",
    name: "Manu Leroy",
    role: "Director Marketing & Communication at Royal Belgian FA",
  },
  {
    quote:
      "Ik had het genoegen meerdere jaren met Monia te kunnen samenwerken in het kader van onze partnershiprelatie met de Nationale Loterij. Ik heb Monia altijd ervaren als een empathische, gedreven en enthousiaste persoonlijkheid die met grote transparantie en professionalisme steeds zoekt naar de meest optimale samenwerking met haar partners. Monia is ook altijd bereid tot het zoeken van constructieve oplossingen, maar houdt daarbij de opgelegde objectieven en bedrijfsdoelstellingen nauwlettend in de gaten. Kortom een zeer fijn persoon om mee samen te werken.",
    name: "Chris Bergs",
    role: "Sportpaleisgroep",
  },
];

const stats = [
  { value: "15+", label: "jaar ervaring" },
  { value: "40+", label: "LinkedIn-aanbevelingen" },
];

const Cases = () => {
  return (
    <Layout>
      <SEO
        title="Cases & resultaten | Relanova"
        description="Echte verhalen. Meetbare impact. Aanbevelingen van partners en opdrachtgevers over de samenwerking met Monia Ben Tahar."
        path="/cases"
      />

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Cases &amp; resultaten
          </h1>
          <p className="text-muted-foreground text-lg font-sans mb-2">
            Echte verhalen. Meetbare impact.
          </p>
          <p className="text-sm font-sans" style={{ color: "#245163" }}>
            Onderstaande quotes zijn publieke aanbevelingen op LinkedIn.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {recommendations.map((r) => (
              <figure
                key={r.name}
                className="bg-card rounded-xl p-6 md:p-7 border border-border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="w-8 h-8 mb-4 shrink-0" style={{ color: "#245163" }} strokeWidth={1.5} />
                <blockquote className="text-foreground font-sans text-sm leading-relaxed mb-5 flex-1">
                  {r.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <p className="font-serif font-semibold text-foreground">{r.name}</p>
                  <p className="text-muted-foreground font-sans text-sm">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mt-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold" style={{ color: "#245163" }}>
                  {s.value}
                </p>
                <p className="text-muted-foreground font-sans text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Cases;
