import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaBandcamp } from "react-icons/fa";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav
      className="
      sticky top-0 z-50
      h-20
      flex items-center justify-between
      px-6 md:px-10
      border-b
      bg-white dark:bg-gray-900
      dark:border-gray-700
      transition
    "
    >
      {/* Logo */}

      <div className="flex items-center gap-6">
        <div
          className="
          w-12 h-12
          rounded-full
          border-2 border-red-500
          flex items-center justify-center
        "
        >
          <FaBandcamp />
        </div>

        {/* Desktop links */}

        <div
          className="
          hidden md:flex
          gap-8
          text-lg
        "
        >
          <Link
            to="/"
            className="
            dark:text-white
            hover:text-red-500
            "
          >
            Home
          </Link>

          <Link
            to="/"
            className="
            dark:text-white
            hover:text-red-500
            "
          >
            All Listings
          </Link>

          <Link
            to="listings/new"
            className="
            dark:text-white
            hover:text-red-500
            "
          >
            Add new Listing
          </Link>
        </div>
      </div>

      {/* Right side */}

      <div className="flex items-center gap-4">
        {/* Theme button */}

        <button
          onClick={() => setDark(!dark)}
          className="
          p-2
          rounded-full
          hover:bg-gray-200
          dark:hover:bg-gray-700
          "
        >
          {dark ? <LightModeIcon className="text-white" /> : <DarkModeIcon />}
        </button>

        {/* Mobile menu */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          "
        >
          {open ? (
            <CloseIcon className="dark:text-white" />
          ) : (
            <MenuIcon className="dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}

      {open && (
        <div
          className="
          absolute
          top-20
          left-0
          w-full
          bg-white
          dark:bg-gray-900
          border-b
          dark:border-gray-700
          flex
          flex-col
          gap-5
          p-6
          md:hidden
        "
        >
          <Link to="/" className="dark:text-white">
            Home
          </Link>

          <Link to="/listings" className="dark:text-white">
            All Listings
          </Link>

          <Link to="/listings/new" className="dark:text-white">
            Add new Listing
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
