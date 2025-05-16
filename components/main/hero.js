export default function HeroSection(params) {

    return (
        <div className="container-custom mt-2">
            <div className="header-search d-flex flex-wrap">
                <div className="phone-image-wrapper">
                    <img src="/img/Web_hero_desktop.png" className="phone-image" alt="اپلیکیشن ردیف" />
                </div>
                <div className="header-content">
                    <div className="search-container">
                        <div className="text-content">
                            <h1 className="main-title">بگرد، مقایسه کن، پس‌انداز کن</h1>
                            <h2 className="subtitle">امروز بهترین کالا خود را پیدا کنید</h2>
                            <p className="description">در ردیف می‌توانید قیمت‌های ۸ میلیون محصول را از ۶,۳۰۰ فروشگاه مقایسه
                                کنید</p>
                            <div className="search-box mt-2">
                                <form method="GET" action='/search'>
                                    <input name="product" type="search" className="form-control" placeholder="امروز دنبال چی می‌گردی؟" />
                                    <button type="submit" className="search-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="feather feather-search" viewBox="0 0 24 24">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}