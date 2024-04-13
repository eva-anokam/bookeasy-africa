import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./Testimonials.css"
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

export default function App() {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          loopedSlides={3}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img-container">
              <img src={testimonial1} alt="" />
            </div>
            <div className="text flow-content">
              <p>
                The verification process gave me peace of mind, and the secure
                payment system meant I didn't have to worry about scams. Plus,
                the reviews from real tenants were incredibly helpful.
              </p>
              <h3>Henry Tunde</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="img-container">
              <img src={testimonial2} alt="" />
            </div>
            <div className="text flow-content">
              <p>
                Finding a place with Book Easy was epic! No more creepy websites
                or shady landlords. Used the filters to score a place with a
                pool, near the beach, and for cheap - all in few clicks!
              </p>
              <h3>Sarah David</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={testimonial3} alt="" />
            </div>
            <div className="text flow-content">
              <p>
                No scam worries, thanks to Book Easy's verification and secure
                payments! Plus, real people reviews helped me score the perfect
                spot. Book Easy verifies everything, so no scams.
              </p>
              <h3>Victor Okoro</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={testimonial1} alt="" />
            </div>
            <div className="text flow-content">
              <p>
                The verification process gave me peace of mind, and the secure
                payment system meant I didn't have to worry about scams. Plus,
                the reviews from real tenants were incredibly helpful.
              </p>
              <h3>Henry Tunde</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
