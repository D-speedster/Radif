import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header_Main from '../../../components/main/header';
import FooterMain from '../../../components/main/FooterMain';
import { FaUsers, FaEye, FaShieldAlt, FaHeart, FaRocket, FaGlobe, FaAward, FaHandshake, FaChartLine, FaTrophy, FaStore } from 'react-icons/fa';
import { BsCheckCircle, BsStarFill, BsGraphUp, BsShieldCheck, BsLightning } from 'react-icons/bs';
import { HiSparkles, HiTrendingUp } from 'react-icons/hi';

export default function About() {
    const [activeTab, setActiveTab] = useState('about');
    const [counters, setCounters] = useState({
        users: 0,
        products: 0,
        stores: 0,
        satisfaction: 0
    });

    useEffect(() => {
        const animateCounters = () => {
            const targets = {
                users: 50000,
                products: 8000000,
                stores: 6300,
                satisfaction: 98
            };

            Object.keys(targets).forEach(key => {
                let current = 0;
                const target = targets[key];
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
                }, 20);
            });
        };

        const timer = setTimeout(animateCounters, 500);
        return () => clearTimeout(timer);
    }, []);

    const tabContent = {
        about: {
            title: 'درباره ردیف',
            content: (
                <div className="about-content">
                    <div className="hero-section mb-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="display-5 fw-bold text-primary mb-4">ردیف، همراه شما در خرید هوشمند</h2>
                                <p className="lead mb-4">
                                    ردیف بزرگترین پلتفرم مقایسه قیمت و خرید آنلاین در ایران است که با هدف کمک به مصرف‌کنندگان برای یافتن بهترین محصولات با بهترین قیمت‌ها طراحی شده است.
                                </p>
                                <div className="d-flex gap-3">
                                    <Link href="/Special-Offers" className="btn btn-primary btn-lg">
                                        <FaRocket className="me-2" />
                                        مشاهده پیشنهادات ویژه
                                    </Link>
                                    <Link href="/how-to-use" className="btn btn-outline-primary btn-lg">
                                        نحوه استفاده
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="modern-stats-container">
                                    <div className="stats-header mb-4">
                                        <h3 className="text-center mb-3">
                                            <HiSparkles className="me-2" />
                                            آمار زنده پلتفرم
                                        </h3>
                                        <p className="text-center text-muted">داده‌های به‌روز شده در لحظه</p>
                                    </div>
                                    <div className="modern-stats-grid">
                                        <div className="modern-stat-card users">
                                            <div className="stat-header">
                                                <FaUsers className="stat-icon" />
                                                <HiTrendingUp className="trend-icon" />
                                            </div>
                                            <div className="stat-content">
                                                <h3>{counters.users.toLocaleString()}</h3>
                                                <p>کاربر فعال</p>
                                                <span className="growth-badge">+12% این ماه</span>
                                            </div>
                                        </div>
                                        <div className="modern-stat-card products">
                                            <div className="stat-header">
                                                <FaStore className="stat-icon" />
                                                <BsGraphUp className="trend-icon" />
                                            </div>
                                            <div className="stat-content">
                                                <h3>{counters.products.toLocaleString()}</h3>
                                                <p>محصول</p>
                                                <span className="growth-badge">+8% این ماه</span>
                                            </div>
                                        </div>
                                        <div className="modern-stat-card stores">
                                            <div className="stat-header">
                                                <FaGlobe className="stat-icon" />
                                                <FaChartLine className="trend-icon" />
                                            </div>
                                            <div className="stat-content">
                                                <h3>{counters.stores.toLocaleString()}</h3>
                                                <p>فروشگاه</p>
                                                <span className="growth-badge">+15% این ماه</span>
                                            </div>
                                        </div>
                                        <div className="modern-stat-card satisfaction">
                                            <div className="stat-header">
                                                <FaTrophy className="stat-icon" />
                                                <BsStarFill className="trend-icon" />
                                            </div>
                                            <div className="stat-content">
                                                <h3>{counters.satisfaction}%</h3>
                                                <p>رضایت کاربران</p>
                                                <span className="growth-badge">عالی</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features-section mb-5">
                        <h3 className="text-center mb-5">چرا ردیف؟</h3>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card text-center">
                                    <FaShieldAlt className="feature-icon mb-3" />
                                    <h5>خرید امن</h5>
                                    <p>تمامی خریدهای شما تا سقف ۵۰ میلیون تومان تضمین می‌شود</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card text-center">
                                    <FaAward className="feature-icon mb-3" />
                                    <h5>کیفیت برتر</h5>
                                    <p>بررسی دقیق کیفیت محصولات و فروشگاه‌ها قبل از معرفی</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card text-center">
                                    <FaHandshake className="feature-icon mb-3" />
                                    <h5>پشتیبانی ۲۴/۷</h5>
                                    <p>تیم پشتیبانی ما همیشه آماده کمک به شما است</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card text-center">
                                    <FaHeart className="feature-icon mb-3" />
                                    <h5>رایگان</h5>
                                    <p>تمامی خدمات ردیف کاملاً رایگان و بدون هیچ هزینه‌ای است</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mission-section">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <h4 className="text-primary mb-3">ماموریت ما</h4>
                                <p>
                                    ماموریت ردیف کمک به مصرف‌کنندگان برای یافتن محصولات بهتر و قیمت‌های بهتر است. 
                                    هر ماه ما با مقایسه قیمت‌های محصولات، به صدها هزار مصرف‌کننده کمک می‌کنیم تا 
                                    محصولات بهتر و ارزان‌تری پیدا کنند و در هزینه‌های خود صرفه‌جویی کنند.
                                </p>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <h4 className="text-primary mb-3">چشم‌انداز ما</h4>
                                <p>
                                    چشم‌انداز ما این است که یک منبع مستقل و معتبر باشیم که مصرف‌کننده همیشه بتواند 
                                    هنگام مقایسه محصولات آنلاین به آن اعتماد کند. ما می‌خواهیم به خریداران کمک کنیم 
                                    تا تصمیمات هوشمندانه‌تری بگیرند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        team: {
            title: 'تیم ردیف',
            content: (
                <div className="team-content">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-primary mb-4">تیم متخصص ردیف</h2>
                        <p className="lead">
                            تیم ما متشکل از متخصصان متعهد و با تجربه‌ای است که در تلاشند بهترین خدمات را به شما ارائه دهند.
                        </p>
                    </div>
                    
                    <div className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card">
                                <div className="team-avatar">
                                    <FaUsers className="avatar-icon" />
                                </div>
                                <h5>تیم توسعه</h5>
                                <p>متخصصان برنامه‌نویسی و توسعه نرم‌افزار که پلتفرم ردیف را طراحی و پیاده‌سازی کرده‌اند.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card">
                                <div className="team-avatar">
                                    <FaEye className="avatar-icon" />
                                </div>
                                <h5>تیم طراحی</h5>
                                <p>طراحان UI/UX که تجربه کاربری بی‌نظیر و رابط کاربری زیبا را برای شما فراهم کرده‌اند.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card">
                                <div className="team-avatar">
                                    <FaHandshake className="avatar-icon" />
                                </div>
                                <h5>تیم پشتیبانی</h5>
                                <p>کارشناسان پشتیبانی که ۲۴ ساعته آماده پاسخگویی به سوالات و مشکلات شما هستند.</p>
                            </div>
                        </div>
                    </div>

                    <div className="modern-values-section">
                        <div className="values-header text-center mb-5">
                            <h4 className="display-6 fw-bold text-primary mb-3">
                                <HiSparkles className="me-2" />
                                ارزش‌های بنیادین ما
                            </h4>
                            <p className="lead text-muted">اصولی که ما را در مسیر موفقیت هدایت می‌کند</p>
                        </div>
                        <div className="modern-values-grid">
                            <div className="modern-value-card quality">
                                <div className="value-icon-container">
                                    <BsShieldCheck className="modern-value-icon" />
                                </div>
                                <h5>کیفیت و اعتماد</h5>
                                <p>تعهد به ارائه بالاترین کیفیت خدمات و حفظ اعتماد کاربران</p>
                                <div className="value-highlight"></div>
                            </div>
                            <div className="modern-value-card transparency">
                                <div className="value-icon-container">
                                    <FaEye className="modern-value-icon" />
                                </div>
                                <h5>شفافیت کامل</h5>
                                <p>ارائه اطلاعات دقیق و شفاف برای تصمیم‌گیری بهتر کاربران</p>
                                <div className="value-highlight"></div>
                            </div>
                            <div className="modern-value-card innovation">
                                <div className="value-icon-container">
                                    <BsLightning className="modern-value-icon" />
                                </div>
                                <h5>نوآوری مستمر</h5>
                                <p>پیشرو در فناوری و بهبود مستمر تجربه کاربری</p>
                                <div className="value-highlight"></div>
                            </div>
                            <div className="modern-value-card privacy">
                                <div className="value-icon-container">
                                    <FaShieldAlt className="modern-value-icon" />
                                </div>
                                <h5>حریم خصوصی</h5>
                                <p>احترام کامل به حریم خصوصی و امنیت اطلاعات کاربران</p>
                                <div className="value-highlight"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        rules: {
            title: 'قوانین و مقررات',
            content: (
                <div className="rules-content">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-primary mb-4">قوانین و مقررات ردیف</h2>
                        <p className="lead">
                            لطفاً قبل از استفاده از خدمات ردیف، این قوانین را به دقت مطالعه فرمایید.
                        </p>
                    </div>

                    <div className="rules-sections">
                        <div className="rule-section">
                            <h4 className="text-primary mb-3">۱. حقوق و تعهدات کاربران</h4>
                            <ul className="rule-list">
                                <li>تمامی کاربران باید به حقوق یکدیگر احترام بگذارند</li>
                                <li>استفاده از زبان مناسب و محترمانه الزامی است</li>
                                <li>ارسال محتوای نامناسب، تبلیغاتی یا اسپم ممنوع است</li>
                                <li>کاربران مسئول صحت اطلاعات ارسالی خود هستند</li>
                            </ul>
                        </div>

                        <div className="rule-section">
                            <h4 className="text-primary mb-3">۲. حریم خصوصی</h4>
                            <ul className="rule-list">
                                <li>اطلاعات شخصی کاربران محرمانه تلقی می‌شود</li>
                                <li>اطلاعات بدون اجازه کاربران فاش نخواهد شد</li>
                                <li>استفاده از کوکی‌ها برای بهبود تجربه کاربری</li>
                                <li>امکان حذف اطلاعات شخصی در هر زمان</li>
                            </ul>
                        </div>

                        <div className="rule-section">
                            <h4 className="text-primary mb-3">۳. مسئولیت محتوا</h4>
                            <ul className="rule-list">
                                <li>مسئولیت محتوای ارسالی بر عهده کاربران است</li>
                                <li>ردیف حق بررسی و تأیید محتوا را دارد</li>
                                <li>محتوای خلاف قوانین حذف خواهد شد</li>
                                <li>کاربران متخلف ممکن است محدود شوند</li>
                            </ul>
                        </div>

                        <div className="rule-section">
                            <h4 className="text-primary mb-3">۴. تغییرات در قوانین</h4>
                            <ul className="rule-list">
                                <li>ردیف حق تغییر قوانین را در هر زمان دارد</li>
                                <li>تغییرات از طریق سایت اطلاع‌رسانی می‌شود</li>
                                <li>ادامه استفاده پس از تغییرات به منزله پذیرش است</li>
                                <li>کاربران می‌توانند در صورت عدم موافقت، حساب خود را حذف کنند</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    };

    return (
        <>
            <Head>
                <title>درباره ردیف - بزرگترین پلتفرم مقایسه قیمت ایران</title>
                <meta name="description" content="ردیف بزرگترین پلتفرم مقایسه قیمت و خرید آنلاین در ایران. با بیش از ۸ میلیون محصول و ۶۳۰۰ فروشگاه، بهترین قیمت‌ها را پیدا کنید." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="/css/theme.css" />
            </Head>

            <style jsx>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .modern-stats-container {
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                }

                .stats-header h3 {
                    color: var(--primary-color);
                    font-weight: 700;
                }

                .modern-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                .modern-stat-card {
                    background: white;
                    border-radius: 15px;
                    padding: 1.5rem;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .modern-stat-card:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                }

                .modern-stat-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }

                .stat-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .stat-icon {
                    font-size: 2rem;
                    color: var(--primary-color);
                }

                .trend-icon {
                    font-size: 1.2rem;
                    color: var(--success-color);
                }

                .stat-content h3 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin: 0.5rem 0;
                    color: var(--dark-color);
                }

                .stat-content p {
                    margin: 0;
                    color: #6c757d;
                    font-weight: 500;
                }

                .growth-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, var(--success-color), #20c997);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-top: 0.5rem;
                }

                .users:before { background: linear-gradient(90deg, #667eea, #764ba2); }
                .products:before { background: linear-gradient(90deg, #f093fb, #f5576c); }
                .stores:before { background: linear-gradient(90deg, #4facfe, #00f2fe); }
                .satisfaction:before { background: linear-gradient(90deg, #43e97b, #38f9d7); }

                .feature-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }

                .feature-icon {
                    font-size: 3rem;
                    color: var(--primary-color);
                }

                .team-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    text-align: center;
                    transition: all 0.3s ease;
                    height: 100%;
                }

                .team-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }

                .team-avatar {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }

                .avatar-icon {
                    font-size: 2rem;
                    color: white;
                }

                .modern-values-section {
                    margin-top: 4rem;
                    padding: 3rem 0;
                    background: linear-gradient(135deg, #f8f9fa, #ffffff);
                    border-radius: 20px;
                }

                .values-header h4 {
                    color: var(--primary-color);
                    font-weight: 700;
                }

                .modern-values-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .modern-value-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .modern-value-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }

                .value-icon-container {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    position: relative;
                }

                .modern-value-icon {
                    font-size: 2.5rem;
                    color: white;
                    z-index: 2;
                }

                .quality .value-icon-container {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                }

                .transparency .value-icon-container {
                    background: linear-gradient(135deg, #f093fb, #f5576c);
                }

                .innovation .value-icon-container {
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                }

                .privacy .value-icon-container {
                    background: linear-gradient(135deg, #43e97b, #38f9d7);
                }

                .modern-value-card h5 {
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--dark-color);
                }

                .modern-value-card p {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 0;
                }

                .value-highlight {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .modern-value-card:hover .value-highlight {
                    transform: scaleX(1);
                }

                .contact-form-card, .contact-info-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    height: 100%;
                }

                .contact-item {
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #eee;
                }

                .contact-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }

                .rule-section {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    margin-bottom: 2rem;
                }

                .rule-list {
                    list-style: none;
                    padding: 0;
                }

                .rule-list li {
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f0f0f0;
                    position: relative;
                    padding-right: 2rem;
                }

                .rule-list li:before {
                    content: '✓';
                    position: absolute;
                    right: 0;
                    color: var(--success-color);
                    font-weight: bold;
                }

                .rule-list li:last-child {
                    border-bottom: none;
                }

                .nav-tabs {
                    border-bottom: 2px solid #e9ecef;
                    margin-bottom: 2rem;
                }

                .nav-tabs .nav-link {
                    border: none;
                    color: #6c757d;
                    font-weight: 500;
                    padding: 1rem 1.5rem;
                    margin-left: 0.5rem;
                    border-radius: 10px 10px 0 0;
                    transition: all 0.3s ease;
                }

                .nav-tabs .nav-link:hover {
                    color: var(--primary-color);
                    background-color: #f8f9fa;
                }

                .nav-tabs .nav-link.active {
                    color: var(--primary-color);
                    background-color: white;
                    border-bottom: 2px solid var(--primary-color);
                    font-weight: 600;
                }

                .page-header {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    padding: 4rem 0;
                    margin-bottom: 3rem;
                    text-align: center;
                }

                @media (max-width: 1200px) {
                    .modern-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    .modern-stat-card {
                        padding: 1.25rem;
                    }
                    .modern-values-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 992px) {
                    .modern-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    .feature-card, .team-card {
                        margin-bottom: 1.5rem;
                    }
                    .modern-values-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }
                }

                @media (max-width: 768px) {
                    .modern-stats-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    .modern-stat-card {
                        padding: 1.25rem;
                    }
                    .stat-content h3 {
                        font-size: 1.8rem;
                    }
                    .feature-icon {
                        font-size: 2.5rem;
                    }
                    .page-header {
                        padding: 2rem 0;
                    }
                    .nav-tabs .nav-link {
                        padding: 0.75rem 1rem;
                        margin-left: 0.25rem;
                        font-size: 0.9rem;
                    }
                    .modern-values-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .modern-stats-container {
                        padding: 1.5rem;
                    }
                    .modern-values-section {
                        padding: 2rem 0;
                        margin-top: 2rem;
                    }
                }

                @media (max-width: 576px) {
                    .container {
                        padding: 0 10px;
                    }
                    .feature-card, .team-card, .rule-section {
                        padding: 1.5rem;
                    }
                    .modern-stat-card {
                        padding: 1rem;
                    }
                    .stat-content h3 {
                        font-size: 1.5rem;
                    }
                    .nav-tabs {
                        flex-wrap: wrap;
                    }
                    .nav-tabs .nav-link {
                        flex: 1;
                        text-align: center;
                        margin: 0.25rem;
                        font-size: 0.85rem;
                    }
                    .modern-stats-container {
                        padding: 1rem;
                    }
                    .modern-value-card {
                        padding: 1.5rem;
                    }
                    .value-icon-container {
                        width: 60px;
                        height: 60px;
                    }
                    .modern-value-icon {
                        font-size: 2rem;
                    }
                    .modern-values-section {
                        padding: 1.5rem 0;
                    }
                }
            `}</style>

            <Header_Main />
            
            <div className="page-header">
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3">درباره ردیف</h1>
                    <p className="lead mb-0">بزرگترین پلتفرم مقایسه قیمت و خرید آنلاین ایران</p>
                </div>
            </div>

            <div className="container mb-5">
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <button 
                            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveTab('about')}
                        >
                            درباره ما
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
                            onClick={() => setActiveTab('team')}
                        >
                            تیم ردیف
                        </button>
                    </li>

                    <li className="nav-item">
                        <button 
                            className={`nav-link ${activeTab === 'rules' ? 'active' : ''}`}
                            onClick={() => setActiveTab('rules')}
                        >
                            قوانین
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    {tabContent[activeTab].content}
                </div>
            </div>

            <FooterMain />
        </>
    );
}