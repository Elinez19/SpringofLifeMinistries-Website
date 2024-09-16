import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Our History",
        path: "/history",
        newTab: false,
      },
      {
        id: 42,
        title: "Our Vision",
        path: "/vission",
        newTab: false,
      },
      {
        id: 44,
        title: "Board of Directors",
        path: "/board",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Programmes",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Mission Institute",
        path: "/course",
        newTab: false,
      },
      {
        id: 42,
        title: "Leadership School",
        path: "/course",
        newTab: false,
      },
      {
        id: 43,
        title: "Youth Empowerment Nigeria",
        path: "/course",
        newTab: false,
      },
      {
        id: 44,
        title: "Youth Empowerment Canada",
        path: "/course",
        newTab: false,
      },
      {
        id: 45,
        title: "Youth Empowerment UK",
        path: "/course",
        newTab: false,
      },
      {
        id: 48,
        title: "Bible Study",
        path: "/course",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Campus",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Community Engagement",
        path: "/course",
        newTab: false,
      },
      {
        id: 42,
        title: "Mission Outreach",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Mission Reports",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Fellowship Hour",
        path: "/blog",
        newTab: false,
      },
      {
        id: 45,
        title: "Breakfast Fellowship",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Bible study",
        path: "/signin",
        newTab: false,
      },
      // {
      //   id: 47,
      //   title: "Sign Up",
      //   path: "/signup",
      //   newTab: false,
      // },

      // {
      //   id: 48,
      //   title: "sign in ",
      //   path: "/course",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Bible Q & A",
        path: "/blog",
        newTab: false,
      },
      {
        id: 42,
        title: "Mission Outreach",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "E-Library",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Newsletter",
        path: "/signup",
        newTab: false,
      },
      {
        id: 45,
        title: "Upcoming Events",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Gallery",
        path: "/blog",
        newTab: false,
      },
      {
        id: 47,
        title: "Sermons",
        path: "/signup",
        newTab: false,
      },

      {
        id: 48,
        title: "Bible Guides",
        path: "/blog",
        newTab: false,
      },
    ],
  },
];
export default menuData;
