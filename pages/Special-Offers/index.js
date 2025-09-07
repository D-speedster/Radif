import Header_Main from '../../components/main/header';
import FooterMain from "../../components/main/FooterMain";
import Link from 'next/link';
import Head from 'next/head';
import { FaRegHeart, FaFire, FaPercent, FaClock, FaGift, FaEye, FaStore, FaEnvelope } from "react-icons/fa";
import { BsLightning, BsStarFill } from "react-icons/bs";
import { useState, useEffect } from 'react';

export default function SpecialOffers() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 45,
        seconds: 30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const flashSaleProducts = [
        {
            id: 1,
            image: "/img/iphone16.png",
            title: "گوشی موبایل اپل مدل iPhone 16",
            originalPrice: "۵۵,۰۰۰,۰۰۰",
            salePrice: "۴۵,۰۰۰,۰۰۰",
            discount: "18%",
            rating: 4.8,
            sold: 45,
            total: 100
        },
        {
            id: 2,
            image: "/img/a55.jpg",
            title: "گوشی موبایل سامسونگ مدل Galaxy A55",
            originalPrice: "۱۵,۰۰۰,۰۰۰",
            salePrice: "۱۲,۵۰۰,۰۰۰",
            discount: "17%",
            rating: 4.6,
            sold: 78,
            total: 150
        },
        {
            id: 3,
            image: "/img/vivobook.png",
            title: "لپ تاپ ایسوس مدل VivoBook 15",
            originalPrice: "۲۸,۰۰۰,۰۰۰",
            salePrice: "۲۲,۰۰۰,۰۰۰",
            discount: "21%",
            rating: 4.7,
            sold: 23,
            total: 80
        },
        {
            id: 4,
            image: "/img/watch9.jpg",
            title: "ساعت هوشمند اپل واچ سری 9",
            originalPrice: "۱۸,۰۰۰,۰۰۰",
            salePrice: "۱۴,۵۰۰,۰۰۰",
            discount: "19%",
            rating: 4.9,
            sold: 67,
            total: 120
        }
    ];

    const dailyDeals = [
        {
            id: 5,
            image: "/img/55LJ61_A_Desktop_01.jpg",
            title: "تلویزیون ال جی مدل 55 اینچ 4K",
            originalPrice: "۴۲,۰۰۰,۰۰۰",
            salePrice: "۳۵,۰۰۰,۰۰۰",
            discount: "17%",
            rating: 4.5
        },
        {
            id: 6,
            image: "/img/emersunkala40new12.jpg",
            title: "یخچال فریزر دوقلو امرسان",
            originalPrice: "۳۵,۰۰۰,۰۰۰",
            salePrice: "۲۸,۰۰۰,۰۰۰",
            discount: "20%",
            rating: 4.4
        },
        {
            id: 7,
            image: "/img/airpod.png",
            title: "ایرپاد اپل مدل Pro 2",
            originalPrice: "۱۲,۰۰۰,۰۰۰",
            salePrice: "۹,۵۰۰,۰۰۰",
            discount: "21%",
            rating: 4.8
        },
        {
            id: 8,
            image: "/img/ps4.png",
            title: "کنسول بازی سونی PlayStation 5",
            originalPrice: "۳۰,۰۰۰,۰۰۰",
            salePrice: "۲۵,۰۰۰,۰۰۰",
            discount: "17%",
            rating: 4.9
        },
        {
            id: 9,
            image: "/img/mac.png",
            title: "لپ تاپ اپل MacBook Air M2",
            originalPrice: "۶۵,۰۰۰,۰۰۰",
            salePrice: "۵۵,۰۰۰,۰۰۰",
            discount: "15%",
            rating: 4.9
        },
        {
            id: 10,
            image: "/img/samsung.jpg",
            title: "تبلت سامسونگ Galaxy Tab S9",
            originalPrice: "۲۵,۰۰۰,۰۰۰",
            salePrice: "۲۰,۰۰۰,۰۰۰",
            discount: "20%",
            rating: 4.6
        }
    ];

    const categories = [
        { name: "موبایل و تبلت", icon: "📱", discount: "تا ۳۰%" },
        { name: "لپ تاپ و کامپیوتر", icon: "💻", discount: "تا ۲۵%" },
        { name: "لوازم خانگی", icon: "🏠", discount: "تا ۴۰%" },
        { name: "کنسول بازی", icon: "🎮", discount: "تا ۲۰%" },
        { name: "ساعت هوشمند", icon: "⌚", discount: "تا ۳۵%" },
        { name: "هدفون و اسپیکر", icon: "🎧", discount: "تا ۲۸%" }
    ];

    return (
        <>
            <Head>
                <title>پیشنهادات ویژه - رادیف</title>
                <meta name="description" content="بهترین پیشنهادات ویژه و تخفیف‌های شگفت‌انگیز" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="/css/theme.css" />
                <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/css/neo-hero.css" />
                <link rel="stylesheet" href="/css/special-offers.css" />
            </Head>
            <Header_Main />
            
            {/* Hero Section - بازطراحی شده مشابه صفحه اصلی */}
            <div className="neo-hero special-offers-hero">
                {/* پس‌زمینه با افکت‌های متحرک */}
                <div className="neo-background" aria-hidden="true">
                    <div className="neo-gradient special-gradient"></div>
                    <div className="neo-grid"></div>
                    <div className="neo-circles">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`neo-circle circle-${i + 1}`}></div>
                        ))}
                    </div>
                    <div className="neo-particles">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className={`neo-particle particle-${i + 1}`}></div>
                        ))}
                    </div>
                </div>

                {/* محتوای اصلی - طراحی مینیمال و مدرن */}
                <div className="neo-container">
                    <div className="neo-content-wrapper special-offers-content">
                        <div className="neo-content-left">
                            {/* نشان ویژه */}
                            <div className="neo-badge" aria-label="special-offers-badge">
                                <span className="badge-icon">🔥</span>
                                <span className="badge-text">پیشنهادات ویژه و تخفیف‌های استثنایی</span>
                            </div>

                            {/* عنوان اصلی */}
                            <h1 className="neo-title">
                                <div className="title-line">فرصت‌های</div>
                                <div className="title-line">خرید</div>
                                <div className="title-line highlight special-highlight">استثنایی</div>
                            </h1>

                            {/* زیرعنوان */}
                            <h2 className="neo-subtitle">بهترین تخفیف‌ها و پیشنهادات روز را از دست ندهید!</h2>

                            {/* توضیحات */}
                            <p className="neo-description">در این صفحه می‌توانید جدیدترین پیشنهادات ویژه و تخفیف‌های شگفت‌انگیز محصولات را مشاهده کنید.</p>

                            {/* نشان‌های ویژگی */}
                            <div className="special-offers-badges">
                                <div className="special-badge">
                                    <FaPercent className="badge-icon" />
                                    <span>تخفیف تا ۵۰%</span>
                                </div>
                                <div className="special-badge">
                                    <FaGift className="badge-icon" />
                                    <span>ارسال رایگان</span>
                                </div>
                                <div className="special-badge">
                                    <BsLightning className="badge-icon" />
                                    <span>فروش ویژه</span>
                                </div>
                                <div className="special-badge">
                                    <FaClock className="badge-icon" />
                                    <span>زمان محدود</span>
                                </div>
                            </div>
                        </div>

                        {/* سمت راست - نمایش تایمر */}
                        <div className="neo-content-right">
                            <div className="special-offers-timer">
                                <div className="timer-title">پایان تخفیف‌های ویژه</div>
                                <div className="timer-display">
                                    <div className="timer-unit">
                                        <div className="timer-value">{timeLeft.hours}</div>
                                        <div className="timer-label">ساعت</div>
                                    </div>
                                    <div className="timer-separator">:</div>
                                    <div className="timer-unit">
                                        <div className="timer-value">{timeLeft.minutes}</div>
                                        <div className="timer-label">دقیقه</div>
                                    </div>
                                    <div className="timer-separator">:</div>
                                    <div className="timer-unit">
                                        <div className="timer-value">{timeLeft.seconds}</div>
                                        <div className="timer-label">ثانیه</div>
                                    </div>
                                </div>
                                <Link href="#flash-sale" className="neo-search-btn timer-action">
                                    <span className="btn-text">مشاهده پیشنهادات</span>
                                    <div className="btn-arrow" aria-hidden="true">→</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flash Sale Section */}
            <section id="flash-sale" className="flash-sale-section py-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex align-items-center mb-3">
                                    <BsLightning className="text-warning fs-2 me-3" />
                                    <div>
                                        <h2 className="fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                                            فروش ویژه
                                        </h2>
                                        <p className="text-muted mb-0">محدود به موجودی انبار</p>
                                    </div>
                                </div>
                                <div className="timer-box p-3 rounded" style={{
                                    background: 'var(--primary-gradient)',
                                    color: 'white'
                                }}>
                                    <div className="d-flex align-items-center">
                                        <FaClock className="me-2" />
                                        <span className="fw-bold">
                                            {String(timeLeft.hours).padStart(2, '0')}:
                                            {String(timeLeft.minutes).padStart(2, '0')}:
                                            {String(timeLeft.seconds).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {flashSaleProducts.map(product => (
                            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card h-100 shadow-sm border-0 position-relative" style={{
                                    borderRadius: 'var(--radius-lg)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="position-absolute top-0 start-0 m-2 z-index-1">
                                        <span className="badge bg-danger fs-6">
                                            {product.discount} تخفیف
                                        </span>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-2 z-index-1">
                                        <button className="btn btn-outline-light btn-sm rounded-circle">
                                            <FaRegHeart />
                                        </button>
                                    </div>
                                    
                                    <div className="card-img-container p-3">
                                        <img 
                                            src={product.image} 
                                            className="card-img-top" 
                                            alt={product.title}
                                            style={{
                                                height: '200px',
                                                objectFit: 'contain',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title text-truncate mb-2">
                                            {product.title}
                                        </h6>
                                        
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="d-flex align-items-center me-3">
                                                <BsStarFill className="text-warning me-1" style={{ fontSize: '0.8rem' }} />
                                                <span className="small text-muted">{product.rating}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="price-section mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <span className="text-decoration-line-through text-muted small">
                                                        {product.originalPrice} تومان
                                                    </span>
                                                    <div className="fw-bold" style={{ color: 'var(--primary-color)' }}>
                                                        {product.salePrice} تومان
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="progress mb-2" style={{ height: '6px' }}>
                                            <div 
                                                className="progress-bar" 
                                                style={{ 
                                                    width: `${(product.sold / product.total) * 100}%`,
                                                    background: 'var(--primary-gradient)'
                                                }}
                                            ></div>
                                        </div>
                                        <small className="text-muted">
                                            فروخته شده: {product.sold} از {product.total}
                                        </small>
                                        
                                        <Link href={`/product/${product.id}`} className="btn btn-primary mt-auto">
                                            مشاهده محصول
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section py-5" style={{ backgroundColor: 'var(--neutral-50)' }}>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                                دسته‌بندی‌های پرتخفیف
                            </h2>
                            <p className="text-muted">بهترین تخفیف‌ها در هر دسته‌بندی</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {categories.map((category, index) => (
                            <div key={index} className="col-lg-2 col-md-4 col-6">
                                <div className="card text-center h-100 border-0 shadow-sm" style={{
                                    borderRadius: 'var(--radius-lg)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}>
                                    <div className="card-body p-4">
                                        <div className="fs-1 mb-3">{category.icon}</div>
                                        <h6 className="card-title mb-2">{category.name}</h6>
                                        <span className="badge" style={{
                                            background: 'var(--primary-gradient)',
                                            color: 'white'
                                        }}>
                                            {category.discount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Deals Section */}
            <section className="daily-deals-section py-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                                پیشنهادات روزانه
                            </h2>
                            <p className="text-muted">محصولات منتخب با بهترین قیمت‌ها</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {dailyDeals.map(product => (
                            <div key={product.id} className="col-lg-4 col-md-6">
                                <div className="card h-100 shadow-sm border-0 position-relative" style={{
                                    borderRadius: 'var(--radius-lg)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="position-absolute top-0 start-0 m-2 z-index-1">
                                        <span className="badge bg-success fs-6">
                                            {product.discount} تخفیف
                                        </span>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-2 z-index-1">
                                        <button className="btn btn-outline-light btn-sm rounded-circle">
                                            <FaRegHeart />
                                        </button>
                                    </div>
                                    
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className="p-3">
                                                <img 
                                                    src={product.image} 
                                                    className="img-fluid rounded" 
                                                    alt={product.title}
                                                    style={{
                                                        height: '150px',
                                                        objectFit: 'contain',
                                                        width: '100%'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title mb-2">
                                                    {product.title}
                                                </h6>
                                                
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <BsStarFill className="text-warning me-1" style={{ fontSize: '0.8rem' }} />
                                                        <span className="small text-muted">{product.rating}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="price-section mb-3">
                                                    <span className="text-decoration-line-through text-muted small d-block">
                                                        {product.originalPrice} تومان
                                                    </span>
                                                    <div className="fw-bold" style={{ color: 'var(--primary-color)' }}>
                                                        {product.salePrice} تومان
                                                    </div>
                                                </div>
                                                
                                                <Link href={`/product/${product.id}`} className="btn btn-outline-primary btn-sm">
                                                    مشاهده محصول
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section py-5" style={{
                background: 'var(--primary-gradient)',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h3 className="fw-bold mb-3">
                                از جدیدترین پیشنهادات باخبر شوید
                            </h3>
                            <p className="mb-4">
                                عضو خبرنامه ردیف شوید و اولین نفری باشید که از تخفیف‌های ویژه مطلع می‌شوید
                            </p>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="ایمیل خود را وارد کنید"
                                            style={{ borderRadius: 'var(--radius-md) 0 0 var(--radius-md)' }}
                                        />
                                        <button 
                                            className="btn btn-warning fw-bold"
                                            style={{ borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}
                                        >
                                            عضویت
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterMain />
            
            <style jsx>{`
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg) !important;
                }
                
                .categories-section .card:hover {
                    background: var(--primary-gradient) !important;
                    color: white !important;
                }
                
                .categories-section .card:hover .badge {
                    background: white !important;
                    color: var(--primary-color) !important;
                }
                
                .timer-box {
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                /* Responsive Design Improvements */
                @media (max-width: 1200px) {
                    .col-lg-3 {
                        flex: 0 0 auto;
                        width: 50%;
                    }
                    
                    .col-lg-2 {
                        flex: 0 0 auto;
                        width: 33.333333%;
                    }
                }
                
                @media (max-width: 992px) {
                    .col-lg-3 {
                        flex: 0 0 auto;
                        width: 50%;
                    }
                    
                    .col-lg-2 {
                        flex: 0 0 auto;
                        width: 50%;
                    }
                    
                    .col-lg-4 {
                        flex: 0 0 auto;
                        width: 100%;
                    }
                }
                
                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 2rem !important;
                    }
                    
                    .hero-section {
                        padding: 40px 0 !important;
                    }
                    
                    .timer-box {
                        margin-top: 1rem;
                        width: 100%;
                        text-align: center;
                    }
                    
                    .col-lg-3, .col-md-6, .col-sm-6 {
                        flex: 0 0 auto;
                        width: 100%;
                        margin-bottom: 1rem;
                    }
                    
                    .col-lg-2, .col-md-4 {
                        flex: 0 0 auto;
                        width: 50%;
                    }
                    
                    .d-flex.justify-content-between {
                        flex-direction: column;
                        align-items: center !important;
                        text-align: center;
                    }
                    
                    .d-flex.justify-content-between > div {
                        margin-bottom: 1rem;
                    }
                    
                    .card-body {
                        padding: 1rem 0.75rem;
                    }
                    
                    .badge {
                        font-size: 0.7rem;
                        padding: 0.25rem 0.5rem;
                    }
                }
                
                @media (max-width: 576px) {
                    .col-6 {
                        flex: 0 0 auto;
                        width: 100%;
                    }
                    
                    .hero-section {
                        padding: 30px 0 !important;
                    }
                    
                    .hero-section h1 {
                        font-size: 1.5rem !important;
                    }
                    
                    .hero-section .lead {
                        font-size: 1rem;
                    }
                    
                    .card-img-container {
                        padding: 1rem !important;
                    }
                    
                    .card-img-container img {
                        height: 150px !important;
                    }
                    
                    .fs-1 {
                        font-size: 2rem !important;
                    }
                    
                    .input-group {
                        flex-direction: column;
                    }
                    
                    .input-group .form-control,
                    .input-group .btn {
                        border-radius: var(--radius-md) !important;
                        margin-bottom: 0.5rem;
                    }
                }
                
                /* Fix for container responsiveness */
                .container {
                    max-width: 100%;
                    padding-left: 15px;
                    padding-right: 15px;
                }
                
                @media (min-width: 576px) {
                    .container {
                        max-width: 540px;
                    }
                }
                
                @media (min-width: 768px) {
                    .container {
                        max-width: 720px;
                    }
                }
                
                @media (min-width: 992px) {
                    .container {
                        max-width: 960px;
                    }
                }
                
                @media (min-width: 1200px) {
                    .container {
                        max-width: 1140px;
                    }
                }
                
                @media (min-width: 1400px) {
                    .container {
                        max-width: 1320px;
                    }
                }
            `}</style>
        </>
    )
}