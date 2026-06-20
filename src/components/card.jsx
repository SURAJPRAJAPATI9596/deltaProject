import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ListingCard({ data }) {
  return (
    <Link to={`/listings/${data._id}`} className="group">
      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        "
      >
        {/* Image section */}

        <div className="relative h-72 overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-500
            "
          />

          {/* Favorite */}

          <button
            className="
            absolute
            top-4
            right-4
            bg-white
            rounded-full
            p-2
            shadow
            "
          >
            <FavoriteBorderIcon className="text-red-500" />
          </button>

          {/* Price badge */}

          <div
            className="
            absolute
            bottom-4
            left-4
            bg-black/70
            text-white
            px-3
            py-1
            rounded-full
            text-sm
            "
          >
            ₹{data.price}/night
          </div>
        </div>

        {/* Content */}

        <div className="p-4">
          <h2
            className="
            text-xl
            font-semibold
            truncate
            "
          >
            {data.title}
          </h2>

          <p
            className="
            text-gray-500
            text-sm
            mt-1
            "
          >
            📍 {data.location}, {data.country}
          </p>

          <p
            className="
            text-gray-600
            mt-3
            text-sm
            line-clamp-2
            "
          >
            {data.description}
          </p>

          <button
            className="
            mt-4
            w-full
            bg-black
            text-white
            py-2
            rounded-xl
            hover:bg-gray-800
            transition
            "
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
