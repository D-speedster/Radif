/**
 * HeroSection - بازطراحی مینیمال و مدرن با حفظ ساختار JSX و پراپ‌های داینامیک
 */

export default function HeroSection(props) {
  const {
    badgeIcon = '💎',
    badgeText = 'بهترین پلتفرم مقایسه قیمت ایران',
    titleLines = ['بگرد،', 'مقایسه کن،', 'پس‌انداز کن'],
    highlightIndex = 2,
    subtitle = 'امروز بهترین کالا خود را پیدا کنید',
    description = 'در ردیف می‌توانید قیمت‌های ۸ میلیون محصول را از ۶,۳۰۰ فروشگاه مقایسه کنید',
    searchAction = '/search',
    searchParamName = 'product',
    searchPlaceholder = 'امروز دنبال چی می‌گردی؟',
    initialQuery = '',
    // کنترل‌های نمایش
    showBackground = true,
    showParticles = true,
    showCircles = true,
  } = props || {};

  return (
    <div className="neo-hero">
      {/* پس‌زمینه با افکت‌های متحرک - قابل مینیمایز */}
      {showBackground && (
        <div className="neo-background" aria-hidden="true">
          <div className="neo-gradient"></div>
          <div className="neo-grid"></div>
          {showCircles && (
            <div className="neo-circles">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`neo-circle circle-${i + 1}`}></div>
              ))}
            </div>
          )}
          {showParticles && (
            <div className="neo-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`neo-particle particle-${i + 1}`}></div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* محتوای اصلی - طراحی مینیمال و مدرن */}
      <div className="neo-container">
        <div className="neo-content-wrapper">
          <div className="neo-content-left">
            {/* نشان ویژه */}
            <div className="neo-badge" aria-label="platform-badge">
              <span className="badge-icon">{badgeIcon}</span>
              <span className="badge-text">{badgeText}</span>
            </div>

            {/* عنوان اصلی - با ساپورت هایلایت داینامیک */}
            <h1 className="neo-title">
              {titleLines.map((line, idx) => (
                <div
                  key={idx}
                  className={`title-line ${idx === highlightIndex ? 'highlight' : ''}`}
                >
                  {line}
                </div>
              ))}
            </h1>

            {/* زیرعنوان */}
            <h2 className="neo-subtitle">{subtitle}</h2>

            {/* توضیحات */}
            <p className="neo-description">{description}</p>

            {/* جستجوی مدرن */}
            <div className="neo-search">
              <form method="GET" action={searchAction} className="neo-search-form" role="search">
                <div className="neo-search-wrapper">
                  <div className="search-icon-container">
                    <svg
                      className="neo-search-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <input
                    name={searchParamName}
                    type="search"
                    className="neo-search-input"
                    placeholder={searchPlaceholder}
                    autoComplete="off"
                    defaultValue={initialQuery}
                    aria-label={searchPlaceholder}
                  />
                  <button type="submit" className="neo-search-btn">
                    <span className="btn-text">جستجو</span>
                    <div className="btn-arrow" aria-hidden="true">→</div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* سمت راست مینیمال و مدرن */}
          <div className="neo-content-right">
            <div className="neo-hero-slogan">
              <h3 className="slogan-title">مقایسه. انتخاب. خرید.</h3>
              <p className="slogan-description">هوشمندانه‌ترین راه برای خرید آنلاین</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}