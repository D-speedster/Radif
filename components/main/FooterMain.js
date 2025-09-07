import { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

export default function FooterMain() {
    const [email, setEmail] = useState('');
    const [statusMsg, setStatusMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // اینجا می‌توانید کد ارسال ایمیل به سرور را اضافه کنید
        setStatusMsg('ایمیل شما با موفقیت در خبرنامه ثبت شد.');
        setEmail('');
        setTimeout(() => setStatusMsg(''), 4000);
    };

    return (
        <footer className="modern-footer" role="contentinfo">
            <div className="container-custom">
                {/* نوار برند و اقدام سریع */}
                <section className="footer-top" aria-label="معرفی برند و اقدام سریع">
                    <div className="footer-top__brand">
                        <a href="/" className="brand-logo" aria-label="بازگشت به صفحه اصلی ردیف">
                            <img src="/img/radif-logo.svg" alt="لوگوی ردیف" className="footer-logo" />
                        </a>
                        <div className="brand-description">
                            <p className="main-desc">ردیف؛ مقصد لوکس برای کشف هوشمندانه محصولات</p>
                            <p className="sub-desc">از بهترین فروشگاه‌ها تا خاص‌ترین پیشنهادها؛ همه‌چیز اینجاست تا انتخاب‌های شما دقیق‌تر، سریع‌تر و لذت‌بخش‌تر باشد.</p>
                        </div>
                    </div>
                    <div className="footer-top__cta">
                        <h3 className="cta-title">فروشگاه دارید؟</h3>
                        <p className="cta-sub">همین حالا به ردیف بپیوندید و محصولات‌تان را در معرض دید هزاران کاربر قرار دهید.</p>
                        <a href="/register-store" className="cta-button" aria-label="شروع ثبت فروشگاه در ردیف">شروع کنید</a>
                    </div>
                </section>

                {/* لینک‌ها و ناوبری */}
                <nav className="footer-grid" aria-label="لینک‌های سایت">
                    <div className="footer-col">
                        <h4 className="section-title">کاوش</h4>
                        <ul className="footer-links">
                            <li><a href="/">صفحه اصلی</a></li>
                            <li><a href="/Special-Offers">پیشنهادهای ویژه</a></li>
                            <li><a href="/Blog">مجله ردیف</a></li>
                            <li><a href="/search">جستجو</a></li>
                            <li><a href="/how-to-use">چطور کار می‌کند؟</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="section-title">خدمات فروشندگان</h4>
                        <ul className="footer-links">
                            <li><a href="/stores">لیست فروشگاه‌ها</a></li>
                            <li><a href="/register-store">ثبت نام فروشگاه</a></li>
                            <li><a href="/panel">ورود به پنل</a></li>
                            <li><a href="/contact">همکاری با ردیف</a></li>
                            <li><a href="/about">درباره ردیف</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="section-title">پشتیبانی</h4>
                        <ul className="footer-links">
                            <li><a href="/support">مرکز پشتیبانی</a></li>
                            <li><a href="/faq">سوالات متداول</a></li>
                            <li><a href="/safe-shopping">راهنمای خرید امن</a></li>
                            <li><a href="/terms">قوانین و مقررات</a></li>
                            <li><a href="/privacy">حریم خصوصی</a></li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h4 className="section-title">همراه خبرها</h4>
                        <p className="sub-desc">برای دریافت جدیدترین تخفیف‌ها و خبرها ایمیل خود را وارد کنید.</p>
                        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
                            <input
                                type="email"
                                className="newsletter-input"
                                placeholder="ایمیل شما"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="ایمیل برای عضویت در خبرنامه"
                                aria-describedby="newsletter-status"
                            />
                            <button type="submit" className="newsletter-btn" aria-label="ثبت ایمیل در خبرنامه">
                                عضویت
                            </button>
                        </form>
                        <p id="newsletter-status" className="sr-only" aria-live="polite">{statusMsg}</p>
                    </div>
                </nav>

                {/* شبکه‌های اجتماعی و مجوزها */}
                <section className="trust-strip" aria-label="شبکه‌های اجتماعی و مجوزها">
                    <div className="social-group">
                        <h5 className="social-heading">ما را دنبال کنید</h5>
                        <div className="social-icons" role="list">
                            <a href="https://instagram.com" className="social-icon" aria-label="اینستاگرام ردیف" role="listitem">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" className="social-icon" aria-label="توییتر ردیف" role="listitem">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" className="social-icon" aria-label="لینکدین ردیف" role="listitem">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://telegram.org" className="social-icon" aria-label="تلگرام ردیف" role="listitem">
                                <FaTelegramPlane />
                            </a>
                        </div>
                    </div>

                    <div className="certificates-grid">
                        <div className="certificate-item">
                            <img src="/img/new-enamad.png" alt="نماد اعتماد الکترونیکی" />
                        </div>
                        <div className="certificate-item">
                            <img src="/img/markazi.webp" alt="مجوز بانک مرکزی" />
                        </div>
                        <div className="certificate-item">
                            <img src="/img/work.webp" alt="مجوز وزارت کار" />
                        </div>
                        <div className="certificate-item">
                            <img src="/img/samandehi.webp" alt="نماد ساماندهی" />
                        </div>
                    </div>
                </section>
            </div>

            <div className="footer-bottom">
                <div className="container-custom">
                    <div className="copyright-text">
                        © {new Date().getFullYear()} - تمام حقوق مادی و معنوی این سایت متعلق به ردیف است.
                    </div>
                    <div className="footer-bottom-links">
                        <a href="/privacy">حریم خصوصی</a>
                        <a href="/terms">قوانین و مقررات</a>
                        <a href="/faq">سوالات متداول</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}