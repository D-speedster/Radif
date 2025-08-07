import Link from "next/link"
import { useState, useEffect } from 'react'
import CategoryModal from './CategoryModal'


export default function Header_Main() {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile menu when window resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className="modern-header">
            <nav className="container-custom navbar navbar-expand-lg">
                <Link className="navbar-brand" href="/">
                    <img src="/img/radif-logo.svg" alt="logo" className="header-logo" />
                </Link>
                
                <button 
                    className="navbar-toggler modern-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                >
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
                
                <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav modern-nav ms-auto">
                        <li className="nav-item">
                            <button 
                                onClick={() => {
                                    setIsCategoryModalOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className="nav-link modern-nav-link category-btn"
                            >
                                <span className="nav-text">همه دسته‌بندی‌ها</span>
                                <span className="nav-indicator"></span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link href="/Special-Offers" className="nav-link modern-nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="nav-text">فروش ویژه</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Blog" className="nav-link modern-nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="nav-text">وبلاگ</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/how-to-use" className="nav-link modern-nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="nav-text">نحوه استفاده</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/info/About" className="nav-link modern-nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="nav-text">درباره ما</span>
                                <span className="nav-indicator"></span>
                            </Link>
                        </li>
                    </ul>

                    <div className="auth-section">
                        <Link href='/profile' className="auth-link" onClick={() => setIsMenuOpen(false)}>
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
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                position: sticky;
                top: 0;
                z-index: 1000;
                transition: all 0.3s ease;
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
                width: 140px;
                transition: transform 0.3s ease;
            }

            .header-logo:hover {
                transform: scale(1.05);
            }

            .modern-toggler {
                border: none;
                background: none;
                padding: 6px;
                border-radius: 8px;
                transition: all 0.3s ease;
                position: relative;
                width: 36px;
                height: 36px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 3px;
                order: 3;
            }

            .modern-toggler:hover {
                background: rgba(0, 0, 0, 0.05);
            }

            .hamburger-line {
                width: 24px;
                height: 2px;
                background: #333;
                border-radius: 2px;
                transition: all 0.3s ease;
                transform-origin: center;
            }

            .hamburger-line.active:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .hamburger-line.active:nth-child(2) {
                opacity: 0;
            }

            .hamburger-line.active:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
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
                font-size: 15px;
                font-weight: 500;
                color: #2d3748 !important;
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
                .modern-toggler {
                    display: none;
                }

                .navbar-collapse {
                    display: none;
                }
            }

            @media (max-width: 768px) {
                .header-logo {
                    height: 45px;
                    width: 120px;
                }

                .navbar {
                    padding: 0.8rem 0;
                    min-height: 60px;
                }
            }

            @media (max-width: 576px) {
                .header-logo {
                    height: 40px;
                    width: 100px;
                }
            }
        `}</style>
        </>
    )
}