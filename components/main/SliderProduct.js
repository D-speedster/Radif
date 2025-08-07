'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaRegHeart } from "react-icons/fa";

const SliderProduct = (prop) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay to prevent layout shift
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const renderSkeletonLoader = () => {
    return (
      <div className="skeleton-loader">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="skeleton-item">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-price"></div>
            <div className="skeleton-available"></div>
          </div>
        ))}
      </div>
    );
  };

  const products = [
    {
      id: 1,
      image: "img/a55.jpg",
      title: "گوشی موبایل سامسونگ مدل Galaxy A55",
      price: "۱۲,۵۰۰,۰۰۰",
      views: "+500",
      stores: "15",
      genre: "digital"
    },
    {
      id: 2,
      image: "/img/vivobook.png",
      title: "لپ تاپ ایسوس مدل VivoBook 15",
      price: "۲۲,۰۰۰,۰۰۰",
      views: "+300",
      stores: "10",
      genre: "digital"
    },
    {
      id: 3,
      image: "/img/55LJ61_A_Desktop_01.jpg",
      title: "تلویزیون ال جی مدل 55 اینچ",
      price: "۳۵,۰۰۰,۰۰۰",
      views: "+700",
      stores: "8",
      genre: "electronics"
    },
    {
      id: 4,
      image: "/img/emersunkala40new12.jpg",
      title: "یخچال فریزر دوقلو امرسان",
      price: "۲۸,۰۰۰,۰۰۰",
      views: "+400",
      stores: "12",
      genre: "home"
    },
    {
      id: 5,
      image: "/img/Octa-SWM-84526_p1z3-1p.jpg",
      title: "ماشین لباسشویی اسنوا 8 کیلویی",
      price: "۱۵,۰۰۰,۰۰۰",
      views: "+250",
      stores: "7",
      genre: "home"
    },
    {
      id: 6,
      image: "/img/sonyhads.jpg",
      title: "هدفون بی‌سیم سونی مدل WH-1000XM5",
      price: "۸,۰۰۰,۰۰۰",
      views: "+600",
      stores: "18",
      genre: "digital"
    },
    {
      id: 7,
      image: "/img/watch9.jpg",
      title: "ساعت هوشمند اپل واچ سری 9",
      price: "۲۰,۰۰۰,۰۰۰",
      views: "+900",
      stores: "25",
      genre: "digital"
    },
    {
      id: 8,
      image: "/img/209-edit-scaled.jpg",
      title: "دوربین عکاسی کانن مدل EOS 250D",
      price: "۲۵,۰۰۰,۰۰۰",
      views: "+350",
      stores: "9",
      genre: "electronics"
    },
    {
      id: 9,
      image: "/img/jbl.jpg",
      title: "اسپیکر بلوتوثی قابل حمل JBL",
      price: "۳,۰۰۰,۰۰۰",
      views: "+800",
      stores: "30",
      genre: "digital"
    },
    {
      id: 10,
      image: "/img/552884.jpg",
      title: "مایکروویو سامسونگ",
      price: "۷,۰۰۰,۰۰۰",
      views: "+200",
      stores: "6",
      genre: "home"
    },
    {
      id: 11,
      image: "/img/sony-playstation-5-slim-digital.png",
      title: "پلی استیشن 5 اسلیم",
      price: "۱۸,۵۰۰,۰۰۰",
      views: "+1200",
      stores: "22",
      genre: "digital"
    },
    {
      id: 12,
      image: "/img/17600_1.png",
      title: "کنسول بازی Xbox Series X",
      price: "۱۹,۰۰۰,۰۰۰",
      views: "+950",
      stores: "19",
      genre: "digital"
    },
    {
      id: 13,
      image: "/img/monitor27.jpg",
      title: "مانیتور گیمینگ ایسوس 27 اینچ",
      price: "۱۰,۰۰۰,۰۰۰",
      views: "+400",
      stores: "14",
      genre: "digital"
    },
    {
      id: 14,
      image: "/img/ROG-Strix-GeForce-RTX-4070-SUPER-12GB-GDDR6X-OC-Edition-1.jpg",
      title: "کارت گرافیک NVIDIA GeForce RTX 4070",
      price: "۴۰,۰۰۰,۰۰۰",
      views: "+600",
      stores: "10",
      genre: "digital"
    },
    {
      id: 15,
      image: "/img/Logitech-G-Pro-X-Superlight-2-Pro-X-TKL-1.jpg",
      title: "موس و کیبورد بی‌سیم لاجیتک",
      price: "۲,۵۰۰,۰۰۰",
      views: "+300",
      stores: "28",
      genre: "digital"
    },
    {
      id: 16,
      image: "/img/ssd-my-passport-500gb-1.jpg",
      title: "هارد اکسترنال وسترن دیجیتال 2 ترابایت",
      price: "۳,۵۰۰,۰۰۰",
      views: "+550",
      stores: "17",
      genre: "digital"
    },
    {
      id: 17,
      image: "/img/982159453_green_0_l.jpg",
      title: "مودم روتر وای فای تندا",
      price: "۱,۰۰۰,۰۰۰",
      views: "+700",
      stores: "35",
      genre: "digital"
    },
    {
      id: 18,
      image: "/img/htd-fs0103wr-compress.jpg",
      title: "پرینتر جوهرافشان اپسون",
      price: "۴,۰۰۰,۰۰۰",
      views: "+200",
      stores: "9",
      genre: "electronics"
    },
    {
      id: 19,
      image: "/img/کولرگازی-جنرال-گلد-تیتانیوم-مدل-GG-MS12000-.jpg",
      title: "کولر گازی 12000 اجنرال",
      price: "۲۵,۰۰۰,۰۰۰",
      views: "+300",
      stores: "11",
      genre: "home"
    },
    {
      id: 20,
      image: "/img/bosch-vacuum-cleaner-bgl8goldir.png",
      title: "جاروبرقی بوش",
      price: "۹,۰۰۰,۰۰۰",
      views: "+450",
      stores: "16",
      genre: "home"
    },
    {
      id: 21,
      image: "/img/DeLonghi-ES685-espresso-machine.jpg",
      title: "قهوه ساز دلونگی",
      price: "۸,۰۰۰,۰۰۰",
      views: "+150",
      stores: "5",
      genre: "home"
    },
    {
      id: 22,
      image: "",
      title: "اتو بخار تفال",
      price: "۲,۰۰۰,۰۰۰",
      views: "+350",
      stores: "20",
      genre: "home"
    },
    {
      id: 23,
      image: "/img/209-edit-scaled.jpg",
      title: "دوچرخه کوهستان سایز 26",
      price: "۶,۰۰۰,۰۰۰",
      views: "+180",
      stores: "10",
      genre: "sports"
    },
    {
      id: 24,
      image: "/img/blade1619v81.jpg",
      title: "راکت تنیس ویلسون",
      price: "۱,۵۰۰,۰۰۰",
      views: "+80",
      stores: "6",
      genre: "sports"
    },
    {
      id: 25,
      image: "/img/ab67bf.jpg",
      title: "کفش ورزشی نایک مدل Air Zoom",
      price: "۴,۰۰۰,۰۰۰",
      views: "+500",
      stores: "25",
      genre: "sports"
    },
    {
      id: 26,
      image: "/img/982159453_green_0_l.jpg",
      title: "لباس ورزشی آدیداس",
      price: "۱,۰۰۰,۰۰۰",
      views: "+300",
      stores: "30",
      genre: "sports"
    },
    {
      id: 27,
      image: "/img/1620044889.jpg",
      title: "شلوار جین مردانه",
      price: "۸۰۰,۰۰۰",
      views: "+400",
      stores: "40",
      genre: "sports"
    },
    {
      id: 28,
      image: "/img/tesksakd.jpg",
      title: "مانتو زنانه تابستانی",
      price: "۷۰۰,۰۰۰",
      views: "+350",
      stores: "38",
      genre: "sports"
    },
    {
      id: 29,
      image: "",
      title: "عینک آفتابی ری بن",
      price: "۳,۰۰۰,۰۰۰",
      views: "+600",
      stores: "20",
      genre: "sports"
    },
    {
      id: 30,
      image: "",
      title: "کیف چرمی زنانه",
      price: "۲,۵۰۰,۰۰۰",
      views: "+450",
      stores: "15",
      genre: "sports"
    },
    {
      id: 31,
      image: "",
      title: "کمربند چرمی مردانه",
      price: "۵۰۰,۰۰۰",
      views: "+250",
      stores: "22",
      genre: "accessories"
    },
    {
      id: 32,
      image: "",
      title: "کتاب رمان خارجی",
      price: "۳۰۰,۰۰۰",
      views: "+1000",
      stores: "50",
      genre: "books"
    },
    {
      id: 33,
      image: "",
      title: "کتاب آشپزی ایرانی",
      price: "۲۰۰,۰۰۰",
      views: "+700",
      stores: "45",
      genre: "books"
    },
    {
      id: 34,
      image: "",
      title: "مداد رنگی فابر کاستل",
      price: "۸۰۰,۰۰۰",
      views: "+300",
      stores: "18",
      genre: "stationery"
    },
    {
      id: 35,
      image: "",
      title: "دفترچه یادداشت فانتزی",
      price: "۵۰,۰۰۰",
      views: "+600",
      stores: "60",
      genre: "stationery"
    },
    {
      id: 36,
      image: "",
      title: "خودکار روان‌نویس یونی بال",
      price: "۳۰,۰۰۰",
      views: "+900",
      stores: "70",
      genre: "stationery"
    },
    {
      id: 37,
      image: "",
      title: "ماشین اصلاح سر و صورت فیلیپس",
      price: "۴,۰۰۰,۰۰۰",
      views: "+400",
      stores: "15",
      genre: "health"
    },
    {
      id: 38,
      image: "",
      title: "مسواک برقی اورال بی",
      price: "۱,۵۰۰,۰۰۰",
      views: "+300",
      stores: "10",
      genre: "health"
    },
    {
      id: 39,
      image: "",
      title: "ترازوی دیجیتال شیائومی",
      price: "۷۰۰,۰۰۰",
      views: "+500",
      stores: "25",
      genre: "health"
    },
    {
      id: 40,
      image: "",
      title: "فرش ماشینی 6 متری",
      price: "۱۲,۰۰۰,۰۰۰",
      views: "+200",
      stores: "8",
      genre: "home"
    },
    {
      id: 41,
      image: "",
      title: "مبل راحتی 7 نفره",
      price: "۳۰,۰۰۰,۰۰۰",
      views: "+150",
      stores: "6",
      genre: "home"
    },
    {
      id: 42,
      image: "",
      title: "لوستر مدرن پذیرایی",
      price: "۵,۰۰۰,۰۰۰",
      views: "+100",
      stores: "7",
      genre: "home"
    },
    {
      id: 43,
      image: "",
      title: "پرده زبرا پذیرایی",
      price: "۲,۰۰۰,۰۰۰",
      views: "+120",
      stores: "9",
      genre: "home"
    },
    {
      id: 44,
      image: "",
      title: "سرویس قابلمه گرانیتی",
      price: "۳,۰۰۰,۰۰۰",
      views: "+250",
      stores: "18",
      genre: "home"
    },
    {
      id: 45,
      image: "",
      title: "سرویس کارد و چنگال",
      price: "۱,۰۰۰,۰۰۰",
      views: "+180",
      stores: "20",
      genre: "home"
    },
    {
      id: 46,
      image: "",
      title: "پتو گلبافت دو نفره",
      price: "۸۰۰,۰۰۰",
      views: "+300",
      stores: "30",
      genre: "home"
    },
    {
      id: 47,
      image: "",
      title: "حوله حمام نخی",
      price: "۱۵۰,۰۰۰",
      views: "+400",
      stores: "45",
      genre: "home"
    },
    {
      id: 48,
      image: "",
      title: "ملحفه و روبالشی ترک",
      price: "۵۰۰,۰۰۰",
      views: "+250",
      stores: "35",
      genre: "home"
    },
    {
      id: 49,
      image: "",
      title: "ماگ سرامیکی فانتزی",
      price: "۸۰,۰۰۰",
      views: "+700",
      stores: "55",
      genre: "kitchenware"
    },
    {
      id: 50,
      image: "",
      title: "فنجان و نعلبکی چینی",
      price: "۳۰۰,۰۰۰",
      views: "+350",
      stores: "40",
      genre: "kitchenware"
    }
  ];
  const productsc = [
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
  let product_select = products.filter((product) => product.genre == prop.Category)

  return (
    <section className="popular-slider">
      <div className="container-custom">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title"> {`برترین های  لوازم ${prop.title}`}</h2>
          <a href="#">مشاهده تمامی محصولات </a>
        </div>

        {isLoading ? (
          renderSkeletonLoader()
        ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}

          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {product_select.map((product) => (
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
                        <FaRegHeart fontSize={'20px'} className='pt-1' />
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
        )}
      </div>
    </section>
  );
};

export default SliderProduct;