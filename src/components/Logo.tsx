import { Link } from "react-router-dom";

const LOGO_SRC = "/favicon.png";

interface LogoProps {
  /** "dark" = logo op lichte achtergrond (petrol icoon + donkere tekst).
   *  "light" = logo op petrol/gradient achtergrond (wit icoon + witte tekst). */
  variant?: "dark" | "light";
  /** Toon woordmerk naast icoon. */
  showWordmark?: boolean;
  /** Toon baseline "Human touch in a connected world". */
  showBaseline?: boolean;
  className?: string;
}

const Logo = ({
  variant = "dark",
  showWordmark = true,
  showBaseline = false,
  className = "",
}: LogoProps) => {
  const isLight = variant === "light";
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`} aria-label="Relanova - Home">
      <img
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        className={`w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-500 group-hover:scale-105 ${
          isLight ? "brightness-0 invert" : ""
        }`}
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-sans font-semibold text-[1.05rem] md:text-[1.15rem] tracking-[0.02em] ${
              isLight ? "text-white" : "text-foreground"
            }`}
          >
            Relanova
          </span>
          {showBaseline && (
            <span
              className={`text-[9px] md:text-[10px] uppercase mt-1 ${
                isLight ? "text-white/70" : "text-muted-foreground"
              }`}
              style={{ letterSpacing: "0.28em" }}
            >
              Human touch in a connected world
            </span>
          )}
        </div>
      )}
    </Link>
  );
};

export default Logo;
