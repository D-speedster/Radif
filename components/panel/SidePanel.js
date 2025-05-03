import Link from 'next/link'

export default function SidePanel() {
    return (
        <div className="sticky">
            <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
                <div className="main-sidebar-header main-container-1 active">
                    <div className="sidemenu-logo">
                        <a className="main-logo" href="index.html">
                            <img
                                src="/img/brand/logo-light.png"
                                className="header-brand-img desktop-logo"
                                alt="logo"
                            />
                            <img
                                src="/img/brand/icon-light.png"
                                className="header-brand-img icon-logo"
                                alt="logo"
                            />
                            <img
                                src="/img/brand/logo.png"
                                className="header-brand-img desktop-logo theme-logo"
                                alt="logo"
                            />
                            <img
                                src="/img/brand/icon.png"
                                className="header-brand-img icon-logo theme-logo"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="main-sidebar-body main-body-1">
                        <div className="slide-left disabled" id="slide-left">
                            <i className="fe fe-chevron-left" />
                        </div>
                        <ul className="menu-nav nav">
                            <li className="nav-header">

                                <span className="nav-label">پیشخوان</span>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-home sidemenu-icon menu-icon" />
                                    <span className="sidemenu-label">پیشخوان</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-wallet sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">
                                        مدیریت کاربران

                                    </span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">

                                    <li className="nav-sub-item">
                                        {" "}
                                        <Link className="nav-sub-link" href="/">
                                            لیست کاربران
                                        </Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="crypto-market.html">
                                            تأیید/رد مدارک فروشنده‌ها
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="crypto-currency-exchange.html"
                                        >
                                            مشاهده و ویرایش پروفایل فروشنده
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="crypto-currency-exchange.html"
                                        >
                                            وضعیت کیف پول و تراکنش‌ها


                                        </a>
                                    </li>

                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="crypto-currency-exchange.html"
                                        >
                                            تنظیم سطح دسترسی
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="crypto-currency-exchange.html"
                                        >
                                            مسدودسازی یا فعال‌سازی حساب


                                        </a>
                                    </li>




                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">مدیریت محصولات</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    {/* <li className="side-menu-label1">
                                        <a href="javascript:void(0)">تجارت الکترونیک</a>
                                    </li> */}
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-dashboard.html">
                                            لیست محصولات فروشندگان


                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-products.html">
                                            لیست محصولات کرال‌شده

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="ecommerce-product-details.html"
                                        >
                                            جزئیات محصول
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-cart.html">
                                            تأیید/رد محصول جدید

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-wishlist.html">
                                            ویرایش اطلاعات محصولات

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-checkout.html">
                                            اتصال دستی محصولات مشابه                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-orders.html">
                                            حذف یا مخفی‌سازی محصولات معیوب

                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">دسته‌بندی‌ها و برندها</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    {/* <li className="side-menu-label1">
                                        <a href="javascript:void(0)">تجارت الکترونیک</a>
                                    </li> */}
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-dashboard.html">
                                            لیست دسته‌بندی‌ها
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-products.html">
                                            افزودن دسته یا زیر‌دسته


                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="ecommerce-product-details.html"
                                        >
                                            لیست برندها و ثبت برند جدید

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-cart.html">
                                            اتصال برندها به دسته‌ها

                                        </a>
                                    </li>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label"> پرداخت‌ها، اشتراک‌ها</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    {/* <li className="side-menu-label1">
                                        <a href="javascript:void(0)">تجارت الکترونیک</a>
                                    </li> */}
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-dashboard.html">
                                            لیست تراکنش‌های مالی
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-products.html">
                                            فاکتورهای فروشندگان
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link"
                                            href="ecommerce-product-details.html"
                                        >
                                            پلن‌های اشتراک و مدیریت

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-cart.html">
                                            وضعیت اشتراک هر فروشنده

                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-wishlist.html">
                                            مدیریت درگاه‌های پرداخت

                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label"> مدیریت نظرات و امتیاز</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    {/* <li className="side-menu-label1">
                                        <a href="javascript:void(0)">تجارت الکترونیک</a>
                                    </li> */}
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-dashboard.html">
                                            لیست دیدگاه‌ها با وضعیت
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="ecommerce-products.html">
                                            بررسی میانگین امتیاز محصولات

                                        </a>
                                    </li>
                                
                                </ul>
                            </li>
                            <li className="nav-header">
                                <span className="nav-label">کرالر</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="landing.html">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-layout sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">مدیریت کرالر</span>
                                </a>
                            </li>
                            <li className="nav-header">
                                <span className="nav-label">تنظیمات</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-write sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">لاگ‌ها های سیستم</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    {/* <li className="side-menu-label1">
                                        <a href="javascript:void(0)">برنامه‌ها</a>
                                    </li> */}
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="widgets.html">
                                            ورود و خروج مدیران


                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="widgets.html">
                                        گزارش خطاهای سیستم


                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="widgets.html">
                                        تاریخچه پرداخت‌ها و تراکنش‌ها




                                        </a>
                                    </li>
                                
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-write sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">تنظیمات و اعلان‌ها</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1">
                                        <a href="javascript:void(0)">برنامه‌ها</a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="widgets.html">
                                            ابزارها
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">ایمیل</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="mail-inbox.html">
                                                    صندوق ورودی
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="viewmail.html">
                                                    مشاهده ایمیل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="mail-compose.html">
                                                    ارسال ایمیل
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">نقشه‌ها</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="map-mapel.html">
                                                    نقشه‌های Mapel
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="map-vector.html">
                                                    نقشه‌های Vector
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">جداول</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="table-basic.html">
                                                    جداول پایه
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="table-data.html">
                                                    جداول داده
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">وبلاگ</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog.html">
                                                    صفحه وبلاگ
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog-details.html">
                                                    جزئیات وبلاگ
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog-post.html">
                                                    ارسال وبلاگ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">مدیریت فایل</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="filemanager.html">
                                                    مدیریت فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="filemanager-list.html">
                                                    لیست مدیریت فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="file-details.html">
                                                    جزئیات فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="file-attachments.html">
                                                    پیوست فایل
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">آیکون‌ها</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons.html">
                                                    فونت آوسام
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons2.html">
                                                    آیکون‌های طراحی مواد
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons3.html">
                                                    آیکون‌های خط ساده
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons4.html">
                                                    آیکون‌های پر
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons5.html">
                                                    آیکون‌های Ionic
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons6.html">
                                                    آیکون‌های پرچم
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons7.html">
                                                    آیکون‌های Pe7
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons8.html">
                                                    آیکون‌های Themify
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons9.html">
                                                    آیکون‌های Typicons
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons10.html">
                                                    آیکون‌های هواشناسی
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons11.html">
                                                    آیکون‌های مواد
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons12.html">
                                                    آیکون‌های بوت استرپ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link with-sub" href="javascript:void(0)">
                                    <span className="shape1" />
                                    <span className="shape2" />
                                    <i className="ti-write sidemenu-icon menu-icon " />
                                    <span className="sidemenu-label">مدیریت صفحات و محتوا</span>
                                    <i className="angle fe fe-chevron-right" />
                                </a>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1">
                                        <a href="javascript:void(0)">برنامه‌ها</a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a className="nav-sub-link" href="widgets.html">
                                            ابزارها
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">ایمیل</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="mail-inbox.html">
                                                    صندوق ورودی
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="viewmail.html">
                                                    مشاهده ایمیل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="mail-compose.html">
                                                    ارسال ایمیل
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">نقشه‌ها</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="map-mapel.html">
                                                    نقشه‌های Mapel
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="map-vector.html">
                                                    نقشه‌های Vector
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">جداول</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="table-basic.html">
                                                    جداول پایه
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="table-data.html">
                                                    جداول داده
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">وبلاگ</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog.html">
                                                    صفحه وبلاگ
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog-details.html">
                                                    جزئیات وبلاگ
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="blog-post.html">
                                                    ارسال وبلاگ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">مدیریت فایل</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="filemanager.html">
                                                    مدیریت فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="filemanager-list.html">
                                                    لیست مدیریت فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="file-details.html">
                                                    جزئیات فایل
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="file-attachments.html">
                                                    پیوست فایل
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a
                                            className="nav-sub-link sub-with-sub"
                                            href="javascript:void(0)"
                                        >
                                            <span className="sidemenu-label">آیکون‌ها</span>
                                            <i className="angle fe fe-chevron-right" />
                                        </a>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons.html">
                                                    فونت آوسام
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons2.html">
                                                    آیکون‌های طراحی مواد
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons3.html">
                                                    آیکون‌های خط ساده
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons4.html">
                                                    آیکون‌های پر
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons5.html">
                                                    آیکون‌های Ionic
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons6.html">
                                                    آیکون‌های پرچم
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons7.html">
                                                    آیکون‌های Pe7
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons8.html">
                                                    آیکون‌های Themify
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons9.html">
                                                    آیکون‌های Typicons
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons10.html">
                                                    آیکون‌های هواشناسی
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons11.html">
                                                    آیکون‌های مواد
                                                </a>
                                            </li>
                                            <li className="nav-sub-item">
                                                <a className="nav-sub-link" href="icons12.html">
                                                    آیکون‌های بوت استرپ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="slide-right" id="slide-right">
                            <i className="fe fe-chevron-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}