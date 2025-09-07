import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../../../components/panel/Footer'
import Header_Main from '../../../components/main/header'
import Breadcrumb from '../../../components/product/Breadcrumb'
import SectionProduct from '../../../components/product/sectionProduct'
import FooterMain from '../../../components/main/FooterMain'
import ProductGrid from '../../../components/product/ProductGrid'
import SellersComponent from '../../../components/product/sellers'
import FeaturesComponent from '../../../components/product/features'
import PriceHistory from '../../../components/product/PriceHistory'
import ReviewsComponent from '../../../components/product/Reviews'
import AdsComponent from '../../../components/product/ads'

export default function ProductPage() {

    const router = useRouter()
    const { slug } = router.query
    let products = [

        {
            id: 2,
            title: 'لپ‌تاپ ایسوس VivoBook X1502 | i7 نسل 12 | رم 16 | SSD یک ترابایت',
            price: 48500000,
            img: '/img/وکتور-لوگو-آرم-ایسوس-راگ-1.png',
            seller: 'فروشگاه رسمی ایسوس',
            delivery: 'paid',
            credit: 'yes'
        },

        {
            id: 4,
            title: 'هدفون بلوتوثی Sony WH-1000XM5 | نویز کنسلینگ حرفه‌ای',
            price: 16900000,
            img: '/img/وکتور-لوگو-آرم-سونی-1.png',
            seller: 'سونی ایران',
            delivery: 'free',
            credit: 'yes'
        },
        {
            id: 5,
            title: 'کنسول بازی PS5 با درایو | 825 گیگابایت SSD | DualSense',
            price: 26800000,
            img: '/img/Logo-about-us.jpg',
            seller: 'پی اس پرو',
            delivery: 'paid',
            credit: 'no'
        },

        {
            id: 7,
            title: 'تبلت Xiaomi Pad 6 | حافظه 256 گیگ | رم 8 گیگ | قلم استایلوس',
            price: 17500000,
            img: '/img/38c39eb7-c9b7-4f77-989c-852b214b78ef.webp',
            seller: 'شیائومی استور',
            delivery: 'paid',
            credit: 'yes'
        },

        {
            id: 9,
            title: 'مانیتور گیمینگ Gigabyte G27Q | سایز 27 اینچ | 144Hz | QHD',
            price: 16900000,
            img: '',
            seller: 'گیگابایت ایران',
            delivery: 'paid',
            credit: 'yes'
        },

        {
            id: 11,
            title: 'پاوربانک Anker 20,000mAh | شارژ سریع PD | مدل A1281',
            price: 2350000,
            img: '',
            seller: 'آنکر ایران',
            delivery: 'paid',
            credit: 'yes'
        },

    ]

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{slug}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async></script>
            </Head>
            <Header_Main />
            <Breadcrumb />
            <SectionProduct />
            <div className="full-width-section">
                <div className="container-custom">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="product-tabs-container">
                                <ul className="nav nav-tabs product-tabs" id="productTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="prices-tab" data-bs-toggle="tab" data-bs-target="#prices" type="button" role="tab" aria-controls="prices" aria-selected="true">
                                            قیمت ها
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                                            نظرات
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false">
                                            سابقه قیمتی
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="false">
                                            مشخصات محصول
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="features-tab" data-bs-toggle="tab" data-bs-target="#features" type="button" role="tab" aria-controls="features" aria-selected="false">
                                            قابلیت ها
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="productTabsContent">
                                    <div className="tab-pane fade show active" id="prices" role="tabpanel" aria-labelledby="prices-tab">
                                        <section id="section1" className="price-shops">
                                            <SellersComponent products={products} />
                                        </section>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <ReviewsComponent />
                                    </div>
                                    <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                                        <PriceHistory />
                                    </div>
                                    <div className="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">
                                        <div className="product-details-content">
                                            <p>Product details content will go here...</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                                        <FeaturesComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AdsComponent img={'/img/ads3.png'} />
                    </div >
                </div >
            </div>
            <div className="container-fluid px-3">
                <section id="section5" className="Similar-products">
                    <ProductGrid Category="digital" title="دیجیتال"></ProductGrid>
                </section>
            </div >

            <FooterMain></FooterMain>


        </>
    )
}