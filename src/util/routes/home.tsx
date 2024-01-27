import { AiOutlineYoutube } from "react-icons/ai"
import { IRouteGroup } from "./IRoute"

export const home: IRouteGroup = {
  title: "Insights",
  routes: [
    {
      id: "about-nav-item",
      url: "/about",
      title: "About",
      isExternal: false,
    },
    {
      id: "roadmap-nav-item",
      url: "/",
      title: "Roadmap",
      isExternal: false,
    },
    {
      id: "whitepaper-nav-item",
      url: "https://gaugecash.gitbook.io/gaugecash/whitepaper/gaugecash-a-decentralized-monetary-system",
      title: "Whitepaper",
      isExternal: true,
    },
    {
      id: "docs-nav-item",
      url: "https://gaugecash.gitbook.io/gaugecash/",
      title: "Docs",
      isExternal: true,
    },
    {
      id: "lectures-nav-item",
      url: "https://youtube.com/playlist?list=PLZWguVRAz5gfTdzx9siGAQCpRzezUeU4M",
      title: "Lectures",
      icon: <AiOutlineYoutube size="1.3rem" />,
      isExternal: true,
    },
  ],
}
