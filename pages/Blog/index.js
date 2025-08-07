import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header_Main from '../../components/main/header';
import FooterMain from '../../components/main/FooterMain';
import { FaNewspaper, FaCalendarAlt, FaTag, FaEye, FaShare, FaClock, FaFire, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsGrid3X3Gap, BsList, BsBookmark, BsBookmarkFill } from 'react-icons/bs';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('همه');
    const [viewMode, setViewMode] = useState('grid');
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const [featuredPost, setFeaturedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const KnowledgeArray = [
        {
          id: 2,
          title: 'سال بین‌المللی علم و فناوری کوانتومی',
          desc: 'سازمان ملل سال ۲۰۲۵ را به عنوان سال بین‌المللی علم و فناوری کوانتومی اعلام کرد تا آگاهی عمومی از اهمیت علم کوانتوم افزایش یابد.',
          img: '/img/quantum-year-2025.png',
          createdAt: '2025-01-15',
          genre: 'علمی',
          readTime: '۵ دقیقه',
          views: 1250,
          featured: true
        },
        {
          id: 4,
          title: 'Qualtrics آینده‌ای با هوش مصنوعی عامل‌محور پیش‌بینی می‌کند',
          desc: 'رئیس محصول Qualtrics پیش‌بینی می‌کند که هوش مصنوعی عامل‌محور نقش مهمی در بهبود ارتباطات مشتری و جمع‌آوری داده‌ها در محیط‌های کاری ایفا خواهد کرد.',
          img: '/img/qualtrics-agentic-ai.png',
          createdAt: '2025-01-14',
          genre: 'هوش مصنوعی',
          readTime: '۷ دقیقه',
          views: 980
        },
        {
          id: 1,
          title: 'Manus: عامل هوش مصنوعی مستقل از چین',
          desc: 'استارتاپ چینی Monica عامل هوش مصنوعی Manus را معرفی کرد که قادر است بدون دخالت مستقیم انسان، وظایف پیچیده آنلاین را انجام دهد.',
          img: '/img/manus-ai-agent.png',
          createdAt: '2025-01-13',
          genre: 'هوش مصنوعی',
          readTime: '۶ دقیقه',
          views: 1450
        },
        {
          id: 13,
          title: 'رکورد تاریخی بیت‌کوین',
          desc: 'بیت‌کوین با عبور از مرز ۱۰۰٬۰۰۰ دلار، رکورد جدیدی ثبت کرد و توجه سرمایه‌گذاران جهانی را جلب نمود.',
          img: '/img/bitcoin-record.png',
          createdAt: '2025-01-12',
          genre: 'کریپتو',
          readTime: '۴ دقیقه',
          views: 2100
        },
        {
          id: 14,
          title: 'پیش‌بینی بیت‌وایز: بیت‌کوین به ۲۰۰٬۰۰۰ دلار می‌رسد',
          desc: 'بیت‌وایز پیش‌بینی می‌کند که قیمت بیت‌کوین در سال ۲۰۲۵ به بیش از ۲۰۰٬۰۰۰ دلار خواهد رسید، با افزایش پذیرش نهادی و ایجاد ذخایر استراتژیک توسط دولت‌ها.',
          img: '/img/bitwise-prediction.png',
          createdAt: '2025-01-11',
          genre: 'کریپتو',
          readTime: '۸ دقیقه',
          views: 1800
        },
        {
          id: 3,
          title: 'ذخیره استراتژیک بیت‌کوین در آمریکا',
          desc: 'دولت آمریکا با ایجاد ذخیره استراتژیک بیت‌کوین به ارزش ۱۷ میلیارد دلار، گامی مهم در جهت پذیرش دارایی‌های دیجیتال برداشت.',
          img: '/img/us-bitcoin-reserve.png',
          createdAt: '2025-01-10',
          genre: 'کریپتو',
          readTime: '۶ دقیقه',
          views: 1650
        },
        {
          id: 10,
          title: 'پیشرفت‌های جدید در اتریوم و پولکادات',
          desc: 'اتریوم با ارتقاء Pectra و پولکادات با نسخه ۲.۰ بهبودهای قابل توجهی در مقیاس‌پذیری و کارایی شبکه‌های خود ایجاد کردند.',
          img: '/img/ethereum-polkadot-upgrades.png',
          createdAt: '2025-01-09',
          genre: 'کریپتو',
          readTime: '۹ دقیقه',
          views: 1320
        },
        {
          id: 8,
          title: 'زاکربرگ: دوستان آینده شما هوش مصنوعی خواهند بود',
          desc: 'مارک زاکربرگ اعلام کرد که در آینده، هوش مصنوعی نقش مهمی در تعاملات اجتماعی انسان‌ها ایفا خواهد کرد، از جمله دوستان، درمانگران و نمایندگان تجاری.',
          img: '/img/zuckerberg-ai-friends.png',
          createdAt: '2025-01-08',
          genre: 'هوش مصنوعی',
          readTime: '۵ دقیقه',
          views: 1750
        },
        {
          id: 9,
          title: 'OpenAI برای کشورهای دموکراتیک',
          desc: 'OpenAI ابتکار جهانی "OpenAI برای کشورها" را راه‌اندازی کرد تا زیرساخت‌های هوش مصنوعی را در کشورهای دموکراتیک توسعه دهد و نسخه‌های محلی ChatGPT را ارائه کند.',
          img: '/img/openai-democratic.png',
          createdAt: '2025-01-07',
          genre: 'هوش مصنوعی',
          readTime: '۷ دقیقه',
          views: 1420
        },
        {
          id: 11,
          title: 'اپل به دنبال افزودن موتورهای جستجوی هوش مصنوعی به سافاری',
          desc: 'اپل در حال بررسی افزودن موتورهای جستجوی مبتنی بر هوش مصنوعی مانند Perplexity و OpenAI به مرورگر سافاری است تا تجربه جستجوی کاربران را بهبود بخشد.',
          img: '/img/apple-ai-search.png',
          createdAt: '2025-01-06',
          genre: 'هوش مصنوعی',
          readTime: '۶ دقیقه',
          views: 1180
        },
        {
          id: 12,
          title: 'گوگل به توسعه نیروگاه‌های هسته‌ای برای پشتیبانی از هوش مصنوعی کمک می‌کند',
          desc: 'گوگل با همکاری Elementl Power به توسعه سه نیروگاه هسته‌ای در آمریکا کمک می‌کند تا نیازهای انرژی فزاینده مراکز داده و هوش مصنوعی را تأمین کند.',
          img: '/img/google-nuclear-ai.png',
          createdAt: '2025-01-05',
          genre: 'تکنولوژی',
          readTime: '۸ دقیقه',
          views: 1050
        },
        {
          id: 15,
          title: 'فرود موفقیت‌آمیز مأموریت Blue Ghost بر سطح ماه',
          desc: 'شرکت Firefly Aerospace با موفقیت مأموریت Blue Ghost را بر سطح ماه فرود آورد تا ابزارهایی برای مطالعه خاک ماه و تعاملات باد خورشیدی با میدان مغناطیسی زمین ارائه دهد.',
          img: '/img/blue-ghost-moon-landing.png',
          createdAt: '2025-01-04',
          genre: 'علمی',
          readTime: '۱۰ دقیقه',
          views: 890
        },
        {
          id: 16,
          title: 'کاهش جمعیت پروانه‌ها در آمریکا',
          desc: 'مطالعه‌ای نشان داد که جمعیت پروانه‌ها در آمریکا بین سال‌های ۲۰۰۰ تا ۲۰۲۰ به میزان ۲۲٪ کاهش یافته است، که نگرانی‌هایی درباره از دست رفتن تنوع زیستی ایجاد کرده است.',
          img: '/img/butterfly-decline.png',
          createdAt: '2025-01-03',
          genre: 'علمی',
          readTime: '۶ دقیقه',
          views: 720
        }
    ];

    const categories = ['همه', 'هوش مصنوعی', 'کریپتو', 'علمی', 'تکنولوژی'];

    useEffect(() => {
        const featured = KnowledgeArray.find(post => post.featured);
        setFeaturedPost(featured || KnowledgeArray[0]);
    }, []);

    const toggleBookmark = (postId) => {
        setBookmarkedPosts(prev => 
            prev.includes(postId) 
                ? prev.filter(id => id !== postId)
                : [...prev, postId]
        );
    };

    const filteredPosts = KnowledgeArray
        .filter(post => {
            const matchesCategory = selectedCategory === 'همه' || post.genre === selectedCategory;
            return matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case 'oldest':
                    return new Date(a.createdAt) - new Date(b.createdAt);
                case 'popular':
                    return b.views - a.views;
                default:
                    return 0;
            }
        });

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getMostViewedPosts = () => {
        return [...KnowledgeArray]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fa-IR');
    };

    return (
        <>
            <Head>
                <title>بلاگ ردیف - آخرین اخبار تکنولوژی و نوآوری</title>
                <meta name="description" content="آخرین اخبار و مقالات در زمینه تکنولوژی، هوش مصنوعی، کریپتو و علم. همراه با ردیف از جدیدترین پیشرفت‌ها مطلع شوید." />
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

                .blog-header {
                    background: linear-gradient(135deg, #6f42c1, #8b5cf6, #a855f7);
                    color: white;
                    padding: 5rem 0;
                    margin-bottom: 3rem;
                    position: relative;
                    overflow: hidden;
                }

                .blog-header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
                    opacity: 0.3;
                }

                .text-gradient {
                    background: linear-gradient(45deg, #ffffff, #f8f9fa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero-stats {
                    margin-top: 2rem;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #ffd700;
                    display: block;
                }

                .stat-label {
                    font-size: 0.9rem;
                    opacity: 0.9;
                    margin-top: 0.25rem;
                }

                .hero-icon {
                    font-size: 8rem;
                    opacity: 0.2;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .search-filter-section {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    margin-bottom: 3rem;
                }

                .pagination-section {
                    margin-top: 4rem;
                    margin-bottom: 2rem;
                }

                .pagination {
                    --bs-pagination-color: #6f42c1;
                    --bs-pagination-hover-color: #ffffff;
                    --bs-pagination-hover-bg: #6f42c1;
                    --bs-pagination-focus-color: #ffffff;
                    --bs-pagination-focus-bg: #6f42c1;
                    --bs-pagination-active-color: #ffffff;
                    --bs-pagination-active-bg: #6f42c1;
                    --bs-pagination-active-border-color: #6f42c1;
                    --bs-pagination-border-radius: 10px;
                }

                .page-link {
                    border-radius: 8px !important;
                    margin: 0 2px;
                    font-weight: 500;
                    border: 2px solid #e9ecef;
                    transition: all 0.3s ease;
                }

                .page-link:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(111, 66, 193, 0.3);
                }

                .pagination-info {
                    color: #6c757d;
                    font-size: 0.9rem;
                }

                .category-pills {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin: 1.5rem 0;
                }

                .category-pill {
                    padding: 0.5rem 1rem;
                    border: 2px solid #e9ecef;
                    border-radius: 25px;
                    background: white;
                    color: #6c757d;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 500;
                }

                .category-pill:hover {
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                }

                .category-pill.active {
                    background: var(--primary-color);
                    border-color: var(--primary-color);
                    color: white;
                }

                .view-controls {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .view-toggle {
                    display: flex;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .view-toggle button {
                    padding: 0.5rem 1rem;
                    border: none;
                    background: white;
                    color: #6c757d;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .view-toggle button.active {
                    background: var(--primary-color);
                    color: white;
                }

                .featured-post {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    margin-bottom: 3rem;
                    position: relative;
                }

                .featured-badge {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: var(--warning-color);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    z-index: 10;
                }

                .featured-post img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }

                .featured-content {
                    padding: 2rem;
                }

                .featured-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    color: #6c757d;
                    font-size: 0.875rem;
                }

                .featured-meta span {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .blog-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .blog-card {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }

                .blog-card.list-view {
                    flex-direction: row;
                    height: auto;
                }

                .blog-card.list-view img {
                    width: 200px;
                    height: 150px;
                    flex-shrink: 0;
                }

                .blog-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .blog-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .blog-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    color: #6c757d;
                    font-size: 0.875rem;
                }

                .blog-meta span {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .blog-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: #2c3e50;
                    line-height: 1.4;
                }

                .blog-desc {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    flex: 1;
                }

                .blog-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                }

                .blog-stats {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #6c757d;
                    font-size: 0.875rem;
                }

                .blog-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .action-btn {
                    padding: 0.5rem;
                    border: none;
                    background: #f8f9fa;
                    color: #6c757d;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:hover {
                    background: var(--primary-color);
                    color: white;
                }

                .action-btn.bookmarked {
                    background: var(--warning-color);
                    color: white;
                }

                .genre-tag {
                    background: var(--primary-color);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 15px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .trending-section {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    margin-bottom: 3rem;
                    border: 1px solid #f0f0f0;
                }

                .trending-card {
                    background: #f8f9fa;
                    border-radius: 15px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    border: 2px solid transparent;
                }

                .trending-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(111, 66, 193, 0.2);
                    border-color: #6f42c1;
                }

                .trending-rank {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #6f42c1;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 0.875rem;
                    z-index: 10;
                }

                .trending-image {
                    height: 150px;
                    overflow: hidden;
                }

                .trending-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .trending-card:hover .trending-image img {
                    transform: scale(1.1);
                }

                .trending-content {
                    padding: 1rem;
                }

                .trending-genre {
                    background: #6f42c1;
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .trending-title {
                    margin: 0.75rem 0;
                    font-size: 0.95rem;
                    font-weight: 600;
                    line-height: 1.4;
                    color: #2c3e50;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .trending-stats {
                    display: flex;
                    justify-content: space-between;
                    color: #6c757d;
                    font-size: 0.8rem;
                }

                .trending-stats span {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                @media (max-width: 1200px) {
                    .blog-grid {
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 1.5rem;
                    }
                }

                @media (max-width: 992px) {
                    .blog-grid {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    }
                    .featured-post img {
                        height: 250px;
                    }
                    .blog-card.list-view {
                        flex-direction: column;
                    }
                    .blog-card.list-view img {
                        width: 100%;
                        height: 200px;
                    }
                }

                @media (max-width: 768px) {
                    .blog-grid {
                        grid-template-columns: 1fr;
                    }
                    .blog-header {
                        padding: 2rem 0;
                    }
                    .search-filter-section {
                        padding: 1.5rem;
                    }
                    .category-pills {
                        justify-content: center;
                    }
                    .view-controls {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 1rem;
                    }
                    .featured-content {
                        padding: 1.5rem;
                    }
                    .trending-card {
                        margin-bottom: 1rem;
                    }
                    .hero-stats {
                        justify-content: center;
                        gap: 2rem !important;
                    }
                    .stat-item {
                        flex: 1;
                    }
                }

                @media (max-width: 576px) {
                    .container {
                        padding: 0 10px;
                    }
                    .search-filter-section {
                        padding: 1rem;
                    }
                    .blog-content {
                        padding: 1rem;
                    }
                    .featured-content {
                        padding: 1rem;
                    }
                    .blog-meta {
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    }
                }
            `}</style>

            <Header_Main />
            
            <div className="blog-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1 className="display-3 fw-bold mb-4 text-gradient">
                                بلاگ ردیف
                            </h1>
                            <p className="lead mb-4 fs-4">مرجع اخبار و مقالات تکنولوژی، هوش مصنوعی و نوآوری</p>
                            <div className="hero-stats d-flex gap-4">
                                <div className="stat-item">
                                    <div className="stat-number">{KnowledgeArray.length}</div>
                                    <div className="stat-label">مقاله منتشر شده</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">{categories.length - 1}</div>
                                    <div className="stat-label">دسته‌بندی</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">{KnowledgeArray.reduce((sum, post) => sum + post.views, 0).toLocaleString()}</div>
                                    <div className="stat-label">بازدید کل</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="hero-icon">
                                <FaNewspaper />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Featured Post */}
                {featuredPost && (
                    <div className="featured-post">
                        <div className="featured-badge">
                            <FaFire className="me-1" />
                            ویژه
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <img src={featuredPost.img} alt={featuredPost.title} />
                            </div>
                            <div className="col-lg-6">
                                <div className="featured-content">
                                    <div className="featured-meta">
                                        <span>
                                            <FaTag className="me-1" />
                                            {featuredPost.genre}
                                        </span>
                                        <span>
                                            <FaCalendarAlt className="me-1" />
                                            {formatDate(featuredPost.createdAt)}
                                        </span>
                                        <span>
                                            <FaClock className="me-1" />
                                            {featuredPost.readTime}
                                        </span>
                                        <span>
                                            <FaEye className="me-1" />
                                            {featuredPost.views?.toLocaleString()}
                                        </span>
                                    </div>
                                    <h2 className="featured-title mb-3">{featuredPost.title}</h2>
                                    <p className="featured-desc mb-4">{featuredPost.desc}</p>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary">
                                            ادامه مطلب
                                        </button>
                                        <button 
                                            className={`action-btn ${bookmarkedPosts.includes(featuredPost.id) ? 'bookmarked' : ''}`}
                                            onClick={() => toggleBookmark(featuredPost.id)}
                                        >
                                            {bookmarkedPosts.includes(featuredPost.id) ? <BsBookmarkFill /> : <BsBookmark />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Trending Section */}
                <div className="trending-section">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">
                            <FaFire className="me-2 text-warning" />
                            پربازدیدترین مقالات
                        </h3>
                        <span className="badge bg-warning text-dark">TOP 5</span>
                    </div>
                    <div className="row g-3">
                        {getMostViewedPosts().map((post, index) => (
                            <div key={post.id} className="col-lg-4 col-md-6">
                                <div className="trending-card h-100">
                                    <div className="trending-rank">{index + 1}</div>
                                    <div className="trending-image">
                                        <img src={post.img} alt={post.title} />
                                    </div>
                                    <div className="trending-content">
                                        <span className="trending-genre">{post.genre}</span>
                                        <h6 className="trending-title">{post.title}</h6>
                                        <div className="trending-stats">
                                            <span>
                                                <FaEye className="me-1" />
                                                {post.views.toLocaleString()}
                                            </span>
                                            <span>
                                                <FaClock className="me-1" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter and Controls */}
                <div className="search-filter-section">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-8">
                            <div className="category-pills">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => {setSelectedCategory(category); setCurrentPage(1);}}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex gap-3 justify-content-end">
                                <select 
                                    className="form-select"
                                    value={sortBy}
                                    onChange={(e) => {setSortBy(e.target.value); setCurrentPage(1);}}
                                    style={{width: 'auto'}}
                                >
                                    <option value="newest">جدیدترین</option>
                                    <option value="oldest">قدیمی‌ترین</option>
                                    <option value="popular">پربازدیدترین</option>
                                </select>
                                <div className="view-toggle">
                                    <button 
                                        className={viewMode === 'grid' ? 'active' : ''}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <BsGrid3X3Gap />
                                    </button>
                                    <button 
                                        className={viewMode === 'list' ? 'active' : ''}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <BsList />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts */}
                <div className={viewMode === 'grid' ? 'blog-grid' : 'blog-list'}>
                    {currentPosts.map(post => (
                        <article key={post.id} className={`blog-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                            <img src={post.img} alt={post.title} />
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="genre-tag">{post.genre}</span>
                                    <span>
                                        <FaCalendarAlt className="me-1" />
                                        {formatDate(post.createdAt)}
                                    </span>
                                    <span>
                                        <FaClock className="me-1" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-desc">{post.desc}</p>
                                <div className="blog-footer">
                                    <div className="blog-stats">
                                        <span>
                                            <FaEye className="me-1" />
                                            {post.views?.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="blog-actions">
                                        <button 
                                            className={`action-btn ${bookmarkedPosts.includes(post.id) ? 'bookmarked' : ''}`}
                                            onClick={() => toggleBookmark(post.id)}
                                        >
                                            {bookmarkedPosts.includes(post.id) ? <BsBookmarkFill /> : <BsBookmark />}
                                        </button>
                                        <button className="action-btn">
                                            <FaShare />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination-section">
                        <nav aria-label="صفحه‌بندی مقالات">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button 
                                        className="page-link"
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <FaChevronRight className="me-1" />
                                        قبلی
                                    </button>
                                </li>
                                
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                    ) {
                                        return (
                                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                                <button 
                                                    className="page-link"
                                                    onClick={() => paginate(pageNumber)}
                                                >
                                                    {pageNumber}
                                                </button>
                                            </li>
                                        );
                                    } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                    ) {
                                        return (
                                            <li key={pageNumber} className="page-item disabled">
                                                <span className="page-link">...</span>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                                
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button 
                                        className="page-link"
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        بعدی
                                        <FaChevronLeft className="ms-1" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className="pagination-info text-center mt-3">
                            <small className="text-muted">
                                نمایش {indexOfFirstPost + 1} تا {Math.min(indexOfLastPost, filteredPosts.length)} از {filteredPosts.length} مقاله
                            </small>
                        </div>
                    </div>
                )}

                {filteredPosts.length === 0 && (
                    <div className="text-center py-5">
                        <FaNewspaper className="text-muted mb-3" style={{fontSize: '3rem'}} />
                        <h4 className="text-muted">مقاله‌ای در این دسته‌بندی یافت نشد</h4>
                        <p className="text-muted">لطفاً دسته‌بندی دیگری را انتخاب کنید.</p>
                    </div>
                )}
            </div>

            <FooterMain />
        </>
    );
}