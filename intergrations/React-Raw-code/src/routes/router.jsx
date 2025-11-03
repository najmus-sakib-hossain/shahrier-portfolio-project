import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Page/Home";
import Mainlayout from "../Layout/Mainlayout";
import Aboutus from "../Pages/Aboutus/Page/Aboutus";
import Books from "../Pages/Books/Page/Books";
import Blogs from "../Pages/Blogs/Page/Blogs";
import Technology from "../Pages/Technology/Page/Technology";
import Entepreneouship from "../Pages/Entepreneourship/Page/Entepreneouship";
import Events from "../Pages/Events/Page/Events";
import SecondaryLayout from "../Layout/SecondaryLayout";
import Contact from "../Pages/Contact/Page/Contact";
import Donation from "../Pages/Donation/Page/Donation";
import DonateDetails from "../Pages/DonateDetails/Page/DonateDetails";
import Videos from "../Pages/Videos/Page/Videos";
import LifeEvent from "../Pages/LifeEvents/Page/LifeEvent";
import AISummitLayout from "../Layout/AISummitLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Mainlayout />,
    children: [
      {
        path: "about-me",
        element: <Aboutus />,
      },
      {
        path: "life-event",
        element: <LifeEvent />,
      },
    ],
  },
  {
    path: "/resource",
    element: <SecondaryLayout />,
    children: [
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "entepreneourship",
        element: <Entepreneouship />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "donation/:id",
        element: <DonateDetails />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/ai-summit",
    element: <AISummitLayout />,
  },
]);

export default router;
