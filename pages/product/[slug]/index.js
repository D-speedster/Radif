import { useRouter } from 'next/router'
import Footer from '../../../components/panel/Footer'
import Header_Main from '../../../components/main/header'
import Breadcrumb from '../../../components/product/Breadcrumb'
import SectionProduct from '../../../components/product/sectionProduct'
import FooterMain from '../../../components/main/FooterMain'

export default function ProductPage() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{slug}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
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
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>



                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }}


                                                            >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }}

                                                            />
                                                            <span
                                                                style={{ fontSize: '18px' }}
                                                                class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>








                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>







                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </ul>

                                    </div>
                                </div>
                                <div class="items-shop mt-3 ">
                                    <div class="row">
                                        <ul style={{ listStyle: 'none' }}>


                                            <div class="card shadow-sm rounded-4 border-0">
                                                <div class="card-body p-3">


                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <div class="d-flex align-items-center gap-2">

                                                            <box-icon name="chevron-down"></box-icon>
                                                            <div
                                                                style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                            </div>

                                                            <img src="/img/digi.png" width="32" height="32"
                                                                style={{ borderRadius: '50%' }} />
                                                            <span style={{ fontSize: '18px' }} class="fw-semibold">دیجی
                                                                کالا</span>
                                                        </div>

                                                        <button
                                                            class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            <span>گزینه‌ها</span>
                                                        </button>
                                                    </div>

                                                    <hr class="my-2" />


                                                    <div class="mb-2">
                                                        <span class="fw-medium">گوشی آیفون 16 حافظه 256 گیگ رم 8 گیگ |
                                                            iPhone 16 | نات اکتیو</span>
                                                    </div>


                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span class="fw-bold text-success fs-5">101,400,000 تومان</span>
                                                        <div class="d-flex align-items-center gap-1 text-primary">
                                                            <box-icon name="truck" color="#0d6efd"></box-icon>
                                                            <span>ارسال رایگان</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>



                                        </ul>

                                    </div>
                                </div>
                            </section>
                        </div>
                        <aside class="col-lg-3 position-relative">

                            <img class="img-fluid rounded-2" src="/img/ads2.png" alt="" />

                        </aside>
                    </div >
                </div >
            </div >

            <FooterMain></FooterMain>


        </>
    )
}