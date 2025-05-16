import { FiHome } from "react-icons/fi";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdSportsVolleyball } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { SlBasketLoaded } from "react-icons/sl";

export default function Category() {
    return (
        <div className="category mt-3 mb-3">
            <div className="container-custom">
                <div className="d-flex flex-wrap justify-content-center gap-3 category-icons-wrapper">
                    <div className="icons-category">
                        <div>
                            <FiHome fontSize={'24px'} className="mb-2" />

                        </div>
                        <span>لوازم منزل</span>
                    </div>
                    <div className="icons-category">
                        <div>
                            <HiDevicePhoneMobile fontSize={'24px'} className="mb-2" />
                        </div>
                        <span>موبایل</span>
                    </div>
                    <div className="icons-category">
                        <div>
                            <MdOutlineCameraAlt fontSize={'24px'} className="mb-2" />
                        </div>
                        <span>دوربین</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <MdSportsVolleyball fontSize={'24px'} className="mb-2" />
                        </div>

                        <span>ورزشی</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <GrGamepad fontSize={'22px'} className="mb-2" />
                        </div>

                        <span>گیمینگ</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <VscTools fontSize={'24px'} className="mb-2" />
                        </div>

                        <span>ابزار</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <IoCarSportOutline fontSize={'24px'} className="mb-2" />
                        </div>

                        <span>لوازم خودرو</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <BsFillHeartPulseFill fontSize={'24px'} className="mb-2" />
                        </div>
                        <span>بهداشتی</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <FaBookOpen fontSize={'24px'} className="mb-2" />
                        </div>

                        <span>کتاب</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <FaWifi fontSize={'24px'} className="mb-2" />
                        </div>
                        <span>شبکه</span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <SiCoffeescript fontSize={'24px'} className="mb-2" />
                        </div>
                        <span>کافی </span>

                    </div>
                    <div className="icons-category">
                        <div>
                            <SlBasketLoaded fontSize={'24px'} className="mb-2" />
                        </div>

                        <span>سوپرمارکتی</span>

                    </div>

                </div>
            </div>
        </div>
    )
}