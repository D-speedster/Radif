import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaRegHeart } from "react-icons/fa";

const PopularProductsSlider = () => {
  const products = [
    {
      id: 1,
      image: "img/ps4.png",
      title: "کنسول بازی سونی مدل PlayStation 5 Slim Digital",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "20"
    },
    {
      id: 2,
      image: "img/airpod.png",
      title: "هدفون بلوتوثی اپل مدل AirPods Pro 2nd Generation",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "19"
    },
    {
      id: 3,
      image: "img/iphone16.png",
      title: "گوشی موبایل اپل مدل iPhone 16",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+1000",
      stores: "17"
    },
    {
      id: 4,
      image: "img/S24.png",
      title: "گوشی موبایل سامسونگ مدل S24 FE",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "16"
    },
    {
      id: 5,
      image: "img/pc.png",
      title: "کیس گیمینگ مدل 840 گرین 2024",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "24"
    },
    {
      id: 6,
      image: "img/mac.png",
      title: "لپ تاپ 14.2 اینچی اپل مدل MacBook Pro",
      price: "۱۵۷,۴۴۶,۰۰۰",
      views: "+100",
      stores: "12"
    },
    {
      id: 7,
      image: "img/cavir.png",
      title: "موتورسیکلت کویر S2 150",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "24"
    },
    {
      id: 8,
      image: "img/44.png",
      title: "هدفون بلوتوثی اپل مدل AirPods Pro 2nd Generation",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "24"
    }
  ];

  return (
    <section className="popular-slider">
      <div className="container-custom">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">پر بازدیدترین محصولات</h2>
          <a href="#">مشاهده تمامی محصولات </a>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}

          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 7,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={`/product/${product.title}`} style={{ textDecoration: 'none', color: '#000' }}>
                <div className="item-product">
                  <div className="product-img">
                    <img src={product.image} className="img-fluid" alt={product.title} />
                    <div className="img-info">
                      <span>{product.views} بازدید</span>
                    </div>
                    <div className="img-like">
                      <span>
                        <FaRegHeart fontSize={'20px'} className='pt-1'/>
                      </span>
                    </div>
                  </div>
                  <div className="title-card">
                    <span>{product.title}</span>
                  </div>
                  <div className="price">
                    <span>{product.price} </span> <span>تومان</span>
                  </div>
                  <div className="available">
                    <span>موجود در {product.stores} فروشگاه</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProductsSlider;