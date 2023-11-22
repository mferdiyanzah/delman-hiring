import { ISidebarItem } from "./dashboard-layout.interface";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsFillPersonPlusFill,
  BsSearch,
} from "react-icons/bs";

export const sidebarItems: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Registration",
    path: "/register",
    icon: <BsFillPersonPlusFill />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <BsSearch />,
  },
];
