import React from 'react';
import { Star, StarFill, GeoAlt, Clock, CheckCircle, Eye } from 'react-bootstrap-icons';

function SellersComponent({ products }) {
    // بررسی وجود داده‌ها
    if (!products || !Array.isArray(products) || products.length === 0) {
        return (
            <div className="sellers-section-fixed">
                <div className="no-sellers-message">
                    <i className="fas fa-store-slash"></i>
                    <p>هیچ فروشنده‌ای یافت نشد</p>
                </div>
            </div>
        );
    }

    const formatPrice = (price) => {
        if (!price) return '0';
        return new Intl.NumberFormat('fa-IR').format(price);
    };

    // داده‌های نمونه بر اساس اطلاعات ارائه شده
    const sampleData = {
        sellerName: 'بانه کالا',
        location: 'کردستان',
        rating: 5.0,
        experience: '۱۱ سال و ۲ ماه',
        productTitle: 'کنسول بازی سونی استوک مدل Playstation 4 FAT سفید ظرفیت 500 گ...',
        features: ['سلامت فیزیکی کالا', 'بازگشت کالا تا 7 روز', 'کارکرده', 'امکان پرداخت اقساطی'],
        price: 14290000,
        lastUpdate: '۱ ساعت پیش'
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<StarFill key={i} className="star-filled" />);
            } else {
                stars.push(<Star key={i} className="star-empty" />);
            }
        }
        return stars;
    };

    return (
        <div className="sellers-section-fixed">
            <div className="sellers-header-fixed">
                <div className="sellers-title-section">
                    <i className="fas fa-store"></i>
                    <h3 className="sellers-title-fixed">فروشندگان</h3>
                    <span className="sellers-count-fixed">{products.length} فروشنده</span>
                </div>
            </div>

            <div className="sellers-list-fixed">
                {products.map((item, index) => {
                    // ترکیب داده‌های واقعی با نمونه
                    const sellerData = {
                        ...sampleData,
                        ...item,
                        sellerName: item.seller || sampleData.sellerName,
                        productTitle: item.title || sampleData.productTitle,
                        price: item.price || sampleData.price
                    };

                    return (
                        <div className="seller-row-fixed" key={item.id || index}>
                            {/* Seller Info */}
                            <div className="seller-info-section">
                                <div className="seller-avatar-fixed">
                                    <i className="fas fa-store-alt"></i>
                                </div>
                                <div className="seller-details-fixed">
                                    <div className="seller-name-row">
                                        <h6 className="seller-name-fixed">{sellerData.sellerName}</h6>
                                        <div className="seller-badges">
                                            <span className="location-badge">
                                                <GeoAlt className="icon-small" />
                                                {sellerData.location}
                                            </span>
                                            <span className="rating-badge">
                                                <div className="stars-container">
                                                    {renderStars(sellerData.rating)}
                                                </div>
                                                <span className="rating-text">{sellerData.rating}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="seller-meta-row">
                                        <span className="experience-text">
                                            <Clock className="icon-small" />
                                            {sellerData.experience}
                                        </span>
                                        <div className="product-features-fixed">
                                            {sellerData.features.slice(0, 2).map((feature, idx) => (
                                                <span key={idx} className="feature-badge">
                                                    <CheckCircle className="icon-tiny" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="price-section-fixed">
                                <div className="price-main-fixed">
                                    <span className="price-value-fixed">{formatPrice(sellerData.price)}</span>
                                    <span className="price-currency-fixed">تومان</span>
                                </div>
                                <div className="price-meta-fixed">
                                    <span className="last-update-fixed">
                                        <i className="fas fa-sync-alt"></i>
                                        بروزشده در {sellerData.lastUpdate}
                                    </span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="seller-actions-fixed">
                                <button className="btn-view-seller-fixed">
                                    <Eye className="icon-small" />
                                    <span>مشاهده فروشنده</span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="sellers-footer-fixed">
                <button className="btn-show-all-fixed">
                    <i className="fas fa-list"></i>
                    <span>مشاهده همه فروشندگان</span>
                    <span className="count-badge">({products.length})</span>
                </button>
            </div>
        </div>
    );
}

export default SellersComponent;

