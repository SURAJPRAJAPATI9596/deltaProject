import { useState, useEffect } from "react";
import { getEditData } from "../api";
import axios from "axios";
import { useParams } from "react-router-dom";
function Edit() {
  let [showValue, setShowValue] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    location: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShowValue((prev) => ({ ...prev, [name]: value }));
  };

  const { id } = useParams();
  useEffect(() => {
    async function showHandle() {
      const show = await getEditData(id);
      setShowValue(show);
    }
    showHandle();
  }, [id]);

  function handleForm(event) {
    event.preventDefault();
    const formElement = event.target;

    axios
      .put(`http://localhost:8080/api/listings/${id}`, showValue)
      .then((response) => {
        console.log("data submited");
        formElement.reset();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }

  return (
    <div
      className="
  min-h-screen
  flex
  justify-center
  items-center
  bg-gray-100
  px-4
  py-10
  "
    >
      <div
        className="
    w-full
    max-w-xl
    bg-white
    rounded-3xl
    shadow-xl
    p-8
    "
      >
        <h1
          className="
      text-3xl
      font-bold
      mb-8
      text-center
      "
        >
          Edit your listing
        </h1>

        <form
          className="
      flex
      flex-col
      gap-5
      "
          onSubmit={(e) => {
            handleForm(e);
          }}
        >
          <div>
            <label className="block mb-2 font-medium">Title</label>

            <input
              required
              value={showValue.title}
              onChange={handleChange}
              type="text"
              name="title"
              className="
          border
          p-3
          w-full
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-black
          "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              required
              value={showValue.description}
              onChange={handleChange}
              name="description"
              rows="4"
              className="
          border
          p-3
          w-full
          rounded-xl
          outline-none
          resize-none
          focus:ring-2
          focus:ring-black
          "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Image URL</label>

            <input
              required
              value={showValue.image}
              onChange={handleChange}
              type="text"
              name="image"
              className="
          border
          p-3
          w-full
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-black
          "
            />
          </div>

          <div
            className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        "
          >
            <div>
              <label className="block mb-2 font-medium">Price</label>

              <input
                required
                value={showValue.price}
                onChange={handleChange}
                type="number"
                name="price"
                className="
            border
            p-3
            w-full
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-black
            "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Location</label>

              <input
                required
                value={showValue.location}
                onChange={handleChange}
                type="text"
                name="location"
                className="
            border
            p-3
            w-full
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-black
            "
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Country</label>

            <input
              required
              value={showValue.country}
              onChange={handleChange}
              type="text"
              name="country"
              className="
          border
          p-3
          w-full
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-black
          "
            />
          </div>

          <button
            type="submit"
            className="
        bg-black
        text-white
        py-3
        rounded-xl
        font-semibold
        hover:bg-gray-800
        transition
        active:scale-95
        "
          >
            Edit Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
