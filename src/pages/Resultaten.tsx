import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { Quote } from "lucide-react";

type Recommendation = {
  quote: string;
  name: string;
  role: string;
};

const featured: Recommendation[] = [
  {
    quote:
      "Monia is een getalenteerde professional met een opmerkelijk vermogen om samen te werken. Haar sociale vaardigheden zijn van onschatbare waarde gebleken bij de realisatie van complexe marketing en sponsoring projecten. Ze blinkt uit in het opbouwen van sterke relaties met partners / leveranciers en ze is in staat om mensen van diverse achtergronden samen te brengen om gemeenschappelijke doelen te bereiken. Ze is dan ook empathisch, geduldig en luistert actief naar de standpunten van anderen, wat resulteert in een cultuur van openheid en samenwerking. Haar diplomatieke aanpak en vermogen om conflicten op te lossen hebben mijn team geholpen om soepel te functioneren, zelfs in uitdagende situaties.",
    name: "Nico Ruell",
    role: "Founder at BUTIK agency",
  },
  {
    quote:
      "I highly recommend Monia for anyone seeking a seasoned professional in sponsorship and marketing. Monia's extensive expertise in these areas is truly impressive, and she has a remarkable talent for building networks and connecting people. I've witnessed firsthand her ability to foster mutually beneficial relationships and facilitate impactful collaborations. With Monia, you can expect nothing short of excellence in navigating the complexities of sponsorship and marketing, coupled with a genuine passion for bringing individuals together to achieve shared goals.",
    name: "Manu Leroy",
    role: "Director Marketing & Communication at Royal Belgian FA",
  },
  {
    quote:
      "Ik ken Monia al jaren binnen het Belgische sponsorshipmilieu. Monia is een uitstekende people manager met een uniek vermogen om een omgeving te creëren waarin teamleden worden aangemoedigd om hun eigen initiatief te nemen. Ze is zeer toegewijd aan haar werk en een ware experte in het opbouwen van relaties. Ze weet effectief te communiceren met verschillende belanghebbenden en heeft het talent om duidelijkheid te bieden en richting te geven aan haar team. De wensen van het hoger management worden correct omgezet in concrete doelstellingen en strategieen, waardoor ze een cruciale schakel is tussen het strategische beleid en de dagelijkse operaties. Ik kan Monia van harte aanbevelen voor elke functie waar leiderschap, kennis, betrokkenheid en effectieve teamwerking van essentieel belang zijn.",
    name: "Maaike Bauwens",
    role: "Sponsoring & partnerships - Nationale Loterij",
  },
  {
    quote:
      "Ik had het genoegen meerdere jaren met Monia te kunnen samenwerken in het kader van onze partnershiprelatie met de Nationale Loterij. Ik heb Monia altijd ervaren als een empathische, gedreven en enthousiaste persoonlijkheid die met grote transparantie en professionalisme steeds zoekt naar de meest optimale samenwerking met haar partners. Monia is ook altijd bereid tot het zoeken van constructieve oplossingen, maar houdt daarbij de opgelegde objectieven en bedrijfsdoelstellingen nauwlettend in de gaten. Kortom een zeer fijn persoon om mee samen te werken.",
    name: "Chris Bergs",
    role: "Sportpaleisgroep",
  },
];

// Overige LinkedIn-aanbevelingen (compact grid)
const more: Recommendation[] = [
  {
    quote:
      "Mijn naam is Dirk Hermans, senior Partner bij Deloitte. Ik heb Monia leren kennen als professional in sponsorship en marketing waar zij mede de brug vormde tussen de belangen van haar werkgever en onze dienstverlening. Monia denkt heel oplossingsgericht en is steeds vlot bereikbaar om dingen te overleggen. Als people manager stuurt ze haar team aan en legt ze de lat hoog voor zichzelf. Haar aanpak getuigt van veel inzichten en ze gaat resoluut voor duurzame lange termijn oplossingen. Ze investeert bijzonder veel in haar netwerk waardoor telkens weer nieuwe opportuniteiten opborrelen. Ze schuwt ook de operationele taken niet en helpt waar ze kan.",
    name: "Dirk Hermans",
    role: "Partner at Deloitte Accountancy",
  },
  {
    quote:
      "Monia heeft ruime ervaring binnen sponsoring/marketing, is een competente teamplayer die over sterke communicatieve vaardigheden beschikt en het vermogen heeft om ideeen duidelijk over te brengen.",
    name: "Veerle Buyens",
    role: "Insurance & Fleet Management at Nationale Loterij",
  },
  {
    quote:
      "Monia has a broad experience in marketing and brand partnership activation. She is passionate by her job, motivated and a strong team-player.",
    name: "Michel Moriaux",
    role: "Head of Marketing at Brussels Airlines",
  },
  {
    quote:
      "Monia is zonder meer een autoriteit op het vlak van Sport en Communicatie. Als contactpersoon bij de Nationale Loterij engageerde Monia zich ook in de uitbouw van de Belgische en Vlaamse Wielersport zelf. Hands on kon ze verschillende organisatoren en ploegen verder op de goede weg zetten. De kennis en ervaring die ze opdeed in de verschillende deelgebieden en sporten zijn hierbij een absolute troef.",
    name: "Tom Van Damme",
    role: "President Belgian Cycling",
  },
  {
    quote:
      "Monia is een echte merk-ambassadrice. Ze weet als geen ander hoe een merk ten volle tot zijn recht te laten komen door het opzetten van doelgerichte acties zoals sponsorship, charitatieve projecten, communicatie-mix en brand activation. Monia werkt resultaatgericht voor \"haar\" merk en is heel toegewijd.",
    name: "Christophe Impens, OLY",
    role: "Director Cycling Golazo - Director Partnerships & Business Development",
  },
  {
    quote:
      "I had the pleasure to work multiple years together with Monia; who is for me an exceptional Event- and Marketing Manager. Her strategic approach, attention to detail, and creative flair ensure seamless and memorable events. A true professional to work with.",
    name: "Janni Van Overstraeten",
    role: "Sales Manager North Telenet Business",
  },
  {
    quote:
      "Heb het genoegen gehad om met Monia samen te werken als team lead sponsoring. Haar toewijding voor het team en de Nationale Loterij waren steeds opmerkelijk. Op events viel steeds op hoe uitgebreid en kwalitatief het netwerk wel is waarover ze beschikt. En hoe warm en hartelijk die connecties steeds zijn.",
    name: "Laurens Lories",
    role: "Head of De Nationale Loterij Club",
  },
  {
    quote:
      "Monia is een kracht en een super teamplayer. Nauwkeurig en hard werken maken deel uit van haar personaliteit, samen met haar ervaring en kennis. Super collega!",
    name: "Thierry De Ridder",
    role: "Working together for tomorrow",
  },
  {
    quote:
      "I highly recommend Monia! I have had the pleasure of knowing Monia in various positions and have especially worked intensively with her in her position as sponsorship manager at the National Lottery. She always had a clear vision about the specific objectives and KPIs to be achieved and was able to translate this national vision very well to the specific clubs, each with their own values and standards. A word is a word and her feedback will always be honest but respectful. Ownership and commitment are in her DNA.",
    name: "Ariane De Troch",
    role: "Customer Excellence Manager - Matexi",
  },
  {
    quote:
      "If you are looking for a highly skilled and motivated marketing and communication professional with loads of experience, look no further. I had the pleasure of working on numerous projects in the field of sponsorship and marketing with Monia. Strategically well thought out, always realistic and with attention to detail and an unrelenting work ethic. A good communicator on a personal level with a strong vision, combined with a highly empathic ability, working from a sense of trust will always be part of any collaboration with Monia.",
    name: "Wim Van de Keere",
    role: "General Manager at BNXT League",
  },
  {
    quote:
      "As Head of Sponsorship relations Monia was a great support to the efforts of the Lotto Volleybal League to further professionalize the operation of the League. She understood our needs and challenges and assisted us in a very supportive way. Great professional in all matters relating to sponsorship, branding, PR and communication.",
    name: "Luc Haegemans",
    role: "Chairman & Board Director",
  },
  {
    quote:
      "I loved working with Monia. She's a very talented colleague: she is a networking genius, she organises any event with flair and with her solid experience in sponsoring and marketing she's a trusted guide to accompany you on your journey for more effective visibility, promotion and sales. Next to her skills, she is also a very lovely person to have around: always with a kind word and smile, ready to help you in any way she can.",
    name: "Martine Gorissen",
    role: "LinkedIn-aanbeveling",
  },
  {
    quote:
      "I know Monia as a great professional. She is driven by real & positive values. Her professionalism is an asset for any organisation who employs her. Loyalty & kindness are helping her to find solutions for any problem. Monia also knows how to connect partners & brands with respect to the mission of the different parties. Monia would be an added value to any organisation.",
    name: "David Steegen",
    role: "Communication & P.R. - Reputation Management",
  },
  {
    quote:
      "Ik heb jaren samen gewerkt met Monia en dit was altijd op een zeer sympathieke en gemotiveerde manier. Monia is erg gedreven en heeft de nodige kennis van zaken (en een zeer goed uitgebouwd netwerk) om het beste uit alle evenementen/activiteiten te halen. Het was een plezier om met haar samen te werken, zowel persoonlijk als professioneel, en ze valt dan ook in de categorie 'highly recommended'.",
    name: "Erik van der Kolk",
    role: "Digital Expert - External Corporate Communications",
  },
  {
    quote:
      "Monia heb ik leren kennen als verantwoordelijke van de sponsoring bij BASE en na haar overstap naar de Nationale Loterij zijn we in contact gebleven. Monia is een dynamische en super professionele dame met een jarenlange ervaring in de evenementiele en sponsoringsector evenals in het ontwikkelen van een strategische visie. Monia heeft in al die jaren ook een zeer groot netwerk uitgebouwd en is de ideale persoon om deals met potentiele sponsors te negotieren en events op te zetten.",
    name: "Vincent Drouard",
    role: "Toerisme Oostende",
  },
  {
    quote:
      "Monia is een echte professional met veel vaardigheden en toewijding in haar job. Gedurende onze tijd samen bij 3Suisses, viel Monia op door haar scherp analytisch vermogen en haar aanpak om complexe problemen doelgericht op te lossen. Ze is een echte teamplayer die makkelijk samenwerkt met collega's op alle niveaus en heeft een positieve invloed op de werkomgeving.",
    name: "Myriam Minne",
    role: "Social Media Expert, foodblogger, digital storyteller",
  },
  {
    quote:
      "Ik heb Monia leren kennen als een uiterst gedreven expert in haar vak. Ze werkt zeer nauwkeurig en stopt niet voor ze haar doel heeft bereikt. Als extra troef is Monia een geboren netwerker en bezit ze het talent om sales en marketing te laten blenden. Ze is een absolute teamplayer maar weet haar team bij te sturen waar nodig. Monia brengt een positieve vibe binnen een organisatie en is een absolute meerwaarde voor elk bedrijf!",
    name: "Jean-Pierre Noel",
    role: "CEO van Steenberge & van Hoorebeke Timber",
  },
  {
    quote:
      "Altijd goed samengewerkt met de Nationale Loterij als partner, en Monia had hier een groot aandeel in. Ze beheerste het dossier, ging altijd in overleg en legde de lat hoog om het partnerschap goed in te vullen. Zet daar haar netwerk en inzet naast, en je hebt de perfecte invulling voor een mooie job!",
    name: "Marie De Clerck",
    role: "Freelance marketing- en projectmanager",
  },
  {
    quote:
      "Gedreven marketeer met pak ervaring en sterk netwerk. En een hart voor o.m. sport! Brand activation is her middle name!",
    name: "Jos Verschueren",
    role: "Postgraduate Studies Sports, Cycling & Esports Management",
  },
  {
    quote:
      "Monia is a very good all round marketeer full of passion and drive. A pleasure to have her in your team. She is results oriented and has excellent experience in different fields like FMCG, sponsoring and many other fields.",
    name: "Christine Vuylsteke",
    role: "Commercial Director Northern and Eastern Europe",
  },
  {
    quote:
      "Als leiderschapscoach werken met Monia was, dankzij haar openheid, een dankbare opdracht. Luisteren, afstemmen en het haar team makkelijker maken zijn haar talenten. Naast haar onafgebroken inzet natuurlijk.",
    name: "Hilde Jonckers",
    role: "Expert in Leadership - Personal branding - Business coach",
  },
  {
    quote:
      "We gaan het kort houden. Monia toont altijd passie en spaart tijd noch moeite om haar bedrijf te dienen. Succes!",
    name: "Patrick Orlans",
    role: "Zaakvoerder Orlans Foot",
  },
  {
    quote:
      "Monia was my direct supervisor, she demonstrated her skills in negotiating sponsor deals, executing brand activations, and building valuable networks. Her guidance and expertise significantly contributed to my professional growth, and I truly appreciate the knowledge and insights I gained under her supervision.",
    name: "Lieze Brantz",
    role: "Partnership Management @ Nationale Loterij",
  },
  {
    quote:
      "I've been working with Monia for many years and it was always a pleasure to collaborate on different sponsoring & activation projects. Skilled professional who puts brands & fans first with an eye for detail.",
    name: "Mark Bogaert",
    role: "Marketing & Communications Manager Basketball Belgium & BNXT League",
  },
  {
    quote:
      "I worked with Monia on multiple occasions and find her to be a true professional and highly competent. She is committed to deliver, has an eye for detail, a teamplayer with sound management skills. Monia brings energy and a positive vibe to project delivery. Her vast knowledge in defining marketing and sponsoring strategy is a truly valuable asset.",
    name: "LinkedIn-aanbeveling",
    role: "Partner uit het sponsoring- en marketingnetwerk",
  },
];

const stats = [
  { value: "15+", label: "jaar ervaring" },
  { value: "40+", label: "LinkedIn-aanbevelingen" },
];

const Resultaten = () => {
  return (
    <Layout>
      <SEO
        title="Resultaten | Relanova"
        description="Echte verhalen. Meetbare impact. Aanbevelingen van partners en opdrachtgevers over de samenwerking met Monia Ben Tahar."
        path="/resultaten"
      />

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Resultaten</h1>
          <p className="text-muted-foreground text-lg font-sans mb-2">
            Echte verhalen. Meetbare impact.
          </p>
          <p className="text-sm font-sans" style={{ color: "#245163" }}>
            Onderstaande quotes zijn publieke aanbevelingen op LinkedIn.
          </p>
        </div>
      </section>

      {/* Uitgelicht */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((r) => (
              <figure
                key={r.name}
                className="bg-card rounded-xl p-6 md:p-8 border border-border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="w-8 h-8 mb-4 shrink-0" style={{ color: "#245163" }} strokeWidth={1.5} />
                <blockquote className="text-foreground font-sans text-base leading-relaxed mb-5 flex-1">
                  {r.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-muted-foreground font-sans text-sm">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Overige aanbevelingen - compact */}
      {more.length > 0 && (
        <section className="section-padding pt-0 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: "#245163" }}>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-bold"
              >
                Meer aanbevelingen
              </button>
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {more.map((r) => (
                <figure
                  key={r.name}
                  className="bg-card rounded-lg p-5 border border-border flex flex-col h-full transition-shadow hover:shadow-md"
                >
                  <blockquote className="text-foreground font-sans text-sm leading-relaxed mb-4 flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-border pt-3">
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-muted-foreground font-sans text-xs">{r.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 bg-background">
        <div className="container mx-auto max-w-xl">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#245163" }}>
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

export default Resultaten;
