"use client";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@/app/hooks";
import { Kernel } from "../ui";
import brandsContent from "./brandsContent";
import BrandCard from "./BrandCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
//
import "swiper/css";
import "swiper/css/pagination";

// https://swiperjs.com/demos#pagination-custom - демки свипера

const Brands = () => {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    const brandsList = Object.keys(brandsContent);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    };

    return (
        <Kernel>
            <div
                className={styles.brandsGrid}
                style={{ display: isDesktop ? "grid" : "block" }}
            >
                {isDesktop ? (
                    <>
                        {brandsList.map((brand) => (
                            <BrandCard
                                key={brand}
                                brand={brand}
                                content={brandsContent[brand]}
                            />
                        ))}
                    </>
                ) : (
                    <Swiper
                        slidesPerView="1.2"
                        speed="500"
                        loop="true"
                        spaceBetween="20"
                        className="brandsSwiper"
                        pagination={pagination}
                        modules={[Pagination, Navigation]}
                    >
                        {brandsList.map((brand) => (
                            <SwiperSlide
                                key={brand}
                                className={styles.swiperSlide}
                            >
                                <BrandCard
                                    brand={brand}
                                    content={brandsContent[brand]}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </Kernel>
    );
};

export default Brands;
