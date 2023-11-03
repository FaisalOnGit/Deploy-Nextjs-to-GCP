import LinkedInLogo from "@drawables/linkedin";
import SocialWidget from "@widgets/social";

export default function LinkedInWidget() {
  return (
    <SocialWidget
      linkBgColor="bg-social-linkedin"
      linkRingColor="hover:ring-social-linkedin/[0.25]"
      socialUrl="https://www.linkedin.com/in/faisal-oktovian-1a38a3180/"
    >
      <LinkedInLogo width={96} height={96} className="fill-social-linkedin" />
    </SocialWidget>
  );
}
