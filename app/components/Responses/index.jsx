"use client";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Kernel } from "../ui";
import listOfResponses from "@/app/fish_data/listOfResponses";
import Response from "../ui/Response";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Responses = () => {
  return (
    <div className={styles.responses}>
      <Kernel>
        <div className={styles.h1}>Награды и&nbsp;отзывы</div>

        <div className={styles.responsesGallery}>
          <div className={styles.responsesGallery__control}>
            <div
              className={classNames(
                styles.responsesGallery__button,
                styles.iPrev,
                "swiperPrev"
              )}
            ></div>
          </div>
          <div className={styles.responsesGallery__carouselWrapper}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiperNext",
                prevEl: ".swiperPrev",
              }}
            >
              {listOfResponses &&
                listOfResponses.map((item) => (
                  <SwiperSlide key={item.text}>
                    <Response response={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className={styles.responsesGallery__control}>
            <div
              className={classNames(
                styles.responsesGallery__button,
                styles.iNext,
                "swiperNext"
              )}
            ></div>
          </div>
        </div>
      </Kernel>
    </div>
  );
};

export default Responses;
