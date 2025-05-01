export default function HeroSection(params) {

    return (
        <div class="container-custom mt-2">
            <div class="header-search d-flex flex-wrap">
                <div class="phone-image-wrapper">
                    <img src="/img/Web_hero_desktop.png" class="phone-image" alt="اپلیکیشن ردیف" />
                </div>
                <div class="header-content">
                    <div class="search-container">
                        <div class="text-content">
                            <h1 class="main-title">بگرد، مقایسه کن، پس‌انداز کن</h1>
                            <h2 class="subtitle">امروز بهترین کالا خود را پیدا کنید</h2>
                            <p class="description">در ردیف می‌توانید قیمت‌های ۸ میلیون محصول را از ۶,۳۰۰ فروشگاه مقایسه
                                کنید</p>
                            <div class="search-box mt-2">
                                <input type="search" class="form-control" placeholder="امروز دنبال چی می‌گردی؟" />
                                <button type="submit" class="search-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-search" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}