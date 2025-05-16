import Script from "next/script";
import HeaderPanel from "../../components/panel/header";
import SidePanel from "../../components/panel/SidePanel";
import AdminLayout from "../AdminLayout";
import { useState, useEffect } from 'react';
import Footer from "../../components/panel/Footer";


export default function AdminDashboard() {

  return (
    <>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/perfect-scrollbar.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://benpickles.github.io/peity/jquery.peity.min.js"></script>


      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
      <meta name="description" content="Spruha - PHP Admin Panel Dashboard Template" />
      <meta name="author" content="Spruko Technologies Private Limited" />
      <meta name="keywords" content="php dashboard, php template, admin dashboard bootstrap, bootstrap admin theme, admin, php admin panel, bootstrap admin template, admin dashboard template, admin template bootstrap, php admin dashboard, dashboard template, dashboard template bootstrap, bootstrap admin, admin panel template, dashboard" />
      <title>داشبورد اسپروها</title>
      <link rel="icon" href="https://php.spruko.com/spruha/spruha//img/brand/favicon.ico" />
      <link id="style" href="plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="plugins/web-fonts/icons.css" rel="stylesheet" />
      <link href="plugins/web-fonts/font-awesome/font-awesome.min.css" rel="stylesheet" />
      <link href="plugins/web-fonts/plugin.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/plugins.css" rel="stylesheet" />
      <link href="switcher/css/switcher.css" rel="stylesheet" />
      <link href="switcher/demo.css" rel="stylesheet" />
      <body className="rtl main-body leftmenu">
        <div className="page">
          <HeaderPanel></HeaderPanel>
          <SidePanel></SidePanel>
          <div className="main-content side-content pt-0">
            <div className="container-fluid">
              <div className="inner-body">
                <div className="page-header">
                  <div>
                    <h2 className="main-content-title tx-24 mg-b-5">به داشبورد خوش آمدید</h2>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">خانه</a></li>
                      <li className="breadcrumb-item active" aria-current="page">داشبورد پروژه</li>
                    </ol>
                  </div>
                  <div className="d-flex">
                    <div className="justify-content-center">
                      <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
                        وارد كردن<i className="fe fe-download me-2"></i>
                      </button>
                      <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
                        فیلتر<i className="fe fe-filter me-2"></i>
                      </button>
                      <button type="button" className="btn btn-primary my-2 btn-icon-text">
                        گزارش را بارگیری کنید<i className="fe fe-download-cloud me-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-12 col-lg-12 col-xl-8">
                
                    <div className="row row-sm">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card custom-card">
                          <div className="card-body">
                            <div className="card-item">
                              <div className="card-item-icon card-icon">
                                <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect height="14" opacity=".3" width="14" x="5" y="5"></rect><g><rect fill="none" height="24" width="24"></rect><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"></path><rect height="5" width="2" x="7" y="12"></rect><rect height="10" width="2" x="15" y="7"></rect><rect height="3" width="2" x="11" y="14"></rect><rect height="2" width="2" x="11" y="10"></rect></g></g></g></svg>
                              </div>
                              <div className="card-item-title mb-2">
                                <label className="main-content-label tx-13 font-weight-bold mb-1">درآمد کل </label>
                                <span className="d-block tx-12 mb-0 text-muted">ماه قبل در مقابل این ماه ها</span>
                              </div>
                              <div className="card-item-body">
                                <div className="card-item-stat">
                                  <h4 className="font-weight-bold">5900.00 تومان</h4>
                                  <small><b className="text-success">55٪</b> بالاتر</small>
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
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg>
                              </div>
                              <div className="card-item-title mb-2">
                                <label className="main-content-label tx-13 font-weight-bold mb-1">کارمندان جدید کارمندان </label>
                                <span className="d-block tx-12 mb-0 text-muted">در این ماه پیوستند</span>
                              </div>
                              <div className="card-item-body">
                                <div className="card-item-stat">
                                  <h4 className="font-weight-bold">15</h4>
                                  <small><b className="text-success">5٪</b> افزایش یافته</small>
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
                                <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path></svg>
                              </div>
                              <div className="card-item-title  mb-2">
                                <label className="main-content-label tx-13 font-weight-bold mb-1">کل هزینه های </label>
                                <span className="d-block tx-12 mb-0 text-muted">ماه قبل در مقابل این ماه ها</span>
                              </div>
                              <div className="card-item-body">
                                <div className="card-item-stat">
                                  <h4 className="font-weight-bold">8500 تومان</h4>
                                  <small><b className="text-danger">12٪</b> کاهش</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
               
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar sidebar-right sidebar-animate">
            <div className="sidebar-icon">
              <a href="#" className="text-end float-end text-dark fs-20" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right"><i className="fe fe-x"></i></a>
            </div>
            <div className="sidebar-body">
              <h5>کارهای روزانه</h5>
              <div className="d-flex p-3">
                <label className="ckbox"><input checked type="checkbox" /><span>قضاوت کردن با دوستان</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="ویرایش"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="حذف"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input type="checkbox" /><span>برای ارائه آماده شوید</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="ویرایش"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="حذف"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input type="checkbox" /><span>برای ارائه آماده شوید</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="ویرایش"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="حذف"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input checked type="checkbox" /><span>سیستم به‌روز شده</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="ویرایش"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="حذف"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input type="checkbox" /><span>کاری بیشتر انجام دهید</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input type="checkbox" /><span>سیستم به روز شد</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top">
                <label className="ckbox"><input type="checkbox" /><span>یک ایده پیدا کنید</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                </span>
              </div>
              <div className="d-flex p-3 border-top mb-0">
                <label className="ckbox"><input type="checkbox" /><span>بررسی پروژه</span></label>
                <span className="ms-auto">
                  <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                  <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                </span>
              </div>
              <h5>بررسی اجمالی</h5>
              <div className="p-4">
                <div className="main-traffic-detail-item">
                  <div>
                    <span>موسس &amp; مدیر عامل</span> <span>24</span>
                  </div>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" className="progress-bar progress-bar-xs wd-20p" role="progressbar"></div>
                  </div>
                </div>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>طراح UX</span> <span>1</span>
                  </div>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" className="progress-bar progress-bar-xs bg-secondary wd-15p" role="progressbar"></div>
                  </div>
                </div>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>استخدام</span> <span>87</span>
                  </div>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" className="progress-bar progress-bar-xs bg-success wd-45p" role="progressbar"></div>
                  </div>
                </div>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>مهندس نرم افزار</span> <span>32</span>
                  </div>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar progress-bar-xs bg-info wd-25p" role="progressbar"></div>
                  </div>
                </div>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>مدیر پروژه</span> <span>32</span>
                  </div>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar progress-bar-xs bg-danger wd-25p" role="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </body>
      <a href="#top" id="back-to-top"><i className="fe fe-arrow-up"></i></a>
      <Script src="/plugins/jquery/jquery.min.js" strategy="afterInteractive" />
      <Script src="/plugins/bootstrap/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/plugins/perfect-scrollbar/perfect-scrollbar.min.js" strategy="afterInteractive" />
      <Script src="/plugins/sidemenu/sidemenu.js" id="leftmenu" strategy="afterInteractive" />
      <Script src="/plugins/sidebar/sidebar.js" strategy="afterInteractive" />
      <Script src="/plugins/select2/js/select2.min.js" strategy="afterInteractive" />
      <Script src="/js/select2.js" strategy="afterInteractive" />
      <Script src="/plugins/chart.js/Chart.bundle.min.js" strategy="afterInteractive" />
      <Script src="/plugins/peity/jquery.peity.min.js" strategy="afterInteractive" />
      <Script src="/plugins/raphael/raphael.min.js" strategy="afterInteractive" />
      <Script src="/plugins/morris.js/morris.min.js" strategy="afterInteractive" />
      <Script src="/plugins/circle-progress/circle-progress.min.js" strategy="afterInteractive" />
      <Script src="/js/chart-circle.js" strategy="afterInteractive" />
      <Script src="/js/index.js" strategy="afterInteractive" />
      <Script src="/js/sticky.js" strategy="afterInteractive" />
      <Script src="/js/themeColors.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
      <Script src="/switcher/js/switcher.js" strategy="afterInteractive" />
    </>
  );

}