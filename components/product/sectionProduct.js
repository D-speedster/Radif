'use client'

import { useState } from "react"
import { BsStarFill, BsBellFill } from "react-icons/bs"
import { BiGitCompare } from "react-icons/bi"
import AdsComponent from "./ads"

export default function SectionProduct() {
  const [mainImage, setMainImage] = useState('/img/iphone16.png')

  const galleryImages = [
    "/img/iphone16.png",
    "/img/gallery/2.webp",
    "/img/gallery/3.webp",
    "/img/gallery/4.webp",
  ]

  return (
    <div className="container-custom">
      <div className="row">
        <div className="col-lg-9">
          <div className="product-main mt-3 mb-3">
            <div className="container-custom">
              <div className="row">
                <div className="col-lg-1 d-lg-block d-none">
                  {galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className="gallery-thumb"
                      onClick={() => setMainImage(img)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
                <div className="col-lg-11">
                  <div className="row">
                    <div className="col-12 col-lg-4 mx-auto">
                      <div className="main-pic">
                        <img src={mainImage} className="mainpic" alt="iPhone 16" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="product-detail container-custom">
                        <span className="product-title">
                          گوشی موبایل اپل مدل iPhone 16 CH دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت
                        </span>
                        <div className="Ability mt-2">
                          <div className="d-flex align-items-center text-secondary fs-6 modern-badges">
                            <div className="d-flex align-items-center gap-1">
                              <BsStarFill color="#f9d635" size={16} />
                              <span className="fw-bold text-dark">4.6</span>
                            </div>
                            <div className="separator"></div>
                            <div className="d-flex align-items-center gap-1 hoverable">
                              <BsBellFill size={16} color="#6c757d" />
                              <span>هشدار قیمتی</span>
                            </div>
                            <div className="separator"></div>
                            <div className="d-flex align-items-center gap-1 hoverable">
                              <BiGitCompare size={16} color="#6c757d" />
                              <span>مقایسه</span>
                            </div>
                          </div>

                          <p className="mt-3"
                            style={{ fontSize: '15px', color: 'black', fontWeight: '500' }}
                          >

                            گوشی موبایل اپل مدل iPhone 16، به عنوان یکی از جدیدترین مدل‌های این برند معتبر...
                          </p>


                          <button className="btn btn-outline-dark mt-1">حافظه 256 گیگ</button>
                          <button className="btn btn-outline-dark mt-1">حافظه 128 گیگ</button>
                          <br />
                          <div className="cheapest-price mt-3 ">
                            شروع قیمت از <span>۱۵,۹۰۰,۰۰۰</span> تومان
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs" id="tabs">
            <div className="d-flex container-custom">
              {[
                { id: 'section1', label: 'فروشندگان' },
                { id: 'section2', label: 'نظرات' },
                { id: 'section3', label: 'سابقه قیمتی' },
                { id: 'section4', label: 'مشخصات' },
                { id: 'section5', label: 'مشابه' },
              ].map((item, index) => (
                <button
                  key={index}
                  style={{ border: 'none', backgroundColor: '#FFF' }}
                  className={`tab-button ${index !== 4 ? 'ms-5 pb-2' : ''}`}
                  data-scroll={item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AdsComponent img={'/img/ads.png'} />
      </div>
    </div>
  )
}
