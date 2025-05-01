import Link from 'next/link'

export default function SidePanel() {
    return (
        <div className="sticky">
            <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
                <div className="main-sidebar-header main-container-1 active">
                    <div className="sidemenu-logo">
                        <Link className="main-logo" href="index.html">
                            <img src="/img/brand/logo-light.png" className="header-brand-img desktop-logo" alt="logo" />
                            <img src="/img/brand/icon-light.png" className="header-brand-img icon-logo" alt="logo" />
                            <img src="/img/brand/logo.png" className="header-brand-img desktop-logo theme-logo" alt="logo" />
                            <img src="/img/brand/icon.png" className="header-brand-img icon-logo theme-logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="main-sidebar-body main-body-1">
                        <div className="slide-left disabled" id="slide-left"><i className="fe fe-chevron-left"></i></div>
                        <ul className="menu-nav nav">
                            <li className="nav-header"><span className="nav-label">پیشخوان</span></li>
                            <li className="nav-item">
                                <Link className="nav-link" href="index.html">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-home sidemenu-icon menu-icon"></i>
                                    <span className="sidemenu-label">پیشخوان</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-wallet sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">رمزارزها
                                        <span className="sidemenu-label2">ارزها</span>
                                    </span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1">
                                        <Link href="#" onClick={(e) => e.preventDefault()}>رمزارزها</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-dashbaord">پیشخوان</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-market">سرانه بازار</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-currency-exchange">تبادل ارز</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-buysell">خرید و فروش</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-wallet">کیف پول</Link>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link" href="/crypto-transcations">معاملات</Link>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">تجارت الکترونیک</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">تجارت الکترونیک</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-dashboard.html">پیشخوان</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-products.html">محصولات</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-product-details.html">جزئیات محصول</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-cart.html">سبد خرید</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-wishlist.html">لیست خرید</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-checkout.html">پرداخت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-orders.html">سفارشات</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-addproduct.html">افزودن محصول</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ecommerce-account.html">حساب کاربری</Link></li>
                                </ul>
                            </li>
                            <li className="nav-header"><span className="nav-label">صفحه نخست</span></li>
                            <li className="nav-item">
                                <Link className="nav-link" href="landing.html">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-layout sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">صفحه نخست</span>
                                </Link>
                            </li>
                            <li className="nav-header"><span className="nav-label">برنامه‌ها</span></li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-write sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">برنامه‌ها</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">برنامه‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="widgets.html">ابزارها</Link></li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">ایمیل</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="mail-inbox.html">صندوق ورودی</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="viewmail.html">مشاهده ایمیل</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="mail-compose.html">ارسال ایمیل</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">نقشه‌ها</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="map-mapel.html">نقشه‌های Mapel</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="map-vector.html">نقشه‌های Vector</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">جداول</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="table-basic.html">جداول پایه</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="table-data.html">جداول داده</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">وبلاگ</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="blog.html">صفحه وبلاگ</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="blog-details.html">جزئیات وبلاگ</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="blog-post.html">ارسال وبلاگ</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">مدیریت فایل</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="filemanager.html">مدیریت فایل</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="filemanager-list.html">لیست مدیریت فایل</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="file-details.html">جزئیات فایل</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="file-attachments.html">پیوست فایل</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">آیکون‌ها</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons.html">فونت آوسام</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons2.html">آیکون‌های طراحی مواد</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons3.html">آیکون‌های خط ساده</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons4.html">آیکون‌های پر</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons5.html">آیکون‌های Ionic</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons6.html">آیکون‌های پرچم</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons7.html">آیکون‌های Pe7</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons8.html">آیکون‌های Themify</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons9.html">آیکون‌های Typicons</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons10.html">آیکون‌های هواشناسی</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons11.html">آیکون‌های مواد</Link></li>
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="icons12.html">آیکون‌های بوت استرپ</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header"><span className="nav-label">اجزا</span></li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-package sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">عناصر</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">عناصر</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="accordions.html">آکاردیون</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="alerts.html">هشدارها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="avatars.html">آواتارها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="breadcrumbs.html">بریدکرامب</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="buttons.html">دکمه‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="badges.html">نشان‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="dropdowns.html">منوی کشویی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="thumbnails.html">تصاویر کوچک</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="list-groups.html">گروه‌های لیست</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="navigations.html">ناوبری‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="paginations.html">صفحه‌بندی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="popovers.html">پاپ‌اورها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="progress.html">پیشرفت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="spinners.html">چرخشی‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="media-object.html">اشیاء رسانه‌ای</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="typography.html">تایپوگرافی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="tooltips.html">راهنماها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="toast.html">تست</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="tags.html">برچسب‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="tabs.html">تب‌ها</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-briefcase sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">رابط‌های کاربری پیشرفته</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">رابط‌های کاربری پیشرفته</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="carousel.html">کاروسل</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="collapse.html">جمع‌شدن</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chat.html">گفتگو</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="cards-page.html">کارت‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="calendar.html">تقویم</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="contacts.html">مخاطبان</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="modals.html">مودال‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="timeline.html">خط زمانی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="draggablecards.html">کارت‌های قابل جابجایی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="sweet-alerts.html">هشدارهای شیرین</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="ratings.html">رتبه‌بندی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="search.html">جستجو</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="userlist.html">لیست کاربران</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="notifications.html">اطلاعیه‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="treeview.html">نمایش درختی</Link></li>
                                </ul>
                            </li>
                            <li className="nav-header"><span className="nav-label">صفحات دیگر</span></li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-palette sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label ">صفحات</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">صفحات</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="profile.html">پروفایل</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="aboutus.html">درباره ما</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="settings.html">تنظیمات</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="invoice.html">فاکتور</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="pricing.html">قیمت‌گذاری</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="gallery.html">گالری</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="notifications-list.html">لیست اعلان‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="faqs.html">سوالات متداول</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="success-message.html">پیام موفقیت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="danger-message.html">پیام خطر</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="warning-message.html">پیام هشدار</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="emptypage.html">صفحه خالی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="switcher.html">صفحه سوئیچر</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-shield sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">ابزارها</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">ابزارها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="backgrounds.html">پس‌زمینه‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="borders.html">حاشیه‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="display.html">نمایش</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="flex.html">فلکس</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="height.html">ارتفاع</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="margin.html">حاشیه</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="padding.html">فاصله داخلی</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="position.html">موقعیت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="width.html">پهنا</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="extras.html">اضافی</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-menu sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">زیرمنو</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">زیرمنو</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="#">زیرمنو-01</Link></li>
                                    <li className="nav-sub-item">
                                        <Link className="nav-sub-link sub-with-sub" href="#">
                                            <span className="sidemenu-label">زیرمنو-02</span>
                                            <i className="angle fe fe-chevron-right"></i>
                                        </Link>
                                        <ul className="sub-nav-sub">
                                            <li className="nav-sub-item"><Link className="nav-sub-link" href="#">سطح-01</Link></li>
                                            <li className="nav-sub-item">
                                                <Link className="nav-sub-link sub-with-sub" href="#">
                                                    <span className="sidemenu-label">سطح-02</span>
                                                    <i className="angle fe fe-chevron-right"></i>
                                                </Link>
                                                <ul className="sub-nav-sub">
                                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="#">سطح-11</Link></li>
                                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="#">سطح-12</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-lock sidemenu-icon menu-icon"></i>
                                    <span className="sidemenu-label">احراز هویت</span>
                                    <i className="angle fe fe-chevron-right"></i>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">احراز هویت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="signin.html">ورود</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="signup.html">ثبت نام</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="forgot.html">فراموشی رمزعبور</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="reset.html">بازنشانی رمزعبور</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="lockscreen.html">قفل صفحه</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="underconstruction.html">در حال ساخت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="error404.html">خطای 404</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="error500.html">خطای 500</Link></li>
                                </ul>
                            </li>
                            <li className="nav-header"><span className="nav-label">فرم‌ها و نمودارها</span></li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-receipt sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">فرم‌ها</span>
                                    <span className="badge bg-info side-badge">7</span>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">فرم‌ها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-elements.html">عناصر فرم</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-advanced.html">فرم‌های پیشرفته</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-layouts.html">طرح‌های فرم</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-validations.html">اعتبارسنجی فرم</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-wizards.html">ویزارد فرم</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-editor.html">ویرایشگر WYSIWYG</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="form-element-sizes.html">اندازه‌های عنصر فرم</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link with-sub" href="#">
                                    <span className="shape1"></span>
                                    <span className="shape2"></span>
                                    <i className="ti-bar-chart-alt sidemenu-icon menu-icon "></i>
                                    <span className="sidemenu-label">نمودارها</span>
                                    <span className="badge bg-danger side-badge">5</span>
                                </Link>
                                <ul className="nav-sub">
                                    <li className="side-menu-label1"><Link href="#">نمودارها</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chart-morris.html">نمودارهای Morris</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chart-flot.html">نمودارهای Flot</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chart-chartjs.html">چارت</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chart-spark-peity.html">نمودارهای Sparkline و Peity</Link></li>
                                    <li className="nav-sub-item"><Link className="nav-sub-link" href="chart-echart.html">Echart</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="slide-right" id="slide-right"><i className="fe fe-chevron-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}