export default function HeaderPanel() {
    return (
        <div className="main-header side-header sticky" >
            <div className="main-container container-fluid">
                <div className="main-header-left">
                    <a className="main-header-menu-icon" href="javascript:void(0);" id="mainSidebarToggle"><span></span></a>
                    <div className="hor-logo">
                        <a className="main-logo" href="index.html">
                            <img src="./img/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                            <img src="./img/brand/logo-light.png" className="header-brand-img desktop-logo-dark"
                                alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="main-header-center">
                    <div className="responsive-logo">
                        <a href="index.html"><img src="./img/brand/logo.png" className="mobile-logo" alt="logo" /></a>
                        <a href="index.html"><img src="./img/brand/logo-light.png" className="mobile-logo-dark"
                            alt="logo" /></a>
                    </div>
                    <div className="input-group">
                        <div className="input-group-btn search-panel">
                            <select className="form-control select2">
                                <option label="All categories">
                                </option>
                                <option value="IT Projects">
                                    پروژه های فناوری اطلاعات
                                </option>
                                <option value="Business Case">
                                    مورد تجاری
                                </option>
                                <option value="Microsoft Project">
                                    پروژه مایکروسافت
                                </option>
                                <option value="Risk Management">
                                    مدیریت ریسک
                                </option>
                                <option value="Team Building">
                                    ساختمان تیمی
                                </option>
                            </select>
                        </div>
                        <input type="search" className="form-control rounded-0" placeholder="جستجو برای هر چیزی ..." />
                        <button className="btn search-btn"><i className="fe fe-search"></i></button>
                    </div>
                </div>
                <div className="main-header-right">
                    <button className="navbar-toggler navresponsive-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
                    </button>
                    <div
                        className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                            <div className="d-flex order-lg-2 ms-auto">

                                <div className="dropdown header-search">
                                    <a className="nav-link icon header-search">
                                        <i className="fe fe-search header-icons"></i>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="main-form-search p-2">
                                            <div className="input-group">
                                                <div className="input-group-btn search-panel">
                                                    <select className="form-control select2">
                                                        <option label="All categories">
                                                        </option>
                                                        <option value="IT Projects">
                                                            پروژه های فناوری اطلاعات
                                                        </option>
                                                        <option value="Business Case">
                                                            مورد تجاری
                                                        </option>
                                                        <option value="Microsoft Project">
                                                            پروژه مایکروسافت
                                                        </option>
                                                        <option value="Risk Management">
                                                            مدیریت ریسک
                                                        </option>
                                                        <option value="Team Building">
                                                            ساختمان تیمی
                                                        </option>
                                                    </select>
                                                </div>
                                                <input type="search" className="form-control"
                                                    placeholder="جستجو برای هر چیزی ..." />
                                                <button className="btn search-btn"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" stroke-linecap="round"
                                                    stroke-linejoin="round" className="feather feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown d-flex main-header-theme">
                                    <a className="nav-link icon layout-setting">
                                        <span className="dark-layout">
                                            <i className="fe fe-sun header-icons"></i>
                                        </span>
                                        <span className="light-layout">
                                            <i className="fe fe-moon header-icons"></i>
                                        </span>
                                    </a>
                                </div>

                                <div className="dropdown main-header-notification flag-dropdown">
                                    <a className="nav-link icon country-Flag">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
                                            <g fill="#0052b4">
                                                <path
                                                    d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                                            </g>
                                            <g fill="#d80027">
                                                <path
                                                    d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                                                <path
                                                    d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="javascript:void(0);" className="dropdown-item d-flex ">
                                            <span className="avatar  me-3 align-self-center bg-transparent"><img
                                                src="./img/flags/french_flag.jpg" alt="img" /></span>
                                            <div className="d-flex">
                                                <span className="mt-2">فرانسوی</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item d-flex">
                                            <span className="avatar  me-3 align-self-center bg-transparent"><img
                                                src="./img/flags/germany_flag.jpg" alt="img" /></span>
                                            <div className="d-flex">
                                                <span className="mt-2">آلمانی</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item d-flex">
                                            <span className="avatar me-3 align-self-center bg-transparent"><img
                                                src="./img/flags/italy_flag.jpg" alt="img" /></span>
                                            <div className="d-flex">
                                                <span className="mt-2">ایتالیایی</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item d-flex">
                                            <span className="avatar me-3 align-self-center bg-transparent"><img
                                                src="./img/flags/russia_flag.jpg" alt="img" /></span>
                                            <div className="d-flex">
                                                <span className="mt-2">روسیه</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item d-flex">
                                            <span className="avatar  me-3 align-self-center bg-transparent"><img
                                                src="./img/flags/spain_flag.jpg" alt="img" /></span>
                                            <div className="d-flex">
                                                <span className="mt-2">اسپانیایی</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown ">
                                    <a className="nav-link icon full-screen-link">
                                        <i className="fe fe-maximize fullscreen-button fullscreen header-icons"></i>
                                        <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons"></i>
                                    </a>
                                </div>

                                <div className="dropdown main-header-notification">
                                    <a className="nav-link icon" href="javascript:void(0);">
                                        <i className="fe fe-bell header-icons"></i>
                                        <span className="badge bg-danger nav-link-badge">4</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="header-navheading">
                                            <p className="main-notification-text">شما 1 اعلان خوانده‌نشده دارید<span
                                                className="badge bg-pill bg-primary ms-3">مشاهده همه</span></p>
                                        </div>
                                        <div className="main-notification-list">
                                            <div className="media new">
                                                <div className="main-img-user online"><img alt="avatar"
                                                    src="./img/users/5.jpg" /></div>
                                                <div className="media-body">
                                                    <p>تبریک می‌گویم به <strong>اولیویا جیمز</strong> برای شروع قالب جدید</p>
                                                    <span>اکتبر 15 12:32 ب.ظ</span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="main-img-user"><img alt="avatar"
                                                    src="./img/users/2.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <p><strong>جاشوا گری</strong> پیام جدید دریافت شد</p>
                                                    <span>اکتبر 13 02:56 ب.ظ</span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="main-img-user online"><img alt="avatar"
                                                    src="./img/users/3.jpg" /></div>
                                                <div className="media-body">
                                                    <p><strong>الیزابت لوئیس</strong> برنامه‌ی زمانی جدید را اضافه کرده است</p><span>اکتبر
                                                        12 10:40 ب.ظ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-footer">
                                            <a href="notifications.html">مشاهده همه اعلان‌ها</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-header-notification">
                                    <a className="nav-link icon" href="chat.html">
                                        <i className="fe fe-message-square header-icons"></i>
                                        <span className="badge bg-success nav-link-badge">6</span>
                                    </a>
                                </div>

                                <div className="dropdown main-profile-menu">
                                    <a className="d-flex" href="javascript:void(0);">
                                        <span className="main-img-user"><img alt="avatar"
                                            src="./img/users/1.jpg" /></span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="header-navheading">
                                            <h6 className="main-notification-title">سونیا تیلور</h6>
                                            <p className="main-notification-text">طراح وب</p>
                                        </div>
                                        <a className="dropdown-item border-top" href="profile.html">
                                            <i className="fe fe-user"></i> پروفایل من
                                        </a>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="fe fe-edit"></i> ویرایش پروفایل
                                        </a>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="fe fe-settings"></i> تنظیمات حساب کاربری
                                        </a>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="fe fe-settings"></i> پشتیبانی
                                        </a>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="fe fe-compass"></i> فعالیت
                                        </a>
                                        <a className="dropdown-item" href="signin.html">
                                            <i className="fe fe-power"></i> خروج
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown  header-settings">
                                    <a href="javascript:void(0);" className="nav-link icon" data-bs-toggle="sidebar-right"
                                        data-bs-target=".sidebar-right">
                                        <i className="fe fe-align-right header-icons"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex header-setting-icon demo-icon fa-spin">
                        <a className="nav-link icon" href="javascript:void(0);">
                            <i className="fe fe-settings settings-icon "></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}