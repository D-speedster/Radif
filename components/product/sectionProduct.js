export default function SectionProduct() {
    return (
        <div class="container-custom">
            <div class="row">
                <div class="col-lg-9">
                    <div class="product-main mt-3 mb-3">
                        <div class="container-custom">
                            <div class="row">
                                <div class="col-lg-1 d-lg-block d-none">
                                    <img src="/img/iphone16.png" class="gallery-thumb" />
                                    <img src="/img/gallery/2.webp" class="gallery-thumb" />
                                    <img src="/img/gallery/3.webp" class="gallery-thumb" />
                                    <img src="/img/gallery/4.webp" class="gallery-thumb" />
                                </div>
                                <div class="col-lg-11">
                                    <div class="row">
                                        <div class="col-12 col-lg-4 mx-auto">
                                            <div class="main-pic">
                                                <img src="/img/iphone16.png" class="mainpic" alt="iPhone 16" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-8">
                                            <div class="product-detail container-custom">
                                                <span class="product-title">
                                                    گوشی موبایل اپل مدل iPhone 16 CH دو سیم کارت ظرفیت 128 گیگابایت و رم
                                                    8 گیگابایت
                                                </span>
                                                <div class="Ability mt-4">
                                                    <div
                                                        class="d-flex align-items-center text-secondary fs-6 modern-badges">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <box-icon name='star' type='solid' color='#f9d635'
                                                                size="sm"></box-icon>
                                                            <span class="fw-bold text-dark">4.6</span>
                                                        </div>

                                                        <div class="separator"></div>

                                                        <div class="d-flex align-items-center gap-1 hoverable">
                                                            <box-icon name='bell' size="sm" color="#6c757d"></box-icon>
                                                            <span>هشدار قیمتی</span>
                                                        </div>

                                                        <div class="separator"></div>

                                                        <div class="d-flex align-items-center gap-1 hoverable">
                                                            <box-icon name='git-compare' size="sm"
                                                                color="#6c757d"></box-icon>
                                                            <span>مقایسه</span>
                                                        </div>
                                                    </div>


                                                    <p class="mt-3">
                                                        گوشی موبایل اپل مدل iPhone 16، به عنوان یکی از جدیدترین مدل‌های
                                                        این برند معتبر...
                                                    </p>
                                                    <span class="cheapest-price">
                                                        شروع قیمت از <span>۱۵,۹۰۰,۰۰۰</span> تومان
                                                    </span>
                                                    <br />
                                                    <button class="btn btn-outline-dark mt-3">حافظه 256 گیگ</button>
                                                    <button class="btn btn-outline-dark mt-3">حافظه 128 گیگ</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=" tabs" id="tabs">
                        <div class="d-flex container-custom">
                            <button
                                style={{ border: 'none', backgroundColor: '#FFF' }}
                                class="tab-button ms-5 pb-2"
                                data-scroll="section1">فروشندگان</button>
                            <button
                                style={{ border: 'none', backgroundColor: '#FFF' }}
                                class="tab-button ms-5 pb-2"
                                data-scroll="section2">نظرات</button>
                            <button
                                style={{ border: 'none', backgroundColor: '#FFF' }}
                                class="tab-button ms-5 pb-2"
                                data-scroll="section3">سابقه قیمتی</button>
                            <button
                                style={{ border: 'none', backgroundColor: '#FFF' }}
                                class="tab-button ms-5 pb-2"
                                data-scroll="section4">مشخصات</button>
                            <button
                                style={{ border: 'none', backgroundColor: '#FFF' }}
                                class="tab-button"
                                data-scroll="section5">مشابه</button>
                        </div>
                    </div>


                </div>
                <aside class="col-lg-3 position-relative">

                    <img class="img-fluid rounded-2" src="/img/ads.png" alt="" />

                </aside>
            </div>
        </div >
    )
}