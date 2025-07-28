export default function Topic() {
    return (
        <section className="topic">
            <div className="container-custom">
                {/* Header Section */}
                <div className="topic-header">
                    <div className="topic-badge">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        <span>چرا ردیف؟</span>
                    </div>
                    <h2 className="topic-title">
                        ردیف، میزبان همه برندهای محبوب تو!
                    </h2>
                    <p className="topic-subtitle">
                        تجربه خریدی هوشمند با مقایسه قیمت از صدها فروشگاه معتبر
                    </p>
                </div>

                {/* Features Grid */}
                <div className="topic-features">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM7 14L9.5 11.5L11 13L14.5 9.5L17 12V14H7Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>مقایسه هوشمند</h3>
                        <p>مقایسه قیمت و ویژگی‌های محصولات از صدها فروشگاه در یک نگاه</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L11.91 12.25L15.83 8.33L17.5 10H19V9H21ZM1 15H3L3.94 18.06L2.5 19.5L3.91 20.91L5.34 19.47L8.5 22.63L9.91 21.22L6.75 18.06L7.69 15H9.5V13H1V15Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>جستجوی پیشرفته</h3>
                        <p>فیلترهای هوشمند برای یافتن دقیق‌ترین نتایج مطابق نیاز شما</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2ZM12 4.44L18.18 9.08L17.45 19.16L12 16.1L6.55 19.16L5.82 9.08L12 4.44Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>برندهای معتبر</h3>
                        <p>دسترسی به محصولات اصل و معتبر از بهترین برندهای دنیا</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>خرید مطمئن</h3>
                        <p>تضمین کیفیت و اصالت کالا با پشتیبانی ۲۴ ساعته</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="topic-stats">
                    <div className="stat-item">
                        <div className="stat-number">۱۰۰۰+</div>
                        <div className="stat-label">فروشگاه معتبر</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">۵۰۰+</div>
                        <div className="stat-label">برند مطرح</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">۱M+</div>
                        <div className="stat-label">محصول متنوع</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">۲۴/۷</div>
                        <div className="stat-label">پشتیبانی</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="topic-cta">
                    <h3>همین حالا شروع کن!</h3>
                    <p>محصول مورد نظرت رو پیدا کن و بهترین قیمت رو انتخاب کن</p>
                    <button className="cta-button">
                        <span>شروع خرید هوشمند</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}