export default function FooterMain() {

    return (
        <footer className="modern-footer">
            <div className="container-custom">
                <div className="footer-content">
                    <div className="footer-section brand-section">
                        <div className="brand-logo">
                            <img src="/img/radif-logo.svg" alt="ردیف" className="footer-logo" />
                        </div>
                        <div className="brand-description">
                            <p className="main-desc">
                                ردیف، همراه شما در جستجوی هوشمندانه محصولات در سراسر وب.
                            </p>
                            <p className="sub-desc">
                                ما در ردیف تلاش می‌کنیم تا بهترین و متنوع‌ترین کالاها را از سراسر اینترنت گردآوری کرده و به شما در یافتن آنچه نیاز دارید، یاری رسانیم.
                            </p>
                        </div>
                    </div>

                    <div className="footer-section links-section">
                        <h4 className="section-title">دسترسی سریع</h4>
                        <ul className="footer-links">
                            <li><a href="">لیست فروشگاه ها</a></li>
                            <li><a href="">ثبت نام فروشگاه</a></li>
                            <li><a href="">پنل فروشگاه</a></li>
                            <li><a href="">فرصت شغلی</a></li>
                        </ul>
                    </div>

                    <div className="footer-section links-section">
                        <h4 className="section-title">خدمات</h4>
                        <ul className="footer-links">
                            <li><a href="">پیگیری سفارش</a></li>
                            <li><a href="">پشتیبانی</a></li>
                            <li><a href="">راهنمای خرید امن</a></li>
                            <li><a href="">درباره ردیف</a></li>
                        </ul>
                    </div>

                    <div className="footer-section certificates-section">
                        <h4 className="section-title">مجوزها و گواهینامه‌ها</h4>
                        <div className="certificates-grid">
                            <div className="certificate-item">
                                <img src="/img/new-enamad.png" alt="اینماد" />
                            </div>
                            <div className="certificate-item">
                                <img src="/img/markazi.webp" alt="بانک مرکزی" />
                            </div>
                            <div className="certificate-item">
                                <img src="/img/work.webp" alt="وزارت کار" />
                            </div>
                            <div className="certificate-item">
                                <img src="/img/samandehi.webp" alt="ساماندهی" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container-custom">
                    <div className="copyright-text">
                        © تمام حقوق مادی و معنوی این سایت متعلق به ردیف است.
                    </div>
                </div>
            </div>
        </footer>
    )

}