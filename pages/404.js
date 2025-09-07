import React from 'react'
import Header_Main from '../components/main/header'
import FooterMain from '../components/main/FooterMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Error404() {
    return (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <Head>
                <title>صفحه یافت نشد | ردیف</title>
            </Head>



            <Header_Main></Header_Main>

            <div className="error-page-container">
                <div className="error-glass-backdrop">
                    <div className="error-glass-layer layer-1"></div>
                    <div className="error-glass-layer layer-2"></div>
                    <div className="error-glass-layer layer-3"></div>
                </div>

                <div className="error-geometric-shapes">
                    <div className="error-shape error-shape-circle"></div>
                    <div className="error-shape error-shape-square"></div>
                    <div className="error-shape error-shape-hexagon"></div>
                </div>

                <div className="error-content">
                    <div className="error-code">404</div>
                    <h1 className="error-title">صفحه مورد نظر یافت نشد</h1>
                    <p className="error-message">متأسفانه صفحه‌ای که به دنبال آن هستید در دسترس نیست.</p>
                    <div className="error-actions">
                        <Link style={{color : '#FFF'}} href="/" className="error-button primary-button">
                            بازگشت به صفحه اصلی
                        </Link>
                        <Link style={{color : '#FFF'}} href="/contact" className="error-button secondary-button">
                            تماس با پشتیبانی
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .error-page-container {
                    position: relative;
                    min-height: 70vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: linear-gradient(135deg,
                        #667eea 0%,
                        #764ba2 25%,
                        #f093fb 50%,
                        #f5576c 75%,
                        #4facfe 100%);
                    background-size: 400% 400%;
                    animation: errorGradientShift 15s ease infinite;
                    padding: 2rem 1rem;
                    margin-top: 1rem;
                }
                
                @keyframes errorGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .error-glass-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    overflow: hidden;
                }
                
                .error-glass-layer {
                    position: absolute;
                    border-radius: 50%;
                    backdrop-filter: blur(40px);
                    background: linear-gradient(135deg,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(255, 255, 255, 0.05) 50%,
                        rgba(255, 255, 255, 0.02) 100%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: errorMorphing 20s ease-in-out infinite;
                }
                
                .error-glass-layer.layer-1 {
                    width: 500px;
                    height: 500px;
                    top: -10%;
                    left: -10%;
                    animation-delay: 0s;
                }
                
                .error-glass-layer.layer-2 {
                    width: 400px;
                    height: 400px;
                    top: 20%;
                    right: -5%;
                    animation-delay: 5s;
                }
                
                .error-glass-layer.layer-3 {
                    width: 350px;
                    height: 350px;
                    bottom: 10%;
                    left: 30%;
                    animation-delay: 10s;
                }
                
                @keyframes errorMorphing {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg) scale(1);
                        border-radius: 50%;
                    }
                    25% {
                        transform: translateY(-30px) rotate(90deg) scale(1.1);
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    }
                    50% {
                        transform: translateY(-60px) rotate(180deg) scale(0.9);
                        border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
                    }
                    75% {
                        transform: translateY(-30px) rotate(270deg) scale(1.05);
                        border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
                    }
                }
                
                .error-geometric-shapes {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 2;
                }
                
                .error-shape {
                    position: absolute;
                    background: linear-gradient(45deg,
                        rgba(255, 255, 255, 0.1),
                        rgba(255, 255, 255, 0.05));
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    animation: errorShapeFloat 12s ease-in-out infinite;
                }
                
                .error-shape-circle {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    top: 15%;
                    left: 15%;
                    animation-delay: 0s;
                }
                
                .error-shape-square {
                    width: 80px;
                    height: 80px;
                    border-radius: 15px;
                    top: 25%;
                    right: 10%;
                    animation-delay: 6s;
                }
                
                .error-shape-hexagon {
                    width: 90px;
                    height: 90px;
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    bottom: 20%;
                    left: 20%;
                    animation-delay: 9s;
                }
                
                @keyframes errorShapeFloat {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-30px) rotate(15deg);
                    }
                }
                
                .error-content {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    max-width: 600px;
                    padding: 3rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                }
                
                .error-code {
                    font-size: 10rem;
                    font-weight: var(--font-weight-black);
                    background: linear-gradient(to right, #ffffff, #f0f0f0);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: 1;
                    margin-bottom: 1rem;
                    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    letter-spacing: -5px;
                }
                
                .error-title {
                    font-size: 2.5rem;
                    font-weight: var(--font-weight-bold);
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .error-message {
                    font-size: 1.2rem;
                    font-weight: var(--font-weight-medium);
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 2rem;
                }
                
                .error-actions {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                
                .error-button {
                    padding: 0.8rem 1.5rem;
                    border-radius: 50px;
                    font-weight: var(--font-weight-medium);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                }
                
                .error-button.primary-button {
                    background: white;
                    color: #764ba2;
                    border: none;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .error-button.primary-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
                }
                
                .error-button.secondary-button {
                    background: transparent;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }
                
                .error-button.secondary-button:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: white;
                }
                
                /* حذف استایل‌های اضافی که با هدر تداخل داشتند */
                
                @media (max-width: 768px) {
                    .error-code {
                        font-size: 6rem;
                    }
                    
                    .error-title {
                        font-size: 1.75rem;
                    }
                    
                    .error-message {
                        font-size: 1.1rem;
                    }
                    
                    .error-content {
                        padding: 2rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .error-code {
                        font-size: 5rem;
                    }
                    
                    .error-title {
                        font-size: 1.5rem;
                    }
                    
                    .error-message {
                        font-size: 1rem;
                    }
                    
                    .error-content {
                        padding: 1.5rem;
                    }
                    
                    .error-actions {
                        flex-direction: column;
                    }
                }
            `}</style>

            <FooterMain />
        </>
    )
}
