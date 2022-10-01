import discordImgPath from "../images/discord.svg";
import steamImgPath from "../images/steam.svg";
import donateImgPath from "../images/donate.svg";

export interface ILink {
  path: string;
  name: string;
  href: string;
}

const headerLinks: ILink[] = [
  {
    path: discordImgPath,
    name: "discord",
    href: "https://discord.gg/9uDwwAZs",
  },
  {
    path: steamImgPath,
    name: "steam group",
    href: "https://steamcommunity.com/groups/MyFirstHnS",
  },
  {
    path: donateImgPath,
    name: "support us",
    href: "https://discord.gg/9uDwwAZs",
  },
];

export default headerLinks;
