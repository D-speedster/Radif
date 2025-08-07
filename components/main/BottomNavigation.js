import Link from "next/link"
import { useState } from 'react'
import CategoryModal from './CategoryModal'

export default function BottomNavigation() {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    return (
        <>
        <div className="bottom-navigation">
            <div className="nav-items">
                <Link href="/" className="nav-item">
                    <div className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                    </div>
                    <span className="nav-label">خانه</span>
                </Link>
                
                <button 
                    onClick={() => setIsCategoryModalOpen(true)}
                    className="nav-item nav-button"
                >
                    <div className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                    </div>
                    <span className="nav-label">دسته‌بندی</span>
                </button>
                
                <Link href="/search" className="nav-item">
                    <div className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                    </div>
                    <span className="nav-label">جستجو</span>
                </Link>
                
                <Link href="/Special-Offers" className="nav-item">
                    <div className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <span className="nav-label">فروش ویژه</span>
                </Link>
                
                <Link href="/profile" className="nav-item">
                    <div className="nav-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    <span className="nav-label">پروفایل</span>
                </Link>
            </div>
        </div>
        
        <CategoryModal 
            isOpen={isCategoryModalOpen} 
            onClose={() => setIsCategoryModalOpen(false)} 
        />
        
        <style jsx>{`
            .bottom-navigation {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-top: 1px solid rgba(0, 0, 0, 0.08);
                padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
                z-index: 1000;
                display: none;
            }
            
            .nav-items {
                display: flex;
                justify-content: space-around;
                align-items: center;
                max-width: 500px;
                margin: 0 auto;
                padding: 0 16px;
            }
            
            .nav-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: #666;
                transition: all 0.3s ease;
                padding: 8px 12px;
                border-radius: 12px;
                min-width: 60px;
                background: none;
                border: none;
                cursor: pointer;
                font-family: 'IRANYEKAN', sans-serif;
            }
            
            .nav-button {
                background: none !important;
                border: none !important;
            }
            
            .nav-item:hover,
            .nav-item:focus {
                color: #667eea;
                background: rgba(102, 126, 234, 0.08);
                transform: translateY(-2px);
            }
            
            .nav-icon {
                margin-bottom: 4px;
                transition: transform 0.3s ease;
            }
            
            .nav-item:hover .nav-icon {
                transform: scale(1.1);
            }
            
            .nav-label {
                font-size: 11px;
                font-weight: 500;
                text-align: center;
                line-height: 1.2;
            }
            
            @media (max-width: 991px) {
                .bottom-navigation {
                    display: block;
                }
            }
            
            @media (max-width: 576px) {
                .nav-items {
                    padding: 0 8px;
                }
                
                .nav-item {
                    padding: 6px 8px;
                    min-width: 50px;
                }
                
                .nav-label {
                    font-size: 10px;
                }
            }
        `}</style>
        </>
    )
}