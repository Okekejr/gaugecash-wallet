import { IRouteGroup } from "./IRoute"
import { socialsList } from "../socialsList"
import { AiOutlineYoutube } from "react-icons/ai"

export const ourspace: IRouteGroup = {
  title: "Tools",
  routes: [
    {
      id: "user_guide-nav-item",
      url: "https://youtube.com/playlist?list=PLZWguVRAz5geIF-0ULHRl5DtrwQECf_Qd",
      title: "User Guide",
      icon: <AiOutlineYoutube size="1.3rem" />,
      isExternal: true,
    },
    {
      id: "telegram-nav-item",
      url: socialsList.telegram.url,
      title: "Support",
      isExternal: true,
    },
    {
      id: "chart-nav-item",
      url: "/chart",
      title: "Charts",
      isExternal: true,
    },
  ],
}
