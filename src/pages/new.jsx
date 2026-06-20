import axios from "axios";
function New() {
  function handleForm(event) {
    event.preventDefault();
    const formElement = event.target;

    const data = {
      title: event.target[0].value,
      description: event.target[1].value,
      image: event.target[2].value,
      price: event.target[3].value,
      location: event.target[4].value,
      country: event.target[5].value,
    };

    axios
      .post("http://localhost:8080/api/listings/new", data)
      .then((response) => {
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
          Create New Listing
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
              type="text"
              name="title"
              placeholder="Beautiful farmhouse"
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
              name="description"
              placeholder="Describe your property..."
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
              type="text"
              name="image"
              placeholder="Enter image link"
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
                type="number"
                name="price"
                placeholder="2000"
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
                type="text"
                name="location"
                placeholder="Punjab"
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
              type="text"
              name="country"
              placeholder="India"
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
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default New;
