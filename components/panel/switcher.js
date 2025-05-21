import React from 'react'

export default function Switcher() {
    return (
        <div className="switcher-wrapper">
            <div className="demo_changer">
                <div className="form_holder sidebar-right1">
                    <div className="row">
                        <div className="predefined_styles">
                            <div className="swichermainleft text-center">
                                <div className="p-3 d-grid gap-2">
                                    <a
                                        href="index.html"
                                        target="_blank"
                                        className="btn btn-primary rounded-10 mt-0"
                                    >
                                        مشاهده نسخه ی نمایشی
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="rounded-10 btn btn-secondary"
                                    >
                                        هم اکنون خریداری کنید
                                    </a>
                                    <a href="#" target="_blank" className="rounded-10 btn btn-info">
                                        نمونه کارها ما
                                    </a>
                                </div>
                            </div>
                            <div className="swichermainleft">
                                <h4>نسخه های LTR و RTL</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">چپ چین</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch7"
                                                    id="myonoffswitch19"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch19"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">راستچین</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch7"
                                                    id="myonoffswitch20"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch20"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft menu-styles">
                                <h4>نوع ناوبری</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">منو عمودی</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch01"
                                                    id="myonoffswitch01"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch01"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">منو افقی با کلیک</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch01"
                                                    id="myonoffswitch02"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch02"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">منو افقی با هوور</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch01"
                                                    id="myonoffswitch03"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch03"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft">
                                <h4>استایل تم روشن</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">تم روشن</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch1"
                                                    id="myonoffswitch1"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch1"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">اولویت روشن</span>
                                            <div className="">
                                                <input
                                                    className="wd-30 ht-30 input-color-picker color-primary-light"
                                                    defaultValue="#6259ca"
                                                    id="colorID"
                                                    oninput="changePrimaryColor()"
                                                    type="color"
                                                    data-id="bg-color"
                                                    data-id1="bg-hover"
                                                    data-id2="bg-border"
                                                    data-id7="transparentcolor"
                                                    name="lightPrimary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft">
                                <h4>سبک تم تاریک</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">تم تاریک</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch1"
                                                    id="myonoffswitch2"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch2"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">اصلی تاریک</span>
                                            <div className="">
                                                <input
                                                    className="wd-30 ht-30 input-dark-color-picker color-primary-dark"
                                                    defaultValue="#6259ca"
                                                    id="darkPrimaryColorID"
                                                    oninput="darkPrimaryColor()"
                                                    type="color"
                                                    data-id="bg-color"
                                                    data-id1="bg-hover"
                                                    data-id2="bg-border"
                                                    data-id3="primary"
                                                    data-id8="transparentcolor"
                                                    name="darkPrimary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft menu-colors">
                                <h4>سبک‌های منو</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle lightMenu d-flex">
                                            <span className="me-auto">منوی روشن</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch2"
                                                    id="myonoffswitch3"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch3"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle colorMenu d-flex mt-2">
                                            <span className="me-auto">منوی رنگی</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch2"
                                                    id="myonoffswitch4"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch4"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle darkMenu d-flex mt-2">
                                            <span className="me-auto">منوی تاریک</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch2"
                                                    id="myonoffswitch5"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch5"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft header-colors">
                                <h4>سبک هدر</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle lightHeader d-flex">
                                            <span className="me-auto">هدر روشن</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch3"
                                                    id="myonoffswitch6"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch6"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle  colorHeader d-flex mt-2">
                                            <span className="me-auto">هدر رنگی</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch3"
                                                    id="myonoffswitch7"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch7"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle darkHeader d-flex mt-2">
                                            <span className="me-auto">هدر تاریک</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch3"
                                                    id="myonoffswitch8"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch8"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft layout-width-style">
                                <h4>سبک عرض طرح</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">عرض کامل</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch4"
                                                    id="myonoffswitch9"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch9"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">بسته</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch4"
                                                    id="myonoffswitch10"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch10"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft layout-positions">
                                <h4>سبک‌های موقعیت طرح</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">ثابت</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch5"
                                                    id="myonoffswitch11"
                                                    className="onoffswitch2-checkbox"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch11"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">پیمایشی</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch5"
                                                    id="myonoffswitch12"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch12"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft vertical-switcher">
                                <h4>سبک‌های طرح منو کناری</h4>
                                <div className="skin-body">
                                    <div className="switch_section">
                                        <div className="switch-toggle d-flex">
                                            <span className="me-auto">منوی پیش‌فرض</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch13"
                                                    className="onoffswitch2-checkbox default-menu"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    htmlFor="myonoffswitch13"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">آیکون با متن</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch14"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch14"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">پوشش آیکون</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch15"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch15"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">منوی جانبی بسته</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch16"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch16"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">زیرمنوی متحرک</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch17"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch17"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                        <div className="switch-toggle d-flex mt-2">
                                            <span className="me-auto">زیرمنوی متحرک سبک 1</span>
                                            <p className="onoffswitch2">
                                                <input
                                                    type="radio"
                                                    name="onoffswitch6"
                                                    id="myonoffswitch18"
                                                    className="onoffswitch2-checkbox"
                                                />
                                                <label
                                                    htmlFor="myonoffswitch18"
                                                    className="onoffswitch2-label"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swichermainleft">
                                <h4>بازنشانی همه سبک‌ها</h4>
                                <div className="skin-body">
                                    <div className="switch_section my-4">
                                        <button
                                            className="btn btn-danger btn-block"
                                            onclick="localStorage.clear(); document.querySelector('html').style = ''; names(); resetData();"
                                            type="button"
                                        >
                                            بازنشانی همه
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
