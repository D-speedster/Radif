'use client';
import React from 'react';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa";

const ProductGrid = ({ Category, title }) => {
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
      image: "/img/iphone16.png",
      title: "گوشی موبایل اپل مدل iPhone 16",
      price: "۴۵,۰۰۰,۰۰۰",
      views: "+800",
      stores: "20",
      genre: "digital"
    },
    {
      id: 6,
      image: "/img/mac.png",
      title: "لپ تاپ اپل مدل MacBook Air M2",
      price: "۵۵,۰۰۰,۰۰۰",
      views: "+600",
      stores: "18",
      genre: "digital"
    },
    {
      id: 7,
      image: "/img/watch9.jpg",
      title: "ساعت هوشمند اپل مدل Watch Series 9",
      price: "۱۸,۰۰۰,۰۰۰",
      views: "+350",
      stores: "25",
      genre: "digital"
    },
    {
      id: 8,
      image: "/img/airpod.png",
      title: "هدفون بلوتوثی اپل مدل AirPods Pro 2nd Generation",
      price: "۱۸,۲۹۰,۰۰۰",
      views: "+100",
      stores: "24",
      genre: "digital"
    },
    {
      id: 9,
      image: "/img/samsung.jpg",
      title: "گوشی موبایل سامسونگ مدل Galaxy S24 Ultra",
      price: "۶۵,۰۰۰,۰۰۰",
      views: "+900",
      stores: "30",
      genre: "digital"
    },
    {
      id: 10,
      image: "/img/pc.png",
      title: "کامپیوتر دسکتاپ گیمینگ",
      price: "۴۰,۰۰۰,۰۰۰",
      views: "+250",
      stores: "12",
      genre: "digital"
    },
    {
      id: 11,
      image: "/img/monitor27.jpg",
      title: "مانیتور گیمینگ 27 اینچ",
      price: "۱۵,۰۰۰,۰۰۰",
      views: "+180",
      stores: "16",
      genre: "digital"
    },
    {
      id: 12,
      image: "/img/ps4.png",
      title: "کنسول بازی سونی PlayStation 5",
      price: "۳۲,۰۰۰,۰۰۰",
      views: "+450",
      stores: "14",
      genre: "digital"
    },
    {
      id: 13,
      image: "/img/jbl.jpg",
      title: "اسپیکر بلوتوثی JBL",
      price: "۸,۵۰۰,۰۰۰",
      views: "+220",
      stores: "22",
      genre: "digital"
    },
    {
      id: 14,
      image: "/img/mi.jpg",
      title: "گوشی موبایل شیائومی مدل Redmi Note 13",
      price: "۹,۸۰۰,۰۰۰",
      views: "+380",
      stores: "28",
      genre: "digital"
    },
    {
      id: 15,
      image: "/img/sonyhads.jpg",
      title: "هدفون سونی مدل WH-1000XM5",
      price: "۲۱,۰۰۰,۰۰۰",
      views: "+290",
      stores: "19",
      genre: "digital"
    },
    {
      id: 16,
      image: "/img/ssd-my-passport-500gb-1.jpg",
      title: "هارد اکسترنال وسترن دیجیتال 500GB",
      price: "۴,۲۰۰,۰۰۰",
      views: "+150",
      stores: "35",
      genre: "digital"
    },
    {
      id: 17,
      image: "/img/blade1619v81.jpg",
      title: "لپ تاپ گیمینگ Razer Blade",
      price: "۸۵,۰۰۰,۰۰۰",
      views: "+120",
      stores: "8",
      genre: "digital"
    },
    {
      id: 18,
      image: "/img/tesksakd.jpg",
      title: "تبلت سامسونگ Galaxy Tab S9",
      price: "۲۸,۵۰۰,۰۰۰",
      views: "+310",
      stores: "17",
      genre: "digital"
    },
    {
      id: 19,
      image: "/img/982159453_green_0_l.jpg",
      title: "کیبورد گیمینگ مکانیکی",
      price: "۶,۸۰۰,۰۰۰",
      views: "+200",
      stores: "26",
      genre: "digital"
    },
    {
      id: 20,
      image: "/img/Logitech-G-Pro-X-Superlight-2-Pro-X-TKL-1.jpg",
      title: "ماوس گیمینگ لاجیتک G Pro X",
      price: "۵,۲۰۰,۰۰۰",
      views: "+170",
      stores: "32",
      genre: "digital"
    },
    {
      id: 21,
      image: "/img/ROG-Strix-GeForce-RTX-4070-SUPER-12GB-GDDR6X-OC-Edition-1.jpg",
      title: "کارت گرافیک ASUS RTX 4070 SUPER",
      price: "۴۸,۰۰۰,۰۰۰",
      views: "+95",
      stores: "11",
      genre: "digital"
    },
    {
      id: 22,
      image: "/img/sony-playstation-5-slim-digital.png",
      title: "کنسول PlayStation 5 Slim Digital",
      price: "۲۹,۰۰۰,۰۰۰",
      views: "+420",
      stores: "13",
      genre: "digital"
    },
    {
      id: 23,
      image: "/img/DeLonghi-ES685-espresso-machine.jpg",
      title: "دستگاه قهوه ساز دلونگی",
      price: "۱۶,۵۰۰,۰۰۰",
      views: "+140",
      stores: "21",
      genre: "home"
    },
    {
      id: 24,
      image: "/img/bosch-vacuum-cleaner-bgl8goldir.png",
      title: "جاروبرقی بوش مدل BGL8",
      price: "۱۲,۸۰۰,۰۰۰",
      views: "+160",
      stores: "27",
      genre: "home"
    },
    {
      id: 25,
      image: "/img/htd-fs0103wr-compress.jpg",
      title: "ماشین لباسشویی هیتاچی",
      price: "۲۴,۰۰۰,۰۰۰",
      views: "+230",
      stores: "15",
      genre: "home"
    },
    {
      id: 26,
      image: "/img/Octa-SWM-84526_p1z3-1p.jpg",
      title: "ماشین ظرفشویی اکتا",
      price: "۱۹,۲۰۰,۰۰۰",
      views: "+190",
      stores: "18",
      genre: "home"
    },
    {
      id: 27,
      image: "/img/کولرگازی-جنرال-گلد-تیتانیوم-مدل-GG-MS12000-.jpg",
      title: "کولر گازی جنرال گلد 12000",
      price: "۲۶,۵۰۰,۰۰۰",
      views: "+280",
      stores: "20",
      genre: "home"
    },
    {
      id: 28,
      image: "/img/552884.jpg",
      title: "میکروویو سامسونگ",
      price: "۸,۹۰۰,۰۰۰",
      views: "+110",
      stores: "24",
      genre: "home"
    },
    {
      id: 29,
      image: "/img/1620044889.jpg",
      title: "آون توستر پارس خزر",
      price: "۵,۶۰۰,۰۰۰",
      views: "+85",
      stores: "29",
      genre: "home"
    },
    {
      id: 30,
      image: "/img/209-edit-scaled.jpg",
      title: "چای ساز فیلیپس",
      price: "۳,۸۰۰,۰۰۰",
      views: "+75",
      stores: "31",
      genre: "home"
    },
    {
      id: 31,
      image: "/img/ab67bf.jpg",
      title: "بلندر مولینکس",
      price: "۴,۵۰۰,۰۰۰",
      views: "+65",
      stores: "26",
      genre: "home"
    },
    {
      id: 32,
      image: "/img/cavir.png",
      title: "دستگاه تصفیه آب خانگی",
      price: "۷,۲۰۰,۰۰۰",
      views: "+125",
      stores: "23",
      genre: "home"
    },
    {
      id: 33,
      image: "/img/17600_1.png",
      title: "پنکه سقفی پارس خزر",
      price: "۲,۹۰۰,۰۰۰",
      views: "+90",
      stores: "33",
      genre: "home"
    },
    {
      id: 34,
      image: "/img/Web_hero_desktop.png",
      title: "دوربین عکاسی کانن EOS R6",
      price: "۵۲,۰۰۰,۰۰۰",
      views: "+210",
      stores: "9",
      genre: "digital"
    },
    {
      id: 35,
      image: "/img/top-mobile-phone-brand-1.jpg",
      title: "گوشی موبایل هواوی P60 Pro",
      price: "۳۸,۰۰۰,۰۰۰",
      views: "+340",
      stores: "16",
      genre: "digital"
    }
  ];

  // فیلتر محصولات بر اساس دسته‌بندی
  let product_select = Category ? products.filter((product) => product.genre === Category) : products;

  return (
    <section className="product-grid-section">
      <div className="container-fluid px-3">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">{title ? `محصولات مشابه ${title}` : 'محصولات مشابه'}</h2>
          <a href="#" className="view-all-link">مشاهده تمامی محصولات</a>
        </div>

        <div className="products-grid">
          {product_select.map((product) => (
            <div key={product.id} className="product-grid-item">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;