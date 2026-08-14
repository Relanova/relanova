import telIcon from "@/assets/icons/Tel.png.asset.json";
import mailIcon from "@/assets/icons/Mail.png.asset.json";
import locationIcon from "@/assets/icons/Location.png.asset.json";
import webIcon from "@/assets/icons/Web.png.asset.json";

const icons = {
  tel: telIcon.url,
  mail: mailIcon.url,
  location: locationIcon.url,
  web: webIcon.url,
} as const;

interface BrandIconProps {
  name: keyof typeof icons;
  className?: string;
  alt?: string;
}

const BrandIcon = ({ name, className = "w-4 h-4", alt = "" }: BrandIconProps) => (
  <img src={icons[name]} alt={alt} aria-hidden={alt ? undefined : true} className={`object-contain ${className}`} />
);

export default BrandIcon;
