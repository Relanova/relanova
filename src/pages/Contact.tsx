import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const serviceOptions = [
  "B — Business Focus",
  "R — Relevantie & Realiteit",
  "I — Identiteit & Inzicht",
  "D — Design & Richting",
  "G — Groei & Partnerships",
  "E — Expansie & Evaluatie",
  "Volledig BRIDGE-traject",
  "Ik weet het nog niet",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Contact</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
              Laten we kennismaken
            </h1>
            <p className="text-muted-foreground font-sans text-lg">
              Boek een gratis 15-minuten strategiegesprek of stuur me direct een bericht.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border space-y-5">
                <h3 className="font-serif font-bold text-foreground text-lg">Direct Contact</h3>
                <a href="mailto:monia@mbtconsult.be" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-sans text-sm group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  monia@mbtconsult.be
                </a>
                <a href="tel:+32488285886" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-sans text-sm group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  +32 488 285 886
                </a>
                <a
                  href="https://wa.me/32488285886?text=Hallo%20Monia%2C%20ik%20heb%20interesse%20in%20een%20gratis%20gesprek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-sans text-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                  </div>
                  WhatsApp Chat
                </a>
                <div className="flex items-center gap-3 text-muted-foreground font-sans text-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  België (Remote & On-site)
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-secondary" />
                  <h4 className="font-serif font-semibold text-primary-foreground text-sm">Reactietijd</h4>
                </div>
                <p className="text-primary-foreground/70 text-sm font-sans">
                  We antwoorden binnen 24 uur op elk bericht. Voor dringende zaken,
                  bel of WhatsApp direct.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card rounded-xl p-10 border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2">Bedankt voor uw bericht!</h3>
                  <p className="text-muted-foreground font-sans">
                    Ik neem binnen 24 uur contact met u op. Voor directe hulp,
                    bel of WhatsApp me op +32 488 285 886.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border border-border space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">Naam *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                        placeholder="Uw volledige naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                        placeholder="naam@bedrijf.be"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">Telefoon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                        placeholder="+32 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">Bedrijf</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                        placeholder="Bedrijfsnaam"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">Dienst Interesse</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                    >
                      <option value="">Selecteer een dienst...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">Bericht *</label>
                    <textarea
                      required
                      minLength={50}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary resize-y"
                      placeholder="Vertel me over uw uitdaging of vraag (min. 50 tekens)"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      className="mt-1 accent-secondary"
                      id="privacy"
                    />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground font-sans">
                      Ik ga akkoord met het privacybeleid en geef toestemming voor verwerking van mijn gegevens conform GDPR. *
                    </label>
                  </div>
                  <Button variant="navy" size="lg" type="submit" className="w-full gap-2">
                    Bericht Versturen <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
