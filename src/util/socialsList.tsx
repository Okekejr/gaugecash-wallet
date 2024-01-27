import { Telegram } from "@/ui/components/icons/Telegram";
import { Twitter } from "@/ui/components/icons/Twitter";

export interface Social {
  name: string;
  url: string;
  icon?: React.ReactElement;
}

export interface Socials {
  [key: string]: Social;
}

export const socialsList: Socials = {
  telegram: {
    name: "Telegram",
    url: "https://t.me/GAUGECASHwallet",
    icon: <Telegram />,
  },
  twitter: {
    name: "Twitter",
    url: "https://twitter.com/GaugeCash",
    icon: <Twitter />,
  },
  linkedin: {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/gaugecash/",
  },
  github: {
    name: "Github",
    url: "https://github.com/gaugecash",
  },
  youtube: {
    name: "Youtube",
    url: "https://www.youtube.com/@gaugecash",
  },
};
