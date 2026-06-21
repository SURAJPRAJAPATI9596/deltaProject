import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getShowData, getReviewData } from "../api";
import axios from "axios";

const Show = () => {
  const [data, setData] = useState([]);
  const [showReview, setShowReview] = useState([]);
  const [review, setReview] = useState({
    comment: "",
    rating: 3,
  });

  const { id } = useParams();

  useEffect(() => {
    const showHandle = async () => {
      const show = await getShowData(id);
      setData(show);
    };
    showHandle();
  }, [id]);
  useEffect(() => {
    const handleShowReview = async () => {
      const data = await getReviewData(id);
      setShowReview(data);
    };
    handleShowReview();
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/listings/${id}`)
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReview = (e) => {
    e.preventDefault();

    axios
      .post(`/api/listings/${id}/reviews`, review)
      .then(() => {
        console.log("submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="
      min-h-screen
      bg-gray-100
      px-4
      py-10
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden
        "
      >
        {/* IMAGE */}

        <div className="h-75 md:h-112.5">
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

        <div className="p-5 md:p-10">
          {/* TITLE */}

          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            mb-4
            "
          >
            {data.title}
          </h1>

          <p
            className="
            text-gray-600
            text-base
            md:text-lg
            mb-8
            "
          >
            {data.description}
          </p>

          {/* DETAILS */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-5
            "
          >
            <div className="bg-gray-100 p-5 rounded-xl">
              <p className="text-gray-500">Price</p>

              <h2 className="font-bold text-xl">₹{data.price}</h2>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl">
              <p className="text-gray-500">Location</p>

              <h2 className="font-bold text-xl">{data.location}</h2>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl">
              <p className="text-gray-500">Country</p>

              <h2 className="font-bold text-xl">{data.country}</h2>
            </div>
          </div>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
            "
          >
            <Link
              to={`/Edit/${data._id}`}
              className="
              bg-black
              text-white
              px-8
              py-3
              rounded-xl
              text-center
              "
            >
              Edit
            </Link>

            <form onSubmit={handleForm}>
              <button
                className="
                bg-red-500
                text-white
                px-8
                py-3
                rounded-xl
                w-full
                "
              >
                Delete
              </button>
            </form>
          </div>

          {/* ADD REVIEW */}

          <div className="mt-12 border-t pt-10">
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
              <div className="mb-6">
                <label className="block mb-2">Rating : {review.rating}/5</label>

                <input
                  type="range"
                  min="1"
                  max="5"
                  name="rating"
                  value={review.rating}
                  onChange={handleReviewChange}
                  className="w-full"
                />
              </div>

              <textarea
                name="comment"
                value={review.comment}
                onChange={handleReviewChange}
                placeholder="Write your review..."
                className="
                w-full
                h-32
                border
                rounded-xl
                p-4
                mb-5
                "
              />

              <button
                className="
                bg-black
                text-white
                px-10
                py-3
                rounded-xl
                "
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* ALL REVIEWS */}

          <div className="mt-12 border-t pt-10">
            <h2
              className="
              text-3xl
              font-bold
              mb-8
              "
            >
              All Reviews
            </h2>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              "
            >
              {showReview.map((value, index) => (
                <div className=" bg-gray-100 rounded-2xl p-6" key={value._id}>
                  <div className="flex justify-between mb-4">
                    <h3 className="font-bold">SURAJ PRAJAPATI</h3>

                    <span>⭐ {value.rating}/5</span>
                  </div>

                  <p className="text-gray-600">{value.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
