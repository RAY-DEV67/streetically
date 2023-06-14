// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { Theme } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import testimony1 from "../assets/testimony1.jpg";
import testimony2 from "../assets/testimony2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import LoadingSpinner from "../components/spinner";
import { Footer } from "../components/footer";

export function LandingPage() {
  const theme = useContext(Theme);
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [welcome, setwelcome] = useState(false);

  const upload = async () => {
    setloading(true);
    await addDoc(collection(db, "Email"), {
      Email: email,
    });
    setloading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    upload();
    setwelcome(true);
    setTimeout(() => {
      setwelcome(false);
    }, 4000);
  };

  const colors = [testimony1, testimony2];
  const delay = 5000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="bg-[#000009]">
      <div className="landing h-[80vh]"></div>
      <div className="flex flex-col items-center mt-[2rem]">
        <img
          className="w-[50vw] border-y py-[2rem]"
          src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685984499/streetically/D050B59C-5C56-4A65-9F71-B84E3857C93E_qlfewh.jpg"
        />
      </div>
      <div className="flex flex-col items-center mt-[1rem]">
        <div className="w-[90vw] text-center border-b pb-[1rem]">
          <h2 className="text-[2.5rem] font-bold">WHY STREETICALLY</h2>
          <p className="text-[1.5rem]">
            We believe that your wedding day is one of the most important days
            of your life, and we are honored to be a part of it. Let us help you
            create memories that will last a lifetime with our unique and edgy
            style with a touch of editorial feel.
          </p>
          <Link to="/About" className="flex flex-col items-center">
            <div className="border uppercase border-[#D3D3D3] text-[#ffffff] font-semibold text-2xl px-[2.5rem] m-[1rem] py-[0.3rem]">
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center" id="Music">
        <div className="container sm:w-[70%]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container mb-[-10rem] sm:mb-[0rem]"
          >
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/BB30C438-6800-4A73-8F35-AAB8918820C2_u47lv2.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/6636CA56-E493-46FC-A17A-99D6FE628B7C_wn9imi.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/CF15FDB3-3F6F-414D-9AD0-63FD27B53E59_h0aoiw.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969439/streetically/321E2215-0921-4B99-A6D6-C75C3B6D5532_uiqy3r.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/9CF12D66-0598-4E42-BCE5-BDB41C75D93E_u8vf7d.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/F9E5C153-A577-4BD6-BFA7-08BE713E7D88_skz4n6.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/E6F44508-6AAE-46C9-BB0C-73D6C76215D4_zrk9li.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/7A3B0784-76FF-4E7B-A638-D446BEDDE669_wkgje4.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/F121316D-E89D-4516-9449-4C09AE242FF4_cmje3d.jpg"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <img
                alt="Streetically"
                src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685969438/streetically/32616990-3948-438C-8591-5610B274596D_ixdggs.jpg"
                className=""
              />
            </SwiperSlide>

            <div className="slider-controler mt-[-2rem] mb-[2rem] sm:block">
              <div className="swiper-button-prev bg-[#D3D3D3] slider-arrow">
                <svg
                  viewBox="-3 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000009"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="icomoon-ignore"> </g>{" "}
                    <path
                      d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                  </g>
                </svg>
              </div>
              <div className="swiper-button-next bg-[#D3D3D3] slider-arrow">
                <svg
                  viewBox="-3 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000009"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="icomoon-ignore"> </g>{" "}
                    <path
                      d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
                      fill="#000009"
                    >
                      {" "}
                    </path>{" "}
                  </g>
                </svg>
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div className="slide" key={index}>
              <img src={backgroundColor} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
