import { useRouter } from 'next/router'
import Footer from '../../../components/panel/Footer'
import Header_Main from '../../../components/main/header'
import Breadcrumb from '../../../components/product/Breadcrumb'
import SectionProduct from '../../../components/product/sectionProduct'
import FooterMain from '../../../components/main/FooterMain'
import SliderProduct from '../../../components/main/SliderProduct'
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
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{slug}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

            <Header_Main />
            <Breadcrumb />
            <SectionProduct />
            <div className="full-width-section">
                <div className="container-custom">
                    <div className="row">
                        <div className="col-lg-9">
                            <section id="section1" className="price-shops">
                                <div className="filter-product">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-2">
                                            <button
                                                style={{ backgroundColor: '#FFF' }}
                                                className="btn rounded-3">فروشندگان</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                className="btn btn-light rounded-3">نظرات</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                className="btn btn-light rounded-3">مشخصات</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                className="btn btn-light rounded-3">توضیحات</button>

                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                className="btn btn-light rounded-4">پیشنهاد</button>
                                        </div>


                                    </div>
                                </div>
                                <SellersComponent {...products}></SellersComponent>


                            </section>
                        </div>
                        <AdsComponent img={'/img/ads3.png'} ></AdsComponent>
                    </div >
                </div >
            </div>
            <div className="container-custom">
                <div className='row'>
                    <div className='col-lg-9'>
                        <ReviewsComponent
                        />

                        <PriceHistory />
                        <FeaturesComponent />

                        <section id="section5" className="Similar-products">
                            <SliderProduct></SliderProduct>
                        </section>

                    </div>
                    <AdsComponent img={'/img/ads3.png'} />
                </div >
            </div >

            <FooterMain></FooterMain>


        </>
    )
}