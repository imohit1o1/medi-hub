import React, { useEffect, useState } from "react";
// import { axios } from "../../import-export/ImportExport";
import { toast } from "react-toastify";
import axios from "axios";

function Testimonials() {
  const [testimonial, setTestimonial] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/testimonial/getall"
        );
        setTestimonial(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchTestimonials();
  }, []);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // };

  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:8000/api/v1/testimonial/add",
          { fullName, email, country, state, review },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFullName("");
          setEmail("");
          setCountry("");
          setState("");
          setReview("");
          setImage("");
          setShowForm(false);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <main className="w-full">
      <section className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-3 md:px-6 lg:px-8 gap-y-6">
        {/* Text container */}
        <div className="flex flex-col items-center">
          <div className="h-full w-full lg:w-2/3 md:space-y-6 space-y-3">
            <h3 className="text-md text-dark_theme font-medium">Testimonial</h3>
            <h1 className="text-3xl lg:text-4xl text-dark_theme font-bold text-black-700 rounded-full">
              What They Say?
            </h1>
            <p className="text-md text-text_grey">
              MediHub has got more than
              <span className="text-dark_theme font-medium ml-1">
                10k positive ratings
              </span>{" "}
              from our users around the world.
            </p>
            <p className="text-md text-text_grey">
              Some of the Doctors and Paitient were greatly helped by the
              Medi-Hub.
            </p>
            <p className="text-md text-text_grey">
              Are you too? Please give your feedback.
            </p>

            {/* Feedback cta */}
            <button
              onClick={() => setShowForm(true)}
              className="border border-dark_theme hover:bg-light_theme text-dark_theme py-2 px-4 rounded-full hover:bg-opacity-100"
            >
              Send Your Feedback &#8594;
            </button>
          </div>
        </div>

        {/* Testimonial cards container */}
        <div className="w-full flex justify-center items-start lg:items-center relative">
          {/* image container */}
          <div className="w-56 h-60 lg:w-64 lg:h-72 bg-testimonial_img_bg px-4 py-2 md:py-0 rounded-md">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt="image"
              className="w-full h-full object-contain md:object-center object-top"
            />

            {/* feedback messasges and ratings */}
            <div className="absolute bottom-[-25%] right-[5%] lg:bottom-[-3%] md:bottom-0 lg:right-[4%] max-w-[190px] md:max-w-[250px] lg:max-w-xs max-h-32 bg-white px-4 py-4 rounded-md flex flex-col gap-y-4 shadow-lg">
              {/* feeback msg  */}
              <div className="overflow-hidden">
                <p className="line-clamp-3 md:line-clamp-4 text-sm text-text_grey tracking-wide">
                  Loved the expirence at medi-hub, best health care system that
                  make the user life eaiser.
                </p>
              </div>

              {/* name and rating stars */}
              <div className="flex justify-between items-center">
                <div className="max-w-16 overflow-hidden">
                  <h4 className="truncate text-dark_theme font-medium">
                    Parth kumar
                  </h4>
                </div>
                <div className="flex gap-x-1">stars</div>
              </div>
            </div>
            {/* <h4 className="font-bold text-center">
              {testimonials[currentIndex].profile}
            </h4>
            <p className="text-sm text-center mb-6">
              {testimonials[currentIndex].country},{" "}
              {testimonials[currentIndex].state}
            </p>
            <p className="mt-2 text-center">
              {testimonials[currentIndex].review}
            </p>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={handlePrev}
                className="bg-white bg-opacity-50 text-black rounded-full p-2 hover:bg-opacity-100"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="bg-white bg-opacity-50 text-black rounded-full p-2 hover:bg-opacity-100"
              >
                &#8594;
              </button>
            </div> */}
          </div>
        </div>

        {/* Testiomonials message*/}
        {showForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-md mx-auto">
      {/* Close button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-gray-800"
      >
        &#10005;
      </button>

      <form onSubmit={handleFeedback} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your Full Name"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your Review"
          className="p-2 border border-gray-300 rounded w-full"
        ></textarea>
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

      </section>
    </main>
  );
}

export default Testimonials;
