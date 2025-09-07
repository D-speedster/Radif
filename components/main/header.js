import Link from "next/link"
import { useState } from 'react'
import CategoryModal from './CategoryModal'


export default function Header_Main() {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    return (
        <>
        <header className="modern-header">
            <nav className="container-custom navbar navbar-expand-lg" role="navigation" aria-label="ناوبری اصلی">
                <Link className="navbar-brand brand" href="/" aria-label="رفتن به صفحه اصلی ردیف">
                    <img src="/img/radif-logo.svg" alt="لوگوی ردیف" className="header-logo" />
                    <span className="brand-name">ردیف</span>
                </Link>
                
                {/* Desktop navigation & actions */}
                <div className={`navbar-collapse`} id="primary-navigation">
                    <ul className="navbar-nav modern-nav ms-auto">
                        <li className="nav-item">
                            <button 
                                onClick={() => {
                                    setIsCategoryModalOpen(true);
                                }}
                                className="nav-link modern-nav-link category-btn"
                                aria-label="مشاهده همه دسته‌بندی‌ها"
                            >
                                <span className="nav-text">همه دسته‌بندی‌ها</span>
                                 <span className="nav-indicator"></span>
                             </button>
                         </li>
                        <li className="nav-item">
                            <Link href="/Special-Offers" className="nav-link modern-nav-link">
                                <span className="nav-text">فروش ویژه</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Blog" className="nav-link modern-nav-link">
                                <span className="nav-text">وبلاگ</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/how-to-use" className="nav-link modern-nav-link">
                                <span className="nav-text">نحوه استفاده</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/info/About" className="nav-link modern-nav-link">
                                <span className="nav-text">درباره ما</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                    </ul>

                    <div className="auth-section">
                        <Link href='https://panel.radif.org' className="auth-link">
                            <button className="modern-sign-in-button">
                                <span>ورود</span>
                                <div className="button-bg"></div>
                            </button>
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
        
        <CategoryModal 
            isOpen={isCategoryModalOpen} 
            onClose={() => setIsCategoryModalOpen(false)} 
        />
        
        <style jsx>{`
            .modern-header {
                background: #ffffff;
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                position: sticky;
                top: 0;
                z-index: 1000;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            }

            .navbar {
                padding: 1rem 0;
                min-height: 70px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-logo {
                height: 55px;
                width: auto;
                transition: transform 0.3s ease;
                display: block;
                object-fit: contain;
                flex-shrink: 0;
            }

            .header-logo:hover {
                transform: scale(1.05);
            }

            .hamburger-line {
                display: none;
            }

            .modern-nav {
                gap: 0.5rem;
                margin: 0;
                margin-left: auto;
                margin-right: 1rem;
            }

            .modern-nav-link {
                position: relative;
                padding: 12px 20px !important;
                font-family: 'IRANYEKAN', sans-serif;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: -0.2px;
                color: #1f2937 !important;
                text-decoration: none;
                border-radius: 12px;
                transition: all 0.3s ease;
                background: none !important;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            .nav-text {
                position: relative;
                z-index: 2;
                transition: color 0.3s ease;
            }

            .nav-indicator {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                border-radius: 2px;
                transition: all 0.3s ease;
                transform: translateX(-50%);
            }

            .modern-nav-link:hover {
                background: rgba(102, 126, 234, 0.08) !important;
                color: #667eea !important;
                transform: translateY(-1px);
            }

            .modern-nav-link:hover .nav-indicator {
                width: 80%;
            }

            .category-btn {
                background: none !important;
                border: none !important;
            }

            .auth-section {
                margin-left: 0;
                order: 2;
            }

            .auth-link {
                text-decoration: none;
            }

            .modern-sign-in-button {
                position: relative;
                padding: 12px 24px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 25px;
                font-family: 'IRANYEKAN', sans-serif;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                overflow: hidden;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            }

            .modern-sign-in-button span {
                position: relative;
                z-index: 2;
            }

            .button-bg {
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                transition: left 0.3s ease;
            }

            .modern-sign-in-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            }

            .modern-sign-in-button:hover .button-bg {
                left: 0;
            }

            @media (max-width: 991px) {
                .navbar-collapse {
                    display: none !important;
                }
                .auth-section {
                    display: none !important;
                }
                .navbar {
                    justify-content: center;
                }
                .navbar-brand.brand {
                    margin: 0 auto;
                }
            }

            @media (max-width: 768px) {
                .header-logo {
                    height: 45px;
                    width: auto;
                }

                .navbar {
                    padding: 0.8rem 0;
                    min-height: 60px;
                }
            }

            @media (max-width: 576px) {
                .header-logo {
                    height: 40px;
                    width: auto;
                }
            }
        `}</style>
        {/* Header redesigned overrides to align with theme and UX requirements */}
        <style jsx>{`
            .modern-header {
                background: #ffffff;
                border-bottom: 1px solid rgba(0,0,0,0.06);
                backdrop-filter: none;
                box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            }

            .navbar {
                padding: 12px 0;
                min-height: 72px;
                display: flex;
                align-items: center;
            }

            .navbar-brand.brand {
                display: inline-flex;
                align-items: center;
                gap: 12px;
                text-decoration: none;
            }

            .header-logo {
                height: 44px;
                width: auto;
                display: block;
                object-fit: contain;
                flex-shrink: 0;
            }

            .brand-name {
                font-family: 'IRANYEKAN', sans-serif;
                font-weight: 800;
                font-size: 20px;
                letter-spacing: -0.2px;
                color: var(--neutral-800, #1e293b);
                white-space: nowrap;
                line-height: 1;
                flex-shrink: 0;
            }

            .modern-nav {
                gap: 4px;
            }

            .modern-nav-link {
                padding: 10px 16px !important;
                border-radius: 10px;
                color: var(--neutral-800, #1f2937) !important;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: -0.2px;
            }

            .modern-nav-link:hover {
                background: rgba(102, 126, 234, 0.08) !important;
                color: var(--primary-color, #667eea) !important;
            }

            .nav-indicator {
                background: var(
                    --primary-gradient,
                    linear-gradient(90deg, #667eea 0%, #764ba2 100%)
                );
            }

            .modern-nav-link:focus-visible,
            .modern-sign-in-button:focus-visible {
                outline: 2px solid var(--primary-light, #8fa4f3);
                outline-offset: 2px;
            }

            /* Desktop */
            @media (min-width: 992px) {
                .navbar-collapse {
                    position: static;
                    display: flex !important;
                    background: transparent;
                    box-shadow: none;
                    border-top: none;
                    padding: 0;
                    align-items: center;
                    gap: 12px;
                }
                .modern-nav {
                    display: flex;
                    align-items: center;
                    margin-inline-end: 12px;
                }
                .auth-section { order: 2; }
            }

            /* Tablet & Mobile */
            @media (max-width: 991.98px) {
                .navbar-collapse { display: none !important; }
                .auth-section { display: none !important; }
                .navbar { justify-content: center; }
                .navbar-brand.brand { margin: 0 auto; }
            }

            /* Small mobiles */
            @media (max-width: 576px) {
                .header-logo { height: 36px; }
                .brand-name { font-size: 17px; }
                .modern-sign-in-button { padding: 10px 18px; font-size: 13px; }
            }
        `}</style>
        </>
    )
}