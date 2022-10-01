export interface IServerLink {
  name: string;
  href: string;
}

const serverLinks: IServerLink[] = [
  {
    name: "hns pre",
    href: "steam://connect/62.122.213.164:27016",
  },
  {
    name: "training server",
    href: "steam://connect/37.230.162.249:27015",
  },
];

export default serverLinks;
