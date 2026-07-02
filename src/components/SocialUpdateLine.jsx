import SocialLinkButton from "./SocialLinkButton";
import { business } from "../data/business";

export default function SocialUpdateLine({ className = "" }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <p className="text-sm font-semibold leading-6 text-inherit">
        Follow for updated menus, images, and specials.
      </p>
      <div className="flex flex-wrap gap-2">
        <SocialLinkButton
          href={business.social.instagram}
          label="Instagram"
          logo="Instagram_logo.png"
          size="compact"
        />
        <SocialLinkButton
          href={business.social.facebook}
          label="Facebook"
          logo="Facebook_logo.png"
          size="compact"
        />
      </div>
    </div>
  );
}
