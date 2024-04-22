export class Footer {
  networksList: NetworksLinks;
  footerList: FooterList[];
}

export class NetworksLinks {
  facebook: string;
  instagram: string;
}

export class FooterList {
  title: string;
  active?: boolean;
  submenu: FooterListItem[];
}

export class FooterListItem {
  type: string;
  subtitle: string;
  url?: string;
  icon?: string;
  text?: string;
  href?: string;
}
