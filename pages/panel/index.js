'use client'
import Head from "next/head";
import Switcher from "../../components/panel/switcher";
import SidePanel from "../../components/panel/SidePanel";
import Script from "next/script";
import { useEffect } from "react";


export default function Home() {
    useEffect(() => {
        // اینجا کدهای jQuery که نیاز به $ دارند قرار می‌دهی
        if (typeof window !== 'undefined') {
          const $ = require('jquery');
          require('select2');
          $('#mySelect').select2();
        }
      }, []);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Spruha - PHP Admin Panel Dashboard Template" />
                <meta name="author" content="Spruko Technologies Private Limited" />
                <meta
                    name="keywords"
                    content="php dashboard, php template, admin dashboard bootstrap, bootstrap admin theme, admin, php admin panel, bootstrap admin template, admin dashboard template, admin template bootstrap, php admin dashboard, dashboard template, dashboard template bootstrap, bootstrap admin, admin panel template, dashboard"
                />

                <title>داشبورد اسپروها</title>

                <link rel="icon" href="https://php.spruko.com/spruha/spruhaimg/brand/favicon.ico" />

                {/* Bootstrap CSS */}
                <link id="style" href="/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

                {/* Icons CSS */}
                <link href="/plugins/web-fonts/icons.css" rel="stylesheet" />
                <link href="/plugins/web-fonts/font-awesome/font-awesome.min.css" rel="stylesheet" />
                <link href="/plugins/web-fonts/plugin.css" rel="stylesheet" />

                {/* Style CSS */}
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/css/plugins.css" rel="stylesheet" />

                {/* Switcher CSS */}
                <link href="/switcher/css/switcher.css" rel="stylesheet" />
                <link href="/switcher/demo.css" rel="stylesheet" />
            </Head>
            <div className="rtl main-body leftmenu">
                <Switcher></Switcher>
                {/* <div id="global-loader">
                <img src="/img/loader.svg" class="loader-img" alt="Loader" />
            </div> */}
                <div class="page">
                    <div className="main-header side-header sticky">
                        <div className="main-container container-fluid">
                            <div className="main-header-left">
                                <a
                                    className="main-header-menu-icon"
                                    href="javascript:void(0);"
                                    id="mainSidebarToggle"
                                >
                                    <span />
                                </a>
                                <div className="hor-logo">
                                    <a className="main-logo" href="index.html">
                                        <img
                                            src=".img/brand/logo.png"
                                            className="header-brand-img desktop-logo"
                                            alt="logo"
                                        />
                                        <img
                                            src=".img/brand/logo-light.png"
                                            className="header-brand-img desktop-logo-dark"
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="main-header-center">
                                <div className="responsive-logo">
                                    <a href="index.html">
                                        <img
                                            src=".img/brand/logo.png"
                                            className="mobile-logo"
                                            alt="logo"
                                        />
                                    </a>
                                    <a href="index.html">
                                        <img
                                            src=".img/brand/logo-light.png"
                                            className="mobile-logo-dark"
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-btn search-panel">
                                        <select className="form-control select2">
                                            <option label="All categories"></option>
                                            <option value="IT Projects">پروژه های فناوری اطلاعات</option>
                                            <option value="Business Case">مورد تجاری</option>
                                            <option value="Microsoft Project">پروژه مایکروسافت</option>
                                            <option value="Risk Management">مدیریت ریسک</option>
                                            <option value="Team Building">ساختمان تیمی</option>
                                        </select>
                                    </div>
                                    <input
                                        type="search"
                                        className="form-control rounded-0"
                                        placeholder="جستجو برای هر چیزی ..."
                                    />
                                    <button className="btn search-btn">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                            <div className="main-header-right">
                                <button
                                    className="navbar-toggler navresponsive-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent-4"
                                    aria-controls="navbarSupportedContent-4"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
                                </button>
                                {/* Navresponsive closed */}
                                <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                        <div className="d-flex order-lg-2 ms-auto">
                                            {/* Search */}
                                            <div className="dropdown header-search">
                                                <a className="nav-link icon header-search">
                                                    <i className="fe fe-search header-icons" />
                                                </a>
                                                <div className="dropdown-menu">
                                                    <div className="main-form-search p-2">
                                                        <div className="input-group">
                                                            <div className="input-group-btn search-panel">
                                                                <select className="form-control select2">
                                                                    <option label="All categories"></option>
                                                                    <option value="IT Projects">
                                                                        پروژه های فناوری اطلاعات
                                                                    </option>
                                                                    <option value="Business Case">مورد تجاری</option>
                                                                    <option value="Microsoft Project">
                                                                        پروژه مایکروسافت
                                                                    </option>
                                                                    <option value="Risk Management">مدیریت ریسک</option>
                                                                    <option value="Team Building">ساختمان تیمی</option>
                                                                </select>
                                                            </div>
                                                            <input
                                                                type="search"
                                                                className="form-control"
                                                                placeholder="جستجو برای هر چیزی ..."
                                                            />
                                                            <button className="btn search-btn">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={20}
                                                                    height={20}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="feather feather-search"
                                                                >
                                                                    <circle cx={11} cy={11} r={8} />
                                                                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Search */}
                                            {/* Theme-Layout */}
                                            <div className="dropdown d-flex main-header-theme">
                                                <a className="nav-link icon layout-setting">
                                                    <span className="dark-layout">
                                                        <i className="fe fe-sun header-icons" />
                                                    </span>
                                                    <span className="light-layout">
                                                        <i className="fe fe-moon header-icons" />
                                                    </span>
                                                </a>
                                            </div>
                                            {/* Theme-Layout */}
                                            {/* country */}
                                            <div className="dropdown main-header-notification flag-dropdown">
                                                <a className="nav-link icon country-Flag">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <circle cx={256} cy={256} r={256} fill="#f0f0f0" />
                                                        <g fill="#0052b4">
                                                            <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                                                        </g>
                                                        <g fill="#d80027">
                                                            <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                                                            <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:void(0);" className="dropdown-item d-flex ">
                                                        <span className="avatar  me-3 align-self-center bg-transparent">
                                                            <img src=".img/flags/french_flag.jpg" alt="img" />
                                                        </span>
                                                        <div className="d-flex">
                                                            <span className="mt-2">فرانسوی</span>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item d-flex">
                                                        <span className="avatar  me-3 align-self-center bg-transparent">
                                                            <img src=".img/flags/germany_flag.jpg" alt="img" />
                                                        </span>
                                                        <div className="d-flex">
                                                            <span className="mt-2">آلمانی</span>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item d-flex">
                                                        <span className="avatar me-3 align-self-center bg-transparent">
                                                            <img src=".img/flags/italy_flag.jpg" alt="img" />
                                                        </span>
                                                        <div className="d-flex">
                                                            <span className="mt-2">ایتالیایی</span>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item d-flex">
                                                        <span className="avatar me-3 align-self-center bg-transparent">
                                                            <img src=".img/flags/russia_flag.jpg" alt="img" />
                                                        </span>
                                                        <div className="d-flex">
                                                            <span className="mt-2">روسیه</span>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item d-flex">
                                                        <span className="avatar  me-3 align-self-center bg-transparent">
                                                            <img src=".img/flags/spain_flag.jpg" alt="img" />
                                                        </span>
                                                        <div className="d-flex">
                                                            <span className="mt-2">اسپانیایی</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* country */}
                                            {/* Full screen */}
                                            <div className="dropdown ">
                                                <a className="nav-link icon full-screen-link">
                                                    <i className="fe fe-maximize fullscreen-button fullscreen header-icons" />
                                                    <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" />
                                                </a>
                                            </div>
                                            {/* Full screen */}
                                            {/* Notification */}
                                            <div className="dropdown main-header-notification">
                                                <a className="nav-link icon" href="javascript:void(0);">
                                                    <i className="fe fe-bell header-icons" />
                                                    <span className="badge bg-danger nav-link-badge">4</span>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <div className="header-navheading">
                                                        <p className="main-notification-text">
                                                            شما 1 اعلان خوانده‌نشده دارید
                                                            <span className="badge bg-pill bg-primary ms-3">
                                                                مشاهده همه
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="main-notification-list">
                                                        <div className="media new">
                                                            <div className="main-img-user online">
                                                                <img alt="avatar" src=".img/users/5.jpg" />
                                                            </div>
                                                            <div className="media-body">
                                                                <p>
                                                                    تبریک می‌گویم به <strong>اولیویا جیمز</strong> برای شروع
                                                                    قالب جدید
                                                                </p>
                                                                <span>اکتبر 15 12:32 ب.ظ</span>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <div className="main-img-user">
                                                                <img alt="avatar" src=".img/users/2.jpg" />
                                                            </div>
                                                            <div className="media-body">
                                                                <p>
                                                                    <strong>جاشوا گری</strong> پیام جدید دریافت شد
                                                                </p>
                                                                <span>اکتبر 13 02:56 ب.ظ</span>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <div className="main-img-user online">
                                                                <img alt="avatar" src=".img/users/3.jpg" />
                                                            </div>
                                                            <div className="media-body">
                                                                <p>
                                                                    <strong>الیزابت لوئیس</strong> برنامه‌ی زمانی جدید را
                                                                    اضافه کرده است
                                                                </p>
                                                                <span>اکتبر 12 10:40 ب.ظ</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-footer">
                                                        <a href="notifications.html">مشاهده همه اعلان‌ها</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Notification */}
                                            {/* Messages */}
                                            <div className="main-header-notification">
                                                <a className="nav-link icon" href="chat.html">
                                                    <i className="fe fe-message-square header-icons" />
                                                    <span className="badge bg-success nav-link-badge">6</span>
                                                </a>
                                            </div>
                                            {/* Messages */}
                                            {/* Profile */}
                                            <div className="dropdown main-profile-menu">
                                                <a className="d-flex" href="javascript:void(0);">
                                                    <span className="main-img-user">
                                                        <img alt="avatar" src=".img/users/1.jpg" />
                                                    </span>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <div className="header-navheading">
                                                        <h6 className="main-notification-title">سونیا تیلور</h6>
                                                        <p className="main-notification-text">طراح وب</p>
                                                    </div>
                                                    <a className="dropdown-item border-top" href="profile.html">
                                                        <i className="fe fe-user" /> پروفایل من
                                                    </a>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="fe fe-edit" /> ویرایش پروفایل
                                                    </a>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="fe fe-settings" /> تنظیمات حساب کاربری
                                                    </a>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="fe fe-settings" /> پشتیبانی
                                                    </a>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="fe fe-compass" /> فعالیت
                                                    </a>
                                                    <a className="dropdown-item" href="signin.html">
                                                        <i className="fe fe-power" /> خروج
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Profile */}
                                            {/* Sidebar */}
                                            <div className="dropdown  header-settings">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link icon"
                                                    data-bs-toggle="sidebar-right"
                                                    data-bs-target=".sidebar-right"
                                                >
                                                    <i className="fe fe-align-right header-icons" />
                                                </a>
                                            </div>
                                            {/* Sidebar */}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex header-setting-icon demo-icon fa-spin">
                                    <a className="nav-link icon" href="javascript:void(0);">
                                        <i className="fe fe-settings settings-icon " />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SidePanel></SidePanel>
                    <div className="main-content side-content pt-0">
                        <div className="container-fluid">
                            <div className="inner-body">
                                {/* Page Header */}
                                <div className="page-header">
                                    <div>
                                        <h2 className="main-content-title tx-24 mg-b-5">
                                            به داشبورد خوش آمدید
                                        </h2>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">خانه</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                داشبورد پروژه
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="d-flex">
                                        <div className="justify-content-center">
                                            <button
                                                type="button"
                                                className="btn btn-white btn-icon-text my-2 me-2"
                                            >
                                                وارد كردن
                                                <i className="fe fe-download me-2" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-white btn-icon-text my-2 me-2"
                                            >
                                                فیلتر
                                                <i className="fe fe-filter me-2" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary my-2 btn-icon-text"
                                            >
                                                گزارش را بارگیری کنید
                                                <i className="fe fe-download-cloud me-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Page Header */}
                                {/*Row*/}
                                <div className="row row-sm">
                                    <div className="col-sm-12 col-lg-12 col-xl-8">
                                        {/*Row*/}
                                        <div className="row row-sm  mt-lg-4">
                                            <div className="col-sm-12 col-lg-12 col-xl-12">
                                                <div className="card bg-primary custom-card card-box">
                                                    <div className="card-body p-4">
                                                        <div className="row align-items-center">
                                                            <div className="col-xl-8 col-sm-6 col-12 img-bg ">
                                                                <h4 className="d-flex  mb-3">
                                                                    <span className="font-weight-bold text-white ">
                                                                        سونیا تیلور!
                                                                    </span>
                                                                </h4>
                                                                <p className="tx-white-7 mb-1">
                                                                    شما دو پروژه برای اتمام دارید ،{" "}
                                                                    <b className="text-warning">57٪</b> از سطح ماهیانه خود
                                                                    را تکمیل کرده اید ، به سطح خود ادامه دهید
                                                                </p>
                                                            </div>
                                                            <img src="img/pngs/work3.png" alt="user-img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Row */}
                                        {/*Row*/}
                                        <div className="row row-sm">
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div className="card-item">
                                                            <div className="card-item-icon card-icon">
                                                                <svg
                                                                    className="text-primary"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    enableBackground="new 0 0 24 24"
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                >
                                                                    <g>
                                                                        <rect
                                                                            height={14}
                                                                            opacity=".3"
                                                                            width={14}
                                                                            x={5}
                                                                            y={5}
                                                                        />
                                                                        <g>
                                                                            <rect fill="none" height={24} width={24} />
                                                                            <g>
                                                                                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                                                <rect height={5} width={2} x={7} y={12} />
                                                                                <rect height={10} width={2} x={15} y={7} />
                                                                                <rect height={3} width={2} x={11} y={14} />
                                                                                <rect height={2} width={2} x={11} y={10} />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div className="card-item-title mb-2">
                                                                <label className="main-content-label tx-13 font-weight-bold mb-1">
                                                                    درآمد کل{" "}
                                                                </label>
                                                                <span className="d-block tx-12 mb-0 text-muted">
                                                                    ماه قبل در مقابل این ماه ها
                                                                </span>
                                                            </div>
                                                            <div className="card-item-body">
                                                                <div className="card-item-stat">
                                                                    <h4 className="font-weight-bold">5900.00 تومان</h4>
                                                                    <small>
                                                                        <b className="text-success">55٪</b> بالاتر
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div className="card-item">
                                                            <div className="card-item-icon card-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                >
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                                                        opacity=".3"
                                                                    />
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                                                </svg>
                                                            </div>
                                                            <div className="card-item-title mb-2">
                                                                <label className="main-content-label tx-13 font-weight-bold mb-1">
                                                                    کارمندان جدید کارمندان{" "}
                                                                </label>
                                                                <span className="d-block tx-12 mb-0 text-muted">
                                                                    در این ماه پیوستند
                                                                </span>
                                                            </div>
                                                            <div className="card-item-body">
                                                                <div className="card-item-stat">
                                                                    <h4 className="font-weight-bold">15</h4>
                                                                    <small>
                                                                        <b className="text-success">5٪</b> افزایش یافته
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div className="card-item">
                                                            <div className="card-item-icon card-icon">
                                                                <svg
                                                                    className="text-primary"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                >
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                                                        opacity=".3"
                                                                    />
                                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                                                </svg>
                                                            </div>
                                                            <div className="card-item-title  mb-2">
                                                                <label className="main-content-label tx-13 font-weight-bold mb-1">
                                                                    کل هزینه های{" "}
                                                                </label>
                                                                <span className="d-block tx-12 mb-0 text-muted">
                                                                    ماه قبل در مقابل این ماه ها
                                                                </span>
                                                            </div>
                                                            <div className="card-item-body">
                                                                <div className="card-item-stat">
                                                                    <h4 className="font-weight-bold">8500 تومان</h4>
                                                                    <small>
                                                                        <b className="text-danger">12٪</b> کاهش
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End row*/}
                                        {/*row*/}
                                        <div className="row row-sm">
                                            <div className="col-sm-12 col-lg-12 col-xl-12">
                                                <div className="card custom-card overflow-hidden">
                                                    <div className="card-header border-bottom-0">
                                                        <div>
                                                            <label className="main-content-label mb-2">
                                                                بودجه پروژه بودجه{" "}
                                                            </label>{" "}
                                                            <span className="d-block tx-12 mb-0 text-muted">
                                                                پروژه ابزاری است که توسط مدیران پروژه برای تخمین هزینه کل
                                                                یک پروژه استفاده می شود
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body pl-0">
                                                        <div className="">
                                                            <div className="container">
                                                                <canvas
                                                                    id="project"
                                                                    className="chart-dropshadow2 ht-250"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col end */}
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                <div className="card custom-card overflow-hidden">
                                                    <div className="card-header  border-bottom-0 pb-0">
                                                        <div>
                                                            <div className="d-flex">
                                                                <label className="main-content-label my-auto pt-2">
                                                                    امروز وظایف
                                                                </label>
                                                                <div className="ms-auto mt-3 d-flex">
                                                                    <div className="me-3 d-flex text-muted tx-13">
                                                                        <span className="legend bg-primary rounded-circle" />
                                                                        پروژه
                                                                    </div>
                                                                    <div className="d-flex text-muted tx-13">
                                                                        <span className="legend bg-light rounded-circle" />
                                                                        در حال پیش رفت
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="d-block tx-12 mt-2 mb-0 text-muted">
                                                                {" "}
                                                                UX UI و توسعه Backend.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-6 my-auto">
                                                                <h6 className="mb-3 font-weight-normal">بودجه پروژه</h6>
                                                                <div className="text-right">
                                                                    <h3 className="font-weight-bold me-3 mb-2 text-primary">
                                                                        5240 تومان
                                                                    </h3>
                                                                    <p className="tx-13 my-auto text-muted">
                                                                        28 مه - 01 بهمن (2018)
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 my-auto">
                                                                <div className="forth circle">
                                                                    <div className="chart-circle-value circle-style">
                                                                        <div className="tx-16 font-weight-bold">75٪</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col end */}
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                <div className="card custom-card">
                                                    <div className="card-header  border-bottom-0 pb-0">
                                                        <div>
                                                            <div className="d-flex">
                                                                <label className="main-content-label my-auto pt-2">
                                                                    سوالات برتر
                                                                </label>
                                                            </div>
                                                            <span className="d-block tx-12 mt-2 mb-0 text-muted">
                                                                {" "}
                                                                کار پروژه شامل گروهی از دانشجویان است که در حال تحقیق
                                                                هستند.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row mt-1">
                                                            <div className="col-5">
                                                                <span className="">هویت نام تجاری</span>
                                                            </div>
                                                            <div className="col-4 my-auto">
                                                                <div className="progress ht-6 my-auto">
                                                                    <div
                                                                        className="progress-bar ht-6 wd-80p"
                                                                        role="progressbar"
                                                                        aria-valuenow={15}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="d-flex">
                                                                    <span className="tx-13">
                                                                        <i className="text-success fe fe-arrow-up" />
                                                                        <b>24.75٪</b>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4">
                                                            <div className="col-5">
                                                                <span className="">طراحی UI و UX</span>
                                                            </div>
                                                            <div className="col-4 my-auto">
                                                                <div className="progress ht-6 my-auto">
                                                                    <div
                                                                        className="progress-bar ht-6 wd-70p"
                                                                        role="progressbar"
                                                                        aria-valuenow={15}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="d-flex">
                                                                    <span className="tx-13">
                                                                        <i className="text-danger fe fe-arrow-down" />
                                                                        <b>12.34٪</b>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4">
                                                            <div className="col-5">
                                                                <span className="">طراحی محصول</span>
                                                            </div>
                                                            <div className="col-4 my-auto">
                                                                <div className="progress ht-6 my-auto">
                                                                    <div
                                                                        className="progress-bar ht-6 wd-40p"
                                                                        role="progressbar"
                                                                        aria-valuenow={15}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="d-flex">
                                                                    <span className="tx-13">
                                                                        <i className="text-success  fe fe-arrow-up" />
                                                                        <b>12.75٪</b>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col end */}
                                            <div className="col-lg-12">
                                                <div className="card custom-card mg-b-20">
                                                    <div className="card-body">
                                                        <div className="card-header border-bottom-0 pt-0 pl-0 pr-0 d-flex">
                                                            <div>
                                                                <label className="main-content-label mb-2">وظایف </label>{" "}
                                                                <span className="d-block tx-12 mb-3 text-muted">
                                                                    یک کار در یک مهلت تعیین شده انجام می شود و باید به اهداف
                                                                    مربوط به کار کمک کند.
                                                                </span>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a
                                                                    href="#"
                                                                    className="option-dots"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fe fe-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#" />
                                                                    <a className="dropdown-item" href="#">
                                                                        وضعیت{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        تیم{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        وظیفه
                                                                    </a>
                                                                    <a className="dropdown-item" href="#" />
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="fa fa-cog me-2" /> تنظیمات
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive tasks">
                                                            <table className="table card-table table-vcenter text-nowrap mb-0  border">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="wd-lg-10p">وظیفه</th>
                                                                        <th className="wd-lg-20p">تیم</th>
                                                                        <th className="wd-lg-20p text-center">وظیفه باز</th>
                                                                        <th className="wd-lg-20p">برتری</th>
                                                                        <th className="wd-lg-20p">وضعیت</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="font-weight-semibold d-flex">
                                                                            <label className="ckbox my-auto me-4 mt-1">
                                                                                <input defaultChecked="" type="checkbox" />
                                                                                <span />
                                                                            </label>
                                                                            <span className="mt-1">ارزیابی طرح</span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            <div className="demo-avatar-group my-auto float-right">
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/1.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/2.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/3.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/4.jpg"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            37
                                                                            <i className="" />
                                                                        </td>
                                                                        <td className="text-primary">بالا</td>
                                                                        <td>
                                                                            <span className="badge badge-pill badge-primary-light">
                                                                                تکمیل شده
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="font-weight-semibold d-flex">
                                                                            <label className="ckbox my-auto me-4">
                                                                                <input defaultChecked="" type="checkbox" />
                                                                                <span />
                                                                            </label>
                                                                            <span className="mt-1">
                                                                                {" "}
                                                                                ایده هایی برای طراحی ایجاد کنید
                                                                            </span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            <div className="demo-avatar-group my-auto float-right">
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/5.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/6.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/7.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/8.jpg"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            37
                                                                            <i className="" />
                                                                        </td>
                                                                        <td className="text-secondary">طبیعی</td>
                                                                        <td>
                                                                            <span className="badge badge-pill badge-warning-light">
                                                                                در انتظار
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="font-weight-semibold d-flex">
                                                                            <label className="ckbox my-auto me-4">
                                                                                <input type="checkbox" />
                                                                                <span />
                                                                            </label>
                                                                            <span className="mt-1">مشکل را تعریف کنید</span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            <div className="demo-avatar-group my-auto float-right">
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/11.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/12.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/9.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/10.jpg"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            37
                                                                            <i className="" />
                                                                        </td>
                                                                        <td className="text-warning">کم</td>
                                                                        <td>
                                                                            <span className="badge badge-pill badge-primary-light">
                                                                                تکمیل شده
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="font-weight-semibold d-flex">
                                                                            <label className="ckbox my-auto me-4">
                                                                                <input type="checkbox" />
                                                                                <span />
                                                                            </label>
                                                                            <span className="mt-1">با کاربران همدردی کنید</span>
                                                                        </td>
                                                                        <td className="text-nowrap">
                                                                            <div className="demo-avatar-group my-auto float-right">
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/7.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/9.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/11.jpg"
                                                                                    />
                                                                                </div>
                                                                                <div className="main-img-user avatar-sm">
                                                                                    <img
                                                                                        alt="آواتار"
                                                                                        className="rounded-circle"
                                                                                        src="img/users/12.jpg"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            37
                                                                            <i className="" />
                                                                        </td>
                                                                        <td className="text-primary">بالا</td>
                                                                        <td>
                                                                            <span className="badge badge-pill badge-danger-light">
                                                                                رد شد
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* col end */}
                                        </div>
                                        {/* Row end */}
                                    </div>
                                    {/* col end */}
                                    <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-4">
                                        <div className="card custom-card card-dashboard-calendar pb-0">
                                            <label className="main-content-label mb-2 pt-1">
                                                ترجمه های اخیر{" "}
                                            </label>
                                            <span className="d-block tx-12 mb-2 text-muted">
                                                پروژه هایی که کار توسعه در حال اتمام است
                                            </span>
                                            <table className="table table-hover m-b-0 transcations mt-2">
                                                <tbody>
                                                    <tr>
                                                        <td className="wd-5p">
                                                            <div className="main-img-user avatar-md">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle me-3"
                                                                    src="img/users/5.jpg"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-middle ms-3">
                                                                <div className="d-inline-block">
                                                                    <h6 className="mb-1">سوسو زدن</h6>
                                                                    <p className="mb-0 tx-13 text-muted">بهبود برنامه</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="d-inline-block">
                                                                <h6 className="mb-2 tx-15 font-weight-semibold">
                                                                    45234 تومان
                                                                    <i className="fas fa-level-up-alt ms-2 text-success m-r-10" />
                                                                </h6>
                                                                <p className="mb-0 tx-11 text-muted">12 اسفند1399 </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="wd-5p">
                                                            <div className="main-img-user avatar-md">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle me-3"
                                                                    src="img/users/6.jpg"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-middle ms-3">
                                                                <div className="d-inline-block">
                                                                    <h6 className="mb-1">مسمومیت</h6>
                                                                    <p className="mb-0 tx-13 text-muted">نقطه عطف</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="d-inline-block">
                                                                <h6 className="mb-2 tx-15 font-weight-semibold">
                                                                    23452 تومان
                                                                    <i className="fas fa-level-down-alt ms-2 text-danger m-r-10" />
                                                                </h6>
                                                                <p className="mb-0 tx-11 text-muted">23 اسفند 1399</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="wd-5p">
                                                            <div className="main-img-user avatar-md">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle me-3"
                                                                    src="img/users/7.jpg"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-middle ms-3">
                                                                <div className="d-inline-block">
                                                                    <h6 className="mb-1">دیجی وات</h6>
                                                                    <p className="mb-0 tx-13 text-muted">مجری فروش</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="d-inline-block">
                                                                <h6 className="mb-2 tx-15 font-weight-semibold">
                                                                    78001 تومان
                                                                    <i className="fas fa-level-down-alt ms-2 text-danger m-r-10" />
                                                                </h6>
                                                                <p className="mb-0 tx-11 text-muted">4 بهمن1399 </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="wd-5p">
                                                            <div className="main-img-user avatar-md">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle me-3"
                                                                    src="img/users/8.jpg"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-middle ms-3">
                                                                <div className="d-inline-block">
                                                                    <h6 className="mb-1">سوسو زدن</h6>
                                                                    <p className="mb-0 tx-13 text-muted">نقطه عطف 2</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="d-inline-block">
                                                                <h6 className="mb-2 tx-15 font-weight-semibold">
                                                                    37285 تومان
                                                                    <i className="fas fa-level-up-alt ms-2 text-success m-r-10" />
                                                                </h6>
                                                                <p className="mb-0 tx-11 text-muted">4 بهمن 1399</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="wd-5p pb-0">
                                                            <div className="main-img-user avatar-md">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle me-3"
                                                                    src="img/users/4.jpg"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="pb-0">
                                                            <div className="d-flex align-middle ms-3">
                                                                <div className="d-inline-block">
                                                                    <h6 className="mb-1">سوسو زدن</h6>
                                                                    <p className="mb-0 tx-13 text-muted">بهبود برنامه</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end pb-0">
                                                            <div className="d-inline-block">
                                                                <h6 className="mb-2 tx-15 font-weight-semibold">
                                                                    25341 تومان
                                                                    <i className="fas fa-level-down-alt ms-2 text-danger m-r-10" />
                                                                </h6>
                                                                <p className="mb-0 tx-11 text-muted">4 بهمن 1399 </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div className="row row-sm">
                                                    <div className="col-6">
                                                        <div className="card-item-title">
                                                            <label className="main-content-label tx-13 font-weight-bold mb-2">
                                                                پروژه راه اندازی{" "}
                                                            </label>
                                                            <span className="d-block tx-12 mb-0 text-muted">
                                                                پروژه در حال راه اندازی است
                                                            </span>
                                                        </div>
                                                        <p className="mb-0 tx-24 mt-2">
                                                            <b className="text-primary">145 روز</b>
                                                        </p>
                                                        <a href="#" className="text-muted">
                                                            12 دوشنبه ، بهمن 1399{" "}
                                                        </a>
                                                    </div>
                                                    <div className="col-6">
                                                        <img
                                                            src="img/pngs/work.png"
                                                            alt="تصویر"
                                                            className="best-emp"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card custom-card">
                                            <div className="card-header border-bottom-0 pb-0 d-flex pl-3 me-1">
                                                <div>
                                                    <label className="main-content-label mb-2 pt-2">
                                                        در پروژه های بزرگ{" "}
                                                    </label>
                                                    <span className="d-block tx-12 mb-2 text-muted">
                                                        هایی که کار توسعه در آن به پایان می رسد
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-body pt-2 mt-0">
                                                <div className="list-card">
                                                    <div className="d-flex">
                                                        <div className="demo-avatar-group my-auto float-right">
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/1.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/2.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/3.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/4.jpg"
                                                                />
                                                            </div>
                                                            <div className="">تیم طراحی</div>
                                                        </div>
                                                        <div className="ms-auto float-right">
                                                            <div className="">
                                                                <a
                                                                    href="#"
                                                                    className="option-dots"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fe fe-more-horizontal" />
                                                                </a>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-left"
                                                                    style={{}}
                                                                >
                                                                    <a className="dropdown-item" href="#">
                                                                        امروز{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        هفته{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        گذشته ماه{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        گذشته سال گذشته
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-item mt-4">
                                                        <div className="card-item-icon bg-transparent card-icon">
                                                            <span
                                                                className="peity-donut"
                                                                data-peity='{ "fill": ["#6259ca", "rgba(204, 204, 204,0.3)"], "innerRadius": 15, "radius": 20}'
                                                            >
                                                                7/6
                                                            </span>
                                                        </div>
                                                        <div className="card-item-body">
                                                            <div className="card-item-stat">
                                                                <small className="tx-10 text-primary font-weight-semibold">
                                                                    25اسفند 1399
                                                                </small>
                                                                <h6 className=" mt-2">طراحی برنامه موبایل</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-card mb-0">
                                                    <div className="d-flex">
                                                        <div className="demo-avatar-group my-auto float-right">
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/5.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/6.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/7.jpg"
                                                                />
                                                            </div>
                                                            <div className="main-img-user avatar-xs">
                                                                <img
                                                                    alt="آواتار"
                                                                    className="rounded-circle"
                                                                    src="img/users/8.jpg"
                                                                />
                                                            </div>
                                                            <div className="">تیم طراحی</div>
                                                        </div>
                                                        <div className="ms-auto float-right">
                                                            <div className="">
                                                                <a
                                                                    href="#"
                                                                    className="option-dots"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fe fe-more-horizontal" />
                                                                </a>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-left"
                                                                    style={{}}
                                                                >
                                                                    <a className="dropdown-item" href="#">
                                                                        امروز{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        هفته{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        گذشته ماه{" "}
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        گذشته سال گذشته
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-item mt-4">
                                                        <div className="card-item-icon bg-transparent card-icon">
                                                            <span
                                                                className="peity-donut"
                                                                data-peity='{ "fill": ["#6259ca", "rgba(204, 204, 204,0.3)"], "innerRadius": 15, "radius": 20}'
                                                            >
                                                                5/7
                                                            </span>
                                                        </div>
                                                        <div className="card-item-body">
                                                            <div className="card-item-stat">
                                                                <small className="tx-10 text-primary font-weight-semibold">
                                                                    12 بهمن 1399
                                                                </small>
                                                                <h6 className=" mt-2">طراحی مجدد وب سایت</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <label className="main-content-label my-auto">
                                                        طراحی وب سایت
                                                    </label>
                                                    <div className="ms-auto  d-flex">
                                                        <div className="me-3 d-flex text-muted tx-13">
                                                            در حال دویدن
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <div>
                                                        <span className="tx-15 text-muted">
                                                            کار به پایان رسید: 7/10
                                                        </span>
                                                    </div>
                                                    <div className="container mt-2 mb-2">
                                                        <canvas id="bar-chart" className="ht-180" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mt-4">
                                                            <div className="d-flex mb-2">
                                                                <h5 className="tx-15 my-auto text-muted font-weight-normal">
                                                                    مشتری :
                                                                </h5>
                                                                <h5 className="tx-15 my-auto me-3">جان دیو</h5>
                                                            </div>
                                                            <div className="d-flex mb-0">
                                                                <h5 className="tx-13 my-auto text-muted font-weight-normal">
                                                                    ضرب الاجل :
                                                                </h5>
                                                                <h5 className="tx-13 my-auto text-muted me-2">
                                                                    25 اسفند 1399
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col col-auto">
                                                        <div className="mt-3">
                                                            <div className="">
                                                                <img
                                                                    alt=""
                                                                    className="ht-50"
                                                                    src="img/media/project-logo.png"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* col end */}
                                </div>
                                {/* Row end */}
                            </div>
                        </div>
                    </div>
                    <div className="sidebar sidebar-right sidebar-animate">
                        <div className="sidebar-icon">
                            <a
                                href="#"
                                className="text-end float-end text-dark fs-20"
                                data-bs-toggle="sidebar-right"
                                data-bs-target=".sidebar-right"
                            >
                                <i className="fe fe-x" />
                            </a>
                        </div>
                        <div className="sidebar-body">
                            <h5>کارهای روزانه</h5>
                            <div className="d-flex p-3">
                                <label className="ckbox">
                                    <input defaultChecked="" type="checkbox" />
                                    <span>قضاوت کردن با دوستان</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="ویرایش"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="حذف"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>برای ارائه آماده شوید</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="ویرایش"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="حذف"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>برای ارائه آماده شوید</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="ویرایش"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="حذف"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input defaultChecked="" type="checkbox" />
                                    <span>سیستم به‌روز شده</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="ویرایش"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="حذف"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>کاری بیشتر انجام دهید</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Edit"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Delete"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>سیستم به روز شد</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Edit"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Delete"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>یک ایده پیدا کنید</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Edit"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Delete"
                                    />
                                </span>
                            </div>
                            <div className="d-flex p-3 border-top mb-0">
                                <label className="ckbox">
                                    <input type="checkbox" />
                                    <span>بررسی پروژه</span>
                                </label>
                                <span className="ms-auto">
                                    <i
                                        className="fe fe-edit-2 text-primary me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Edit"
                                    />
                                    <i
                                        className="fe fe-trash-2 text-danger me-2"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-placement="top"
                                        data-bs-original-title="Delete"
                                    />
                                </span>
                            </div>
                            <h5>بررسی اجمالی</h5>
                            <div className="p-4">
                                <div className="main-traffic-detail-item">
                                    <div>
                                        <span>موسس &amp; مدیر عامل</span> <span>24</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={20}
                                            className="progress-bar progress-bar-xs wd-20p"
                                            role="progressbar"
                                        />
                                    </div>
                                    {/* progress */}
                                </div>
                                <div className="main-traffic-detail-item">
                                    <div>
                                        <span>طراح UX</span> <span>1</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={15}
                                            className="progress-bar progress-bar-xs bg-secondary wd-15p"
                                            role="progressbar"
                                        />
                                    </div>
                                    {/* progress */}
                                </div>
                                <div className="main-traffic-detail-item">
                                    <div>
                                        <span>استخدام</span> <span>87</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={45}
                                            className="progress-bar progress-bar-xs bg-success wd-45p"
                                            role="progressbar"
                                        />
                                    </div>
                                    {/* progress */}
                                </div>
                                <div className="main-traffic-detail-item">
                                    <div>
                                        <span>مهندس نرم افزار</span> <span>32</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={25}
                                            className="progress-bar progress-bar-xs bg-info wd-25p"
                                            role="progressbar"
                                        />
                                    </div>
                                    {/* progress */}
                                </div>
                                <div className="main-traffic-detail-item">
                                    <div>
                                        <span>مدیر پروژه</span> <span>32</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={25}
                                            className="progress-bar progress-bar-xs bg-danger wd-25p"
                                            role="progressbar"
                                        />
                                    </div>
                                    {/* progress */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-footer text-center">
                        <div className="container">
                            <div className="row row-sm">
                                <div className="col-md-12">
                                    <span>
                                        کپی رایت © 1403 . طراحی شده توسط <a href="#">Themefix</a> کلیه حقوق
                                        محفوظ است.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#top" id="back-to-top"><i className="fe fe-arrow-up"></i></a>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
                    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>


                    <script src="path/to/bootstrap.bundle.min.js"></script>


                    <script src="path/to/custom.js"></script>
                    <Script src="/plugins/perfect-scrollbar.min.js" strategy="lazyOnload" />
                    <Script src="/plugins/sidemenu/sidemenu.js" strategy="lazyOnload" />
                    <Script src="/plugins/sidebar/sidebar.js" strategy="lazyOnload" />
                    <Script src="/plugins/chart.js/Chart.bundle.min.js" strategy="lazyOnload" />
                    <Script src="/plugins/peity/jquery.peity.min.js" strategy="lazyOnload" />
                    <Script src="/plugins/raphael/raphael.min.js" strategy="lazyOnload" />
                    <Script src="/plugins/morris.js/morris.min.js" strategy="lazyOnload" />
                    <Script src="/plugins/circle-progress/circle-progress.min.js" strategy="lazyOnload" />
                    <Script src="/js/chart-circle.js" strategy="lazyOnload" />
                    <Script src="/js/index.js" strategy="lazyOnload" />
                    <Script src="/js/sticky.js" strategy="lazyOnload" />
                    <Script src="/js/themeColors.js" strategy="lazyOnload" />
                    <Script src="/js/custom.js" strategy="lazyOnload" />
                    <Script src="/switcher/js/switcher.js" strategy="lazyOnload" />


                </div>
            </div>
        </>
    );
}
