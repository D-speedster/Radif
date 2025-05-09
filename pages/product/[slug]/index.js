import { useRouter } from 'next/router'
import Footer from '../../../components/panel/Footer'
import Header_Main from '../../../components/main/header'
import Breadcrumb from '../../../components/product/Breadcrumb'
import SectionProduct from '../../../components/product/sectionProduct'
import FooterMain from '../../../components/main/FooterMain'
import SliderProduct from '../../../components/main/SliderProduct'
import SellersComponent from '../../../components/product/sellers'

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
            <div class="full-width-section">
                <div class="container-custom">
                    <div class="row">
                        <div class="col-lg-9">
                            <section id="section1" class="price-shops">
                                <div class="filter-product">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <button
                                                style={{ backgroundColor: '#FFF' }}
                                                class="btn rounded-3">فروشندگان</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                class="btn btn-light rounded-3">نظرات</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                class="btn btn-light rounded-3">مشخصات</button>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                class="btn btn-light rounded-3">توضیحات</button>

                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: '#FFF' }}
                                                class="btn btn-light rounded-4">پیشنهاد</button>
                                        </div>


                                    </div>
                                </div>
                                <SellersComponent {...products}></SellersComponent>


                            </section>
                        </div>
                        <aside class="col-lg-3 position-relative">

                            <img class="img-fluid rounded-2" src="/img/ads2.png" alt="" />

                        </aside>
                    </div >
                </div >
            </div>
            <div class="container-custom">
                <div className='row'>
                    <div className='col-lg-9'>
                        <section id="section2" class="Reviews py-5">
                            <div class="container-custom">
                                <h6 class="mt-4">تست ها و بررسی های تخصصی</h6>
                                <div class="row row-cols-1 row-cols-md-3 g-4">


                                    <div class="col">
                                        <div
                                            class="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="d-flex align-items-center gap-2">
                                                    <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                                    <strong class="text-dark">نقد دیجی کالا</strong>
                                                </div>
                                                <small class="text-muted">۱۴۰۳/۰۲/۰۵</small>
                                            </div>
                                            <p class="text-secondary small">
                                                دوربین‌های با کیفیت iPhone 16، تجربه عکاسی فوق‌العاده‌ای را ارائه می‌دهند و
                                                با فناوری‌های نوین، امکان ثبت لحظات خاص با جزئیات بالا را فراهم می‌کنند
                                                <span
                                                    style={{ color: 'blue' }}
                                                >ادامه ...</span>
                                            </p>
                                            <div class="d-flex gap-1 mt-2">
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star-half' type='solid' color='#f9d635'
                                                    size="sm"></box-icon>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col">
                                        <div
                                            class="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="d-flex align-items-center gap-2">
                                                    <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                                    <strong class="text-dark">کاربر نرگس</strong>
                                                </div>
                                                <small class="text-muted">۱۴۰۳/۰۲/۰۴</small>
                                            </div>
                                            <p class="text-secondary small">طراحی بسیار زیباست ولی شارژدهی می‌تونست بهتر
                                                باشه.</p>
                                            <div class="d-flex gap-1 mt-2">
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#e4e4e4' size="sm"></box-icon>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="d-flex align-items-center gap-2">
                                                    <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                                    <strong class="text-dark">کاربر امین</strong>
                                                </div>
                                                <small class="text-muted">۱۴۰۳/۰۲/۰۳</small>
                                            </div>
                                            <p class="text-secondary small">قیمتش بالاست ولی کیفیت خوبی داره. پیشنهاد
                                                می‌کنم.</p>
                                            <div class="d-flex gap-1 mt-2">
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                                                <box-icon name='star-half' type='solid' color='#f9d635'
                                                    size="sm"></box-icon>
                                                <box-icon name='star' type='solid' color='#e4e4e4' size="sm"></box-icon>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <br />
                                <h3>نظرات : </h3>
                                <h5>قبل از خرید نگاهی به نظرات دیگران بیندازید.</h5>
                                <br />
                                <div class="row align-items-start">

                                    <div class="col-lg-6 mb-4">
                                        <div>
                                            <div class="d-flex align-items-center mb-2">
                                                <span class="fs-1 fw-bold ms-2">4.6</span>
                                                <span class="text-warning fs-4">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="text-muted ms-2">از ۲۳۵ رأی</span>
                                            </div>

                                            <div
                                                style={{ maxWidth: '350px' }}
                                                class="mb-2"
                                            >
                                                <div class="d-flex align-items-center mb-1">
                                                    <span class="ms-2"
                                                        style={{ width: '24px' }}

                                                    >۵</span>
                                                    <i class="fas fa-star text-warning ms-2"></i>
                                                    <div class="progress flex-grow-1 ms-2"

                                                        style={{ height: '6px', backgroundColor: '#f2f2f2' }}
                                                    >
                                                        <div class="progress-bar bg-warning" style={{ width: '70%' }}></div>
                                                    </div>
                                                    <span class="text-muted" style={{ width: '36px' }}>70%</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-1">
                                                    <span class="ms-2" style={{ width: '24px' }}>۴</span>
                                                    <i class="fas fa-star text-warning ms-2"></i>
                                                    <div class="progress flex-grow-1 ms-2" style={{ height: '6px', background: '#f2f2f2' }}
                                                    >
                                                        <div class="progress-bar bg-warning"
                                                            style={{ width: '15%' }}
                                                        ></div>
                                                    </div>
                                                    <span class="text-muted" style={{ width: '36px' }}>15%</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-1">
                                                    <span class="ms-2" style={{ width: '24px' }}>۳</span>
                                                    <i class="fas fa-star text-warning ms-2"></i>
                                                    <div class="progress flex-grow-1 ms-2"
                                                        style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                                        <div class="progress-bar bg-warning" style={{ width: '8%' }}></div>
                                                    </div>
                                                    <span class="text-muted" style={{ width: '36px' }}>8%</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-1">
                                                    <span class="ms-2" style={{ width: '24px' }}>۲</span>
                                                    <i class="fas fa-star text-warning ms-2"></i>
                                                    <div class="progress flex-grow-1 ms-2"
                                                        style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                                        <div class="progress-bar bg-warning" style={{ width: '4%' }}></div>
                                                    </div>
                                                    <span class="text-muted" style={{ width: '36px' }}>4%</span>
                                                </div>
                                                <div class="d-flex align-items-center mb-1">
                                                    <span class="ms-2" style={{ width: '24px' }}>۱</span>
                                                    <i class="fas fa-star text-warning ms-2"></i>
                                                    <div class="progress flex-grow-1 ms-2"
                                                        style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                                        <div class="progress-bar bg-warning" style={{ width: '3%' }}></div>
                                                    </div>
                                                    <span class="text-muted" style={{ width: '36px' }}>3%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mb-4">
                                        <div>
                                            <div class="mb-3">
                                                <span class="fw-bold">علی رضایی</span>
                                                <span class="text-warning ms-1">
                                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                                            class="fas fa-star-half-alt"></i>
                                                </span>
                                                <span class="text-muted"
                                                    style={{ fontSize: '12px' }}
                                                >۲ روز پیش</span>
                                                <div class="mt-1 text-secondary"
                                                    style={{ fontSize: '15px' }}
                                                >
                                                    خیلی راضی‌ام، کیفیت عالی و ارسال سریع بود.
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <span class="fw-bold">مریم محمدی</span>
                                                <span class="text-warning ms-1">
                                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                                            class="far fa-star"></i>
                                                </span>
                                                <span class="text-muted" style={{ fontSize: '12px' }}>۱ هفته پیش</span>
                                                <div class="mt-1 text-secondary"
                                                    style={{ fontSize: '15px' }}
                                                >
                                                    نسبت به قیمتش ارزش خرید داره، اما بسته‌بندی بهتر می‌تونست باشه.
                                                </div>
                                            </div>
                                            <br />
                                            <div class="d-flex justify-content-center align-items-center">
                                                <button class="btn-more-comment">مشاهده بیشتر</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section3" className="priceHistory">
                            <h2 className="pt-4"> تاریخچه قیمت و محبوبیت</h2>
                            <h6>
                                آیا قیمت فعلی معامله خوبی است؟
                            </h6>
                            <p className="w-75 mb-4">
                                نمودار تاریخچه قیمت، کمترین قیمت را در طول زمان، بدون احتساب هزینه های حمل و نقل، نشان می
                                دهد.
                                <br />
                                نمودار محبوبیت محبوبیت محصول را در دسته بندی خود نشان می دهد.
                            </p>
                            <canvas id="myChart" width={700} height={300} />
                        </section>
                        <section dir="rtl" id="section4" className="features-fa">
                            <div className="container">
                                <h3 className="mt-5">مشخصات</h3>
                                <div className="row gy-4">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="feature-block">
                                            <div className="feature-block-title">مشخصات محصول</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>نام محصول</td>
                                                    <td>آیفون ۱۶ پرو مکس، ۲۵۶ گیگابایت</td>
                                                </tr>
                                                    <tr>
                                                        <td>برند</td>
                                                        <td>اپل</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="feature-block">
                                            <div className="feature-block-title">سری</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>سری</td>
                                                    <td>آیفون ۱۶</td>
                                                </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="feature-block">
                                            <div className="feature-block-title">ویژگی‌های محصول</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>رنگ‌ها</td>
                                                    <td>مشکی، بژ، سفید</td>
                                                </tr>
                                                    <tr>
                                                        <td>اندازه صفحه</td>
                                                        <td>۶.۹ اینچ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>کلاس IP</td>
                                                        <td>IP68</td>
                                                    </tr>
                                                    <tr>
                                                        <td>گوشی مناسب سالمندان</td>
                                                        <td className="no">✗ خیر</td>
                                                    </tr>
                                                    <tr>
                                                        <td>جنس بدنه</td>
                                                        <td>تیتانیوم، شیشه</td>
                                                    </tr>
                                                    <tr>
                                                        <td>سال عرضه</td>
                                                        <td>۱۴۰۳</td>
                                                    </tr>
                                                    <tr>
                                                        <td>سیستم عامل</td>
                                                        <td>iOS</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="feature-block">
                                            <div className="feature-block-title">ویژگی‌ها</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>تا شو</td>
                                                    <td className="no">✗ خیر</td>
                                                </tr>
                                                    <tr>
                                                        <td>مقاوم در برابر ضربه</td>
                                                        <td className="no">✗ خیر</td>
                                                    </tr>
                                                    <tr>
                                                        <td>امکانات ویژه</td>
                                                        <td>سازگاری با سمعک، اسپیکر استریو</td>
                                                    </tr>
                                                    <tr>
                                                        <td>ضد آب</td>
                                                        <td className="yes">✓ بله</td>
                                                    </tr>
                                                    <tr>
                                                        <td>سنسورهای داخلی</td>
                                                        <td>بارومتر، سنسور مجاورت، ژیروسکوپ/شتاب‌سنج، اثر انگشت، تشخیص چهره</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="feature-block">
                                            <div className="feature-block-title">صفحه نمایش</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>لمسی</td>
                                                    <td className="yes">✓ بله</td>
                                                </tr>
                                                    <tr>
                                                        <td>صفحه دوم</td>
                                                        <td className="no">✗ خیر</td>
                                                    </tr>
                                                    <tr>
                                                        <td>نوع صفحه</td>
                                                        <td>OLED</td>
                                                    </tr>
                                                    <tr>
                                                        <td>نرخ نوسازی</td>
                                                        <td>۱۲۰ هرتز</td>
                                                    </tr>
                                                    <tr>
                                                        <td>رزولوشن</td>
                                                        <td>۱۳۲۰×۲۸۶۶</td>
                                                    </tr>
                                                    <tr>
                                                        <td>تراکم پیکسلی</td>
                                                        <td>۴۶۰</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="feature-block">
                                            <div className="feature-block-title">ارتباطات</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>۴G</td>
                                                    <td className="yes">✓ بله</td>
                                                </tr>
                                                    <tr>
                                                        <td>دو سیم کارت هیبریدی</td>
                                                        <td className="no">✗ خیر</td>
                                                    </tr>
                                                    <tr>
                                                        <td>GPS</td>
                                                        <td className="yes">✓ بله</td>
                                                    </tr>
                                                    <tr>
                                                        <td>۵G</td>
                                                        <td className="yes">✓ بله</td>
                                                    </tr>
                                                    <tr>
                                                        <td>فرکانس ۵G</td>
                                                        <td>mmWave, Sub-6 GHz</td>
                                                    </tr>
                                                    <tr>
                                                        <td>سیم کارت</td>
                                                        <td>Nano-SIM, eSIM</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="feature-block">
                                            <div className="feature-block-title">بی‌سیم</div>
                                            <table className="feature-table">
                                                <tbody><tr>
                                                    <td>NFC</td>
                                                    <td className="yes">✓ بله</td>
                                                </tr>
                                                    <tr>
                                                        <td>استاندارد Wi-Fi</td>
                                                        <td>Wi-Fi 7 (802.11be)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>بلوتوث</td>
                                                        <td>۵.۳</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section5" class="Similar-products">
                            <SliderProduct></SliderProduct>
                        </section>

                    </div>
                    <aside class="col-lg-3 position-relative"
                        style={{ marginTop: '72.5px' }}
                    >
                        <div class="ads">
                            <img class="img-fluid rounded-2" src="/img/ads3.png" alt="" />

                        </div>
                    </aside>
                </div >
            </div >

            <FooterMain></FooterMain>


        </>
    )
}