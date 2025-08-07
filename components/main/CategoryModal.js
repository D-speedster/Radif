import { useState, useEffect } from 'react';
import { FaTimes, FaChevronRight, FaLaptop, FaMobile, FaTv, FaGamepad, FaHeadphones, FaCamera, FaHome, FaCar, FaUser, FaBook, FaHeart, FaBaby, FaFootballBall, FaWrench, FaGift } from 'react-icons/fa';

const CategoryModal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories data structure similar to PriceRunner
  const categories = [
    {
      id: 1,
      name: 'کامپیوتر و لپ‌تاپ',
      icon: <FaLaptop />,
      subcategories: [
        'لپ‌تاپ',
        'کامپیوتر دسکتاپ',
        'مانیتور',
        'کیبورد و ماوس',
        'هارد دیسک و SSD',
        'کارت گرافیک',
        'پردازنده',
        'مادربرد',
        'رم'
      ]
    },
    {
      id: 2,
      name: 'موبایل و تبلت',
      icon: <FaMobile />,
      subcategories: [
        'گوشی موبایل',
        'تبلت',
        'ساعت هوشمند',
        'هندزفری بی‌سیم',
        'پاوربانک',
        'کیف و محافظ',
        'شارژر',
        'کابل'
      ]
    },
    {
      id: 3,
      name: 'تلویزیون و صوتی تصویری',
      icon: <FaTv />,
      subcategories: [
        'تلویزیون',
        'ساندبار',
        'سیستم صوتی خانگی',
        'پروژکتور',
        'گیرنده دیجیتال',
        'دی‌وی‌دی پلیر'
      ]
    },
    {
      id: 4,
      name: 'بازی و سرگرمی',
      icon: <FaGamepad />,
      subcategories: [
        'کنسول بازی',
        'دسته بازی',
        'بازی کامپیوتر',
        'بازی کنسول',
        'هدست گیمینگ',
        'صندلی گیمینگ'
      ]
    },
    {
      id: 5,
      name: 'صوتی و تصویری',
      icon: <FaHeadphones />,
      subcategories: [
        'هدفون',
        'اسپیکر',
        'میکروفون',
        'آمپلی‌فایر',
        'ضبط صوت'
      ]
    },
    {
      id: 6,
      name: 'دوربین و عکاسی',
      icon: <FaCamera />,
      subcategories: [
        'دوربین دیجیتال',
        'دوربین فیلمبرداری',
        'لنز',
        'سه‌پایه',
        'فلاش',
        'کیف دوربین'
      ]
    },
    {
      id: 7,
      name: 'خانه و آشپزخانه',
      icon: <FaHome />,
      subcategories: [
        'لوازم آشپزخانه',
        'جاروبرقی',
        'ماشین لباسشویی',
        'یخچال و فریزر',
        'کولر و بخاری',
        'مبلمان',
        'دکوراسیون'
      ]
    },
    {
      id: 8,
      name: 'خودرو و موتورسیکلت',
      icon: <FaCar />,
      subcategories: [
        'لوازم یدکی خودرو',
        'لوازم جانبی خودرو',
        'موتورسیکلت',
        'لوازم موتورسیکلت',
        'تایر و رینگ'
      ]
    },
    {
      id: 9,
      name: 'مد و پوشاک',
      icon: <FaUser />,
      subcategories: [
        'لباس مردانه',
        'لباس زنانه',
        'کفش',
        'کیف و کوله',
        'ساعت',
        'جواهرات',
        'عینک'
      ]
    },
    {
      id: 10,
      name: 'کتاب و لوازم تحریر',
      icon: <FaBook />,
      subcategories: [
        'کتاب',
        'لوازم تحریر',
        'کتاب الکترونیکی',
        'نرم‌افزار آموزشی'
      ]
    },
    {
      id: 11,
      name: 'زیبایی و سلامت',
      icon: <FaHeart />,
      subcategories: [
        'لوازم آرایشی',
        'عطر و ادکلن',
        'مراقبت از پوست',
        'مراقبت از مو',
        'لوازم ورزشی'
      ]
    },
    {
      id: 12,
      name: 'کودک و نوزاد',
      icon: <FaBaby />,
      subcategories: [
        'لباس کودک',
        'اسباب‌بازی',
        'لوازم نوزاد',
        'کالسکه',
        'صندلی ماشین کودک'
      ]
    },
    {
      id: 13,
      name: 'ورزش و تفریح',
      icon: <FaFootballBall />,
      subcategories: [
        'لوازم ورزشی',
        'دوچرخه',
        'کوهنوردی',
        'شنا',
        'فوتبال'
      ]
    },
    {
      id: 14,
      name: 'ابزار و تجهیزات',
      icon: <FaWrench />,
      subcategories: [
        'ابزار دستی',
        'ابزار برقی',
        'تجهیزات صنعتی',
        'لوازم باغبانی'
      ]
    },
    {
      id: 15,
      name: 'هدیه و سوغات',
      icon: <FaGift />,
      subcategories: [
        'هدایای تولد',
        'هدایای عاشقانه',
        'سوغات',
        'کارت هدیه'
      ]
    }
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="category-modal-overlay">
      <div className="category-modal">
        {/* Header */}
        <div className="category-modal-header">
          <h2>همه دسته‌بندی‌ها</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="category-modal-content">
          {/* Categories Section */}
          <div className="categories-section">
            <h3>دسته‌بندی محصولات</h3>
            <div className="categories-grid">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`category-card ${
                    selectedCategory?.id === category.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <span className="category-name">{category.name}</span>
                  <FaChevronRight className="category-arrow" />
                </div>
              ))}
            </div>
          </div>

          {/* Subcategories Panel */}
          <div className="subcategories-panel">
            {selectedCategory ? (
              <>
                <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>
                  {selectedCategory.name}
                </h3>
                <div className="subcategories-grid">
                  {selectedCategory.subcategories.map((sub, index) => (
                    <a
                      key={index}
                      href={`/search?category=${encodeURIComponent(sub)}`}
                      className="subcategory-item"
                      onClick={onClose}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '100px' }}>
                <p>یک دسته‌بندی را انتخاب کنید</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .category-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .category-modal {
          background: white;
          border-radius: 16px;
          width: 95vw;
          height: 95vh;
          max-width: none;
          max-height: none;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .category-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 1px solid #e5e7eb;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .category-modal-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .category-modal-content {
          display: flex;
          flex-direction: column;
          height: calc(95vh - 100px);
          max-height: none;
        }

        .categories-section {
          padding: 32px;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .categories-section h3 {
          margin: 0 0 24px 0;
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          text-align: center;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          max-height: 300px;
          overflow-y: auto;
        }

        .category-card {
          display: flex;
          align-items: center;
          padding: 18px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          background: white;
          border: 2px solid transparent;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .category-card:hover {
          background: #f3f4f6;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .category-card.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
          transform: translateX(4px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .category-icon {
          font-size: 20px;
          margin-left: 12px;
          width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-name {
          flex: 1;
          font-weight: 500;
          font-size: 14px;
        }

        .category-arrow {
          font-size: 12px;
          opacity: 0.6;
          transition: transform 0.2s;
        }

        .category-card:hover .category-arrow,
        .category-card.active .category-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        .subcategories-panel {
          flex: 1;
          padding: 32px;
          overflow-y: auto;
          background: white;
        }

        .subcategories-panel h3 {
          margin: 0 0 24px 0;
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          padding-bottom: 16px;
          border-bottom: 2px solid #e5e7eb;
        }

        .subcategories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .subcategory-item {
          padding: 14px 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          text-decoration: none;
          color: #475569;
          transition: all 0.3s;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .subcategory-item:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          text-decoration: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .category-modal {
            width: 98vw;
            height: 98vh;
            margin: 5px;
          }

          .categories-section {
            padding: 20px;
          }

          .categories-section h3 {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 12px;
            max-height: 250px;
          }

          .category-card {
            padding: 14px 16px;
            font-size: 13px;
          }

          .category-icon {
            font-size: 18px;
            margin-left: 10px;
            width: 24px;
          }

          .subcategories-panel {
            padding: 20px;
          }

          .subcategories-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 12px;
          }

          .subcategory-item {
            padding: 12px 14px;
            font-size: 13px;
          }

          .category-modal-header {
            padding: 16px 20px;
          }

          .category-modal-header h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryModal;