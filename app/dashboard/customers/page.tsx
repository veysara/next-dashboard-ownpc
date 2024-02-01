'use client';
import { usePathname } from 'next/navigation';

import React from "react";

// Swiper components, modules and styles
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  const pathname = usePathname();
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
                <div className="card swiper-slide">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src="https://cdn.shopify.com/s/files/1/2452/6715/articles/B33.jpg?v=1508726163" alt="" className="card-img" />
                        </div>
                    </div>

                    <div className="card-content">
                        <h2 className="name">David Dell</h2>
                        <p className="description">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                           scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                           release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                           software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <button className="button">View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card swiper-slide">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/6910172/1.jpg?7239" alt="" className="card-img" />
                        </div>
                    </div>

                    <div className="card-content">
                        <h2 className="name">David Dell</h2>
                        <p className="description">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                           scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                           release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                           software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <button className="button">View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card swiper-slide">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src="https://i.ebayimg.com/images/g/5q8AAOSwsnVds6AO/s-l1200.webp" alt="" className="card-img" />
                        </div>
                    </div>

                    <div className="card-content">
                        <h2 className="name">David Dell</h2>
                        <p className="description">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                           scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                           release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                           software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <button className="button">View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card swiper-slide">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/654/520/desktop-wallpaper-attitude-stylish-baby-boy-cute-attitude-boy.jpg" alt="" className="card-img" />
                        </div>
                    </div>

                    <div className="card-content">
                        <h2 className="name">David Dell</h2>
                        <p className="description">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                           scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                           release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                           software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <button className="button">View More</button>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </section>
  );
}