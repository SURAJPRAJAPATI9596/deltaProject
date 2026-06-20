import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer
      className="
      w-full
      bg-gray-100
      dark:bg-gray-900
      border-t
      dark:border-gray-700
      py-6
      mt-auto
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        gap-5
        px-4
        "
      >
        {/* Social Icons */}

        <div className="flex gap-5">
          <a
            href="#"
            className="
            hover:text-blue-600
            transition
            dark:text-white
            "
          >
            <FacebookIcon />
          </a>

          <a
            href="#"
            className="
            hover:text-pink-500
            transition
            dark:text-white
            "
          >
            <InstagramIcon />
          </a>

          <a
            href="#"
            className="
            hover:text-blue-700
            transition
            dark:text-white
            "
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Copyright */}

        <p
          className="
          text-gray-700
          dark:text-gray-300
          text-center
          "
        >
          © Wanderlust Private Limited
        </p>

        {/* Links */}

        <div
          className="
          flex
          gap-4
          text-sm
          text-gray-600
          dark:text-gray-300
          "
        >
          <a href="#" className="hover:underline">
            Privacy
          </a>

          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
