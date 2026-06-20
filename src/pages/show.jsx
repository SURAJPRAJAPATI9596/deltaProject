import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getEditData } from "../api";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [data, setData] = useState([]);
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
      .delete(`http://localhost:8080/api/listings/${id}`, {
        _id: id,
      })
      .then((response) => {
        console.log(id);
        formElement.reset();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
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
          hover:bg-gray-800
          transition
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
            hover:bg-red-600
            transition
            "
              >
                <Link
                  to="/"
                  onClick={() => {
                    confirm("Hey! are you sure to delete this listings");
                  }}
                >
                  Delete
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
