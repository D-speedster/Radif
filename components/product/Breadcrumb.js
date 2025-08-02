export default function Breadcrumb() {
    return (
        <div className="modern-breadcrumb">
            <div className="container-custom">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb-list">
                        <li className="breadcrumb-item">
                            <a href="/" className="breadcrumb-link">
                                <i className="fas fa-home"></i>
                                <span>خانه</span>
                            </a>
                        </li>
                        <li className="breadcrumb-separator">
                            <i className="fas fa-chevron-left"></i>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/products" className="breadcrumb-link">
                                <span>محصولات</span>
                            </a>
                        </li>
                        <li className="breadcrumb-separator">
                            <i className="fas fa-chevron-left"></i>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/products/mobile" className="breadcrumb-link">
                                <span>گوشی موبایل</span>
                            </a>
                        </li>
                        <li className="breadcrumb-separator">
                            <i className="fas fa-chevron-left"></i>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <span className="breadcrumb-current">سامسونگ Galaxy A55</span>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}