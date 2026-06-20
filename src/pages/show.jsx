import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEditData } from "../api";
import axios from "axios";

const Show = () => {
  const [data, setData] = useState([]);

  // Review states
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function showHandle() {
      const show = await getEditData(id);

      setData(show);
    }

    showHandle();
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8080/api/listings/${id}`)
      .then((response) => {
        console.log(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReview = (e) => {
    e.preventDefault();

    const review = {
      listingId: id,
      rating,
      comment,
    };

    console.log(review);

    // later backend API
    // axios.post("http://localhost:8080/api/reviews",review)

    setRating(3);
    setComment("");
  };

  return (
    <div
      className="
      min-h-screen
      bg-gray-100
      flex
      justify-center
      px-4
      py-10
      "
    >
      <div
        className="
        w-full
        max-w-4xl
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden
        "
      >
        {/* Image */}

        <div className="h-96">
          <img
            src={data.image}
            alt={data.title}
            className="
            w-full
            h-full
            object-cover
            "
          />
        </div>

        {/* Content */}

        <div className="p-8">
          <h1
            className="
            text-4xl
            font-bold
            mb-4
            "
          >
            {data.title}
          </h1>

          <p
            className="
            text-gray-600
            text-lg
            mb-6
            "
          >
            {data.description}
          </p>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            mb-8
            "
          >
            <div
              className="
              bg-gray-100
              rounded-xl
              p-4
              "
            >
              <p className="text-gray-500">Price</p>

              <h2 className="font-bold text-xl">₹{data.price}</h2>
            </div>

            <div
              className="
              bg-gray-100
              rounded-xl
              p-4
              "
            >
              <p className="text-gray-500">Location</p>

              <h2 className="font-bold text-xl">{data.location}</h2>
            </div>

            <div
              className="
              bg-gray-100
              rounded-xl
              p-4
              "
            >
              <p className="text-gray-500">Country</p>

              <h2 className="font-bold text-xl">{data.country}</h2>
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
            flex
            gap-4
            "
          >
            <Link
              to={`/Edit/${data._id}`}
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Edit
            </Link>

            <form onSubmit={handleForm}>
              <button
                className="
                bg-red-500
                text-white
                px-6
                py-3
                rounded-xl
                "
              >
                Delete
              </button>
            </form>
          </div>

          {/* REVIEW SECTION */}

          <div className="mt-10 border-t pt-8">
            <h2
              className="
              text-3xl
              font-bold
              mb-6
              "
            >
              Add Review
            </h2>

            <form onSubmit={handleReview}>
              {/* Rating */}

              <div className="mb-6">
                <label className="block mb-2 text-gray-600">
                  Rating : {rating} / 5
                </label>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Comment */}

              <div className="mb-6">
                <label className="block mb-2 text-gray-600">Comment</label>

                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your review..."
                  required
                  className="
                  w-full
                  h-32
                  border
                  rounded-xl
                  p-4
                  "
                />
              </div>

              <button
                className="
                bg-black
                text-white
                px-8
                py-3
                rounded-xl
                hover:bg-gray-800
                "
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
