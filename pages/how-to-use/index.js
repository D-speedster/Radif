import Header_Main from '../../components/main/header';
import FooterMain from "../../components/main/FooterMain";
import Head from 'next/head';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaCheckCircle, FaMobile, FaDesktop, FaShieldAlt, FaClock, FaGift, FaQuestionCircle } from 'react-icons/fa';
import { BsStarFill, BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

export default function HowToUse() {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "ثبت نام و ورود",
            description: "ابتدا در سایت ثبت نام کنید یا وارد حساب کاربری خود شوید",
            icon: <FaUser className="text-primary" />,
            details: [
                "روی دکمه ورود/ثبت نام کلیک کنید",
                "اطلاعات خود را وارد کنید",
                "ایمیل خود را تایید کنید",
                "پروفایل خود را تکمیل کنید"
            ]
        },
        {
            id: 2,
            title: "جستجوی محصولات",
            description: "محصول مورد نظر خود را با استفاده از جستجو یا دسته‌بندی‌ها پیدا کنید",
            icon: <FaSearch className="text-primary" />,
            details: [
                "از نوار جستجو استفاده کنید",
                "دسته‌بندی‌ها را مرور کنید",
                "فیلترهای قیمت و برند را اعمال کنید",
                "نتایج را مقایسه کنید"
            ]
        },
        {
            id: 3,
            title: "مقایسه قیمت‌ها",
            description: "قیمت محصول را در فروشگاه‌های مختلف مقایسه کنید",
            icon: <BsStarFill className="text-primary" />,
            details: [
                "لیست فروشگاه‌ها را مشاهده کنید",
                "قیمت‌ها را مقایسه کنید",
                "امتیاز فروشگاه‌ها را بررسی کنید",
                "بهترین پیشنهاد را انتخاب کنید"
            ]
        },
        {
            id: 4,
            title: "خرید محصول",
            description: "به فروشگاه مورد نظر مراجعه کرده و خرید خود را انجام دهید",
            icon: <FaShoppingCart className="text-primary" />,
            details: [
                "روی لینک فروشگاه کلیک کنید",
                "محصول را به سبد خرید اضافه کنید",
                "فرآیند پرداخت را تکمیل کنید",
                "سفارش خود را پیگیری کنید"
            ]
        }
    ];

    const features = [
        {
            icon: <FaShieldAlt className="text-success" />,
            title: "امنیت بالا",
            description: "تمام اطلاعات شما با بالاترین استانداردهای امنیتی محافظت می‌شود"
        },
        {
            icon: <FaClock className="text-info" />,
            title: "به‌روزرسانی لحظه‌ای",
            description: "قیمت‌ها و موجودی محصولات به صورت لحظه‌ای به‌روزرسانی می‌شود"
        },
        {
            icon: <FaGift className="text-warning" />,
            title: "پیشنهادات ویژه",
            description: "از تخفیف‌ها و پیشنهادات ویژه فروشگاه‌ها مطلع شوید"
        },
        {
            icon: <FaMobile className="text-primary" />,
            title: "سازگار با موبایل",
            description: "در هر زمان و مکان از طریق موبایل خود دسترسی داشته باشید"
        }
    ];

    const faqs = [
        {
            question: "آیا استفاده از سایت رایگان است؟",
            answer: "بله، تمام خدمات مقایسه قیمت ما کاملاً رایگان است و هیچ هزینه‌ای از شما دریافت نمی‌شود."
        },
        {
            question: "چگونه می‌توانم اطمینان حاصل کنم که قیمت‌ها دقیق هستند؟",
            answer: "قیمت‌ها به صورت خودکار و لحظه‌ای از فروشگاه‌های معتبر دریافت می‌شود و دقت بالایی دارد."
        },
        {
            question: "آیا می‌توانم محصولات را در لیست علاقه‌مندی‌ها ذخیره کنم؟",
            answer: "بله، پس از ثبت نام می‌توانید محصولات مورد علاقه خود را ذخیره کرده و پیگیری کنید."
        },
        {
            question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
            answer: "از طریق بخش تماس با ما یا ایمیل support@radif.com می‌توانید با تیم پشتیبانی در ارتباط باشید."
        }
    ];

    return (
        <>
            <Head>
                <title>راهنمای استفاده - رادیف</title>
                <meta name="description" content="راهنمای کامل استفاده از سایت مقایسه قیمت رادیف" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="/css/theme.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            </Head>
            
            <Header_Main />
            
            {/* Hero Section */}
            <section className="hero-section py-5" style={{
                background: 'var(--primary-gradient)',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="display-4 fw-bold mb-4">راهنمای استفاده از رادیف</h1>
                            <p className="lead mb-4">
                                با رادیف، مقایسه قیمت و خرید هوشمند را تجربه کنید
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <div className="d-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-2">
                                    <FaCheckCircle className="me-2" />
                                    <span>رایگان</span>
                                </div>
                                <div className="d-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-2">
                                    <FaCheckCircle className="me-2" />
                                    <span>آسان</span>
                                </div>
                                <div className="d-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-2">
                                    <FaCheckCircle className="me-2" />
                                    <span>سریع</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="fw-bold mb-3">مراحل استفاده</h2>
                            <p className="text-muted">در چند قدم ساده، بهترین قیمت را پیدا کنید</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="list-group">
                                {steps.map((step, index) => (
                                    <button
                                        key={step.id}
                                        className={`list-group-item list-group-item-action d-flex align-items-center p-3 border-0 mb-2 rounded ${
                                            activeStep === step.id ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveStep(step.id)}
                                        style={{
                                            background: activeStep === step.id ? 'var(--primary-gradient)' : 'var(--neutral-50)',
                                            color: activeStep === step.id ? 'white' : 'var(--neutral-800)'
                                        }}
                                    >
                                        <div className="me-3 fs-4">
                                            {step.icon}
                                        </div>
                                        <div className="text-start">
                                            <h6 className="mb-1 fw-bold">مرحله {step.id}</h6>
                                            <small>{step.title}</small>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    {steps.map((step) => (
                                        activeStep === step.id && (
                                            <div key={step.id}>
                                                <div className="d-flex align-items-center mb-4">
                                                    <div className="me-3 fs-2">
                                                        {step.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="fw-bold mb-2">{step.title}</h3>
                                                        <p className="text-muted mb-0">{step.description}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="row">
                                                    {step.details.map((detail, index) => (
                                                        <div key={index} className="col-md-6 mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                                                                <span>{detail}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5" style={{ background: 'var(--neutral-50)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="fw-bold mb-3">ویژگی‌های رادیف</h2>
                            <p className="text-muted">چرا رادیف بهترین انتخاب برای مقایسه قیمت است؟</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body p-4">
                                        <div className="fs-1 mb-3">
                                            {feature.icon}
                                        </div>
                                        <h5 className="fw-bold mb-3">{feature.title}</h5>
                                        <p className="text-muted mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="fw-bold mb-3">سوالات متداول</h2>
                            <p className="text-muted">پاسخ سوالات رایج کاربران</p>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed fw-bold"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faq${index}`}
                                                aria-expanded="false"
                                                style={{
                                                    background: 'var(--neutral-50)',
                                                    border: 'none'
                                                }}
                                            >
                                                <FaQuestionCircle className="text-primary me-3" />
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`faq${index}`}
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5" style={{
                background: 'var(--primary-gradient)',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="fw-bold mb-4">آماده شروع هستید؟</h2>
                            <p className="lead mb-4">
                                همین حالا شروع کنید و بهترین قیمت‌ها را پیدا کنید
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Link href="/" className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                                    شروع جستجو
                                    <BsArrowRight className="ms-2" />
                                </Link>
                                <Link href="/Special-Offers" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                                    پیشنهادات ویژه
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterMain />
            
            <style jsx>{`
                .card:hover {
                    transform: translateY(-5px);
                    transition: all 0.3s ease;
                }
                
                .list-group-item {
                    transition: all 0.3s ease;
                }
                
                .accordion-button:not(.collapsed) {
                    background: var(--primary-gradient) !important;
                    color: white !important;
                }
                
                .accordion-button:focus {
                    box-shadow: none;
                    border: none;
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 2rem !important;
                    }
                    
                    .hero-section {
                        padding: 40px 0 !important;
                    }
                    
                    .col-lg-4 {
                        margin-bottom: 2rem;
                    }
                    
                    .fs-1 {
                        font-size: 2rem !important;
                    }
                    
                    .fs-2 {
                        font-size: 1.5rem !important;
                    }
                    
                    .card-body {
                        padding: 1.5rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .hero-section h1 {
                        font-size: 1.5rem !important;
                    }
                    
                    .hero-section .lead {
                        font-size: 1rem;
                    }
                    
                    .d-flex.gap-3 {
                        gap: 0.5rem !important;
                    }
                    
                    .btn-lg {
                        padding: 0.75rem 1.5rem !important;
                        font-size: 1rem !important;
                    }
                }
                
                /* Container responsiveness */
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
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </>
    )
}