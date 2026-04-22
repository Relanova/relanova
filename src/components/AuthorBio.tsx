import { Linkedin, ShieldCheck } from "lucide-react";
import authorPhoto from "@/assets/monia-author.jpg";

const AuthorBio = () => {
  const verifiedDate = new Date().toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <aside
      className="mt-12 bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start"
      aria-label="Over de auteur"
    >
      <img
        src={authorPhoto}
        alt="Monia Ben Tahar — Ecosystem Architect bij Relanova"
        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shrink-0 border-2 border-secondary/30"
        width={112}
        height={112}
        loading="lazy"
      />
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest text-secondary font-semibold font-sans mb-1">
          Over de auteur
        </p>
        <h3 className="font-serif font-bold text-xl text-foreground mb-1">
          Monia Ben Tahar
        </h3>
        <p className="text-sm text-muted-foreground font-sans mb-3">
          Ecosystem Architect & oprichter van Relanova · 10+ jaar ervaring in
          strategische bedrijfsontwikkeling, positionering en partnerships ·
          Bedenker van de BRIDGE Method™
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-sans">
          <a
            href="https://www.linkedin.com/in/moniabentahar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-secondary hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn profiel
          </a>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            Laatst geverifieerd op {verifiedDate}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default AuthorBio;
