import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getTextColor = () => {
    if (location.pathname === "/") return "text-slate-950";
    if (location.pathname === "/main/about-me") return "text-white";
    if (location.pathname === "/main/life-event") return "text-white";
    if (location.pathname === "/resource/entepreneourship") return "text-white";
    if (location.pathname === "/resource/technology") return "text-white";
    if (location.pathname === "/resource/donation") return "text-white";
    if (location.pathname === "/contact") return "text-white";
    if (location.pathname === "/ai-summit") return "text-white";
    return "text-black";
  };

  const getIconColor = () => {
    if (location.pathname === "/") return "text-slate-950";
    if (location.pathname === "/main/about-me") return "text-white";
    if (location.pathname === "/main/life-event") return "text-white";
    if (location.pathname === "/resource/entepreneourship") return "text-white";
    if (location.pathname === "/resource/technology") return "text-white";
    if (location.pathname === "/resource/donation") return "text-slate-900";
    if (location.pathname === "/contact") return "text-white";
    if (location.pathname === "/ai-summit") return "text-white";
    return "text-black";
  };

  const getBgColor = () => {
    if (location.pathname === "/ai-summit") return "bg-[#2E5AFF]";
  };

  return (
    <div className={` ${getBgColor()}`}>
      <div className={`py-6 w-11/12 mx-auto`}>
        <div className="flex items-center justify-between">
          {/* <div className=" text-4xl">Shahriar Khan</div> */}
          <Link to="/">
            <div className={`text-4xl special-text ${getTextColor()}`}>
              Shahriar Khan
            </div>
          </Link>
          <div>
            <p
              className="text-4xl cursor-pointer px-4 py-2 rounded-lg"
              onClick={toggleDrawer}
            >
              <FaBars size={36} className={`text-2xl ${getIconColor()}`} />
            </p>
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 w-3/4 lg:w-2/5 h-full bg-white text-slate-900 p-4 transform transition-transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex justify-end">
            <button
              className="text-4xl text-slate-950 cursor-pointer"
              onClick={toggleDrawer}
            >
              <IoClose />
            </button>
          </div>
          <div className="mt-10 text-3xl font-medium px-20">
            <ul>
              <NavLink
                to="/"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Home</li>
              </NavLink>
              <NavLink
                to="/main/about-me"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">About Me</li>
              </NavLink>
              {/* <li className="mb-6">Publications</li> */}
              <NavLink
                to="/resource/books"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Books</li>
              </NavLink>
              <NavLink
                to="/resource/entepreneourship"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Entepreneourship</li>
              </NavLink>
              <NavLink
                to="/resource/events"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Events</li>
              </NavLink>
              <NavLink
                to="/resource/blogs"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Blogs</li>
              </NavLink>
              <NavLink
                to="/resource/technology"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Technology</li>
              </NavLink>
              <NavLink
                to="/resource/donation"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Donation</li>
              </NavLink>
              <NavLink
                to="/resource/videos"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Videos</li>
              </NavLink>
              <NavLink
                to="/main/life-event"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Life Events</li>
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                <li className="mb-6">Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
