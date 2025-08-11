import React from 'react';
import { LuNewspaper, LuCalendar, LuTag, LuClock } from 'react-icons/lu';
import { FaRegNewspaper } from 'react-icons/fa';

const Knowledge = ({ newsData = {} }) => {
    const newsItems = Object.entries(newsData);

    if (newsItems.length === 0) {
        return null;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fa-IR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <section className="Knowledge" id="news-section">
            <div className="container-custom">
                {/* Header Section */}
                <div className="news-header">
                    <div className="news-title-wrapper">
                        <div className="news-icon">
                            <LuNewspaper size={28} />
                        </div>
                        <h2 className="news-title">
                            خبر روز
                        </h2>
                        <div className="news-subtitle">
                            آخرین اخبار تکنولوژی و نوآوری
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="news-grid">
                    {newsItems.map(([key, item]) => (
                        <article className="news-card" key={key} data-aos="fade-up" data-aos-delay={key * 100}>
                            <div className="news-card-inner">
                                {/* Image Container */}
                                <div className="news-image-container">
                                    <img 
                                        src={item.img} 
                                        alt={item.title}
                                        className="news-image"
                                        loading="lazy"
                                    />
                                    <div className="news-overlay">
                                        <div className="news-category">
                                            <LuTag size={14} />
                                            <span>{item.genre}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="news-content">
                                    <h3 className="news-card-title">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="news-description">
                                        {item.desc}
                                    </p>

                                    {/* Footer */}
                                    <div className="news-footer">
                                        <div className="news-meta">
                                            <div className="meta-item">
                                                <LuCalendar size={16} />
                                                <span>{formatDate(item.createdAt)}</span>
                                            </div>
                                            <div className="meta-item">
                                                <FaRegNewspaper size={16} />
                                                <span>{item.genre}</span>
                                            </div>
                                        </div>
                                        <div className="read-more">
                                            <span>ادامه مطلب</span>
                                            <LuClock size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Knowledge;