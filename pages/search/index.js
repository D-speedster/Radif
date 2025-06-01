import { useRouter } from "next/router"
import Header_Main from "../../components/main/header"
import FooterMain from "../../components/main/FooterMain"
import SliderProduct from "../../components/main/SliderProduct"
import { Accordion } from 'react-bootstrap';

export default function SearchPage() {
    const products = [
        {
            id: 1,
            image: "img/a55.jpg",
            title: "گوشی موبایل سامسونگ مدل Galaxy A55",
            price: "۱۲,۵۰۰,۰۰۰",
            views: "+500",
            stores: "15",
            genre: "digital"
        },
        {
            id: 2,
            image: "/img/vivobook.png",
            title: "لپ تاپ ایسوس مدل VivoBook 15",
            price: "۲۲,۰۰۰,۰۰۰",
            views: "+300",
            stores: "10",
            genre: "digital"
        },
        {
            id: 3,
            image: "/img/55LJ61_A_Desktop_01.jpg",
            title: "تلویزیون ال جی مدل 55 اینچ",
            price: "۳۵,۰۰۰,۰۰۰",
            views: "+700",
            stores: "8",
            genre: "electronics"
        },
        {
            id: 4,
            image: "/img/emersunkala40new12.jpg",
            title: "یخچال فریزر دوقلو امرسان",
            price: "۲۸,۰۰۰,۰۰۰",
            views: "+400",
            stores: "12",
            genre: "home"
        },
        {
            id: 5,
            image: "/img/Octa-SWM-84526_p1z3-1p.jpg",
            title: "ماشین لباسشویی اسنوا 8 کیلویی",
            price: "۱۵,۰۰۰,۰۰۰",
            views: "+250",
            stores: "7",
            genre: "home"
        },
        {
            id: 6,
            image: "/img/sonyhads.jpg",
            title: "هدفون بی‌سیم سونی مدل WH-1000XM5",
            price: "۸,۰۰۰,۰۰۰",
            views: "+600",
            stores: "18",
            genre: "digital"
        },
        {
            id: 7,
            image: "/img/watch9.jpg",
            title: "ساعت هوشمند اپل واچ سری 9",
            price: "۲۰,۰۰۰,۰۰۰",
            views: "+900",
            stores: "25",
            genre: "digital"
        },
        {
            id: 8,
            image: "",
            title: "دوربین عکاسی کانن مدل EOS 250D",
            price: "۲۵,۰۰۰,۰۰۰",
            views: "+350",
            stores: "9",
            genre: "electronics"
        },
        {
            id: 9,
            image: "/img/jbl.jpg",
            title: "اسپیکر بلوتوثی قابل حمل JBL",
            price: "۳,۰۰۰,۰۰۰",
            views: "+800",
            stores: "30",
            genre: "digital"
        },
        {
            id: 10,
            image: "/img/552884.jpg",
            title: "مایکروویو سامسونگ",
            price: "۷,۰۰۰,۰۰۰",
            views: "+200",
            stores: "6",
            genre: "home"
        },
        {
            id: 11,
            image: "/img/sony-playstation-5-slim-digital.png",
            title: "پلی استیشن 5 اسلیم",
            price: "۱۸,۵۰۰,۰۰۰",
            views: "+1200",
            stores: "22",
            genre: "digital"
        },
        {
            id: 12,
            image: "/img/17600_1.png",
            title: "کنسول بازی Xbox Series X",
            price: "۱۹,۰۰۰,۰۰۰",
            views: "+950",
            stores: "19",
            genre: "digital"
        },
        {
            id: 13,
            image: "/img/monitor27.jpg",
            title: "مانیتور گیمینگ ایسوس 27 اینچ",
            price: "۱۰,۰۰۰,۰۰۰",
            views: "+400",
            stores: "14",
            genre: "digital"
        },
        {
            id: 14,
            image: "/img/ROG-Strix-GeForce-RTX-4070-SUPER-12GB-GDDR6X-OC-Edition-1.jpg",
            title: "کارت گرافیک NVIDIA GeForce RTX 4070",
            price: "۴۰,۰۰۰,۰۰۰",
            views: "+600",
            stores: "10",
            genre: "digital"
        },
        {
            id: 15,
            image: "/img/Logitech-G-Pro-X-Superlight-2-Pro-X-TKL-1.jpg",
            title: "موس و کیبورد بی‌سیم لاجیتک",
            price: "۲,۵۰۰,۰۰۰",
            views: "+300",
            stores: "28",
            genre: "digital"
        },
        {
            id: 16,
            image: "/img/ssd-my-passport-500gb-1.jpg",
            title: "هارد اکسترنال وسترن دیجیتال 2 ترابایت",
            price: "۳,۵۰۰,۰۰۰",
            views: "+550",
            stores: "17",
            genre: "digital"
        },
        {
            id: 17,
            image: "/img/htd-fs0103wr-compress.jpg",
            title: "مودم روتر وای فای تندا",
            price: "۱,۰۰۰,۰۰۰",
            views: "+700",
            stores: "35",
            genre: "digital"
        },
        {
            id: 18,
            image: "",
            title: "پرینتر جوهرافشان اپسون",
            price: "۴,۰۰۰,۰۰۰",
            views: "+200",
            stores: "9",
            genre: "electronics"
        },
        {
            id: 19,
            image: "/img/کولرگازی-جنرال-گلد-تیتانیوم-مدل-GG-MS12000-.jpg",
            title: "کولر گازی 12000 اجنرال",
            price: "۲۵,۰۰۰,۰۰۰",
            views: "+300",
            stores: "11",
            genre: "home"
        },
        {
            id: 20,
            image: "/img/bosch-vacuum-cleaner-bgl8goldir.png",
            title: "جاروبرقی بوش",
            price: "۹,۰۰۰,۰۰۰",
            views: "+450",
            stores: "16",
            genre: "home"
        },
        {
            id: 21,
            image: "/img/DeLonghi-ES685-espresso-machine.jpg",
            title: "قهوه ساز دلونگی",
            price: "۸,۰۰۰,۰۰۰",
            views: "+150",
            stores: "5",
            genre: "home"
        },
        {
            id: 22,
            image: "",
            title: "اتو بخار تفال",
            price: "۲,۰۰۰,۰۰۰",
            views: "+350",
            stores: "20",
            genre: "home"
        },
        {
            id: 23,
            image: "/img/209-edit-scaled.jpg",
            title: "دوچرخه کوهستان سایز 26",
            price: "۶,۰۰۰,۰۰۰",
            views: "+180",
            stores: "10",
            genre: "sports"
        },
        {
            id: 24,
            image: "/img/blade1619v81.jpg",
            title: "راکت تنیس ویلسون",
            price: "۱,۵۰۰,۰۰۰",
            views: "+80",
            stores: "6",
            genre: "sports"
        },
        {
            id: 25,
            image: "/img/ab67bf.jpg",
            title: "کفش ورزشی نایک مدل Air Zoom",
            price: "۴,۰۰۰,۰۰۰",
            views: "+500",
            stores: "25",
            genre: "sports"
        },
        {
            id: 26,
            image: "/img/982159453_green_0_l.jpg",
            title: "لباس ورزشی آدیداس",
            price: "۱,۰۰۰,۰۰۰",
            views: "+300",
            stores: "30",
            genre: "sports"
        },
        {
            id: 27,
            image: "/img/1620044889.jpg",
            title: "شلوار جین مردانه",
            price: "۸۰۰,۰۰۰",
            views: "+400",
            stores: "40",
            genre: "sports"
        },
        {
            id: 28,
            image: "/img/tesksakd.jpg",
            title: "مانتو زنانه تابستانی",
            price: "۷۰۰,۰۰۰",
            views: "+350",
            stores: "38",
            genre: "sports"
        },
        {
            id: 29,
            image: "",
            title: "عینک آفتابی ری بن",
            price: "۳,۰۰۰,۰۰۰",
            views: "+600",
            stores: "20",
            genre: "sports"
        },
        {
            id: 30,
            image: "",
            title: "کیف چرمی زنانه",
            price: "۲,۵۰۰,۰۰۰",
            views: "+450",
            stores: "15",
            genre: "sports"
        },
        {
            id: 31,
            image: "",
            title: "کمربند چرمی مردانه",
            price: "۵۰۰,۰۰۰",
            views: "+250",
            stores: "22",
            genre: "accessories"
        },
        {
            id: 32,
            image: "",
            title: "کتاب رمان خارجی",
            price: "۳۰۰,۰۰۰",
            views: "+1000",
            stores: "50",
            genre: "books"
        },
        {
            id: 33,
            image: "",
            title: "کتاب آشپزی ایرانی",
            price: "۲۰۰,۰۰۰",
            views: "+700",
            stores: "45",
            genre: "books"
        },
        {
            id: 34,
            image: "",
            title: "مداد رنگی فابر کاستل",
            price: "۸۰۰,۰۰۰",
            views: "+300",
            stores: "18",
            genre: "stationery"
        },
        {
            id: 35,
            image: "",
            title: "دفترچه یادداشت فانتزی",
            price: "۵۰,۰۰۰",
            views: "+600",
            stores: "60",
            genre: "stationery"
        },
        {
            id: 36,
            image: "",
            title: "خودکار روان‌نویس یونی بال",
            price: "۳۰,۰۰۰",
            views: "+900",
            stores: "70",
            genre: "stationery"
        },
        {
            id: 37,
            image: "",
            title: "ماشین اصلاح سر و صورت فیلیپس",
            price: "۴,۰۰۰,۰۰۰",
            views: "+400",
            stores: "15",
            genre: "health"
        },
        {
            id: 38,
            image: "",
            title: "مسواک برقی اورال بی",
            price: "۱,۵۰۰,۰۰۰",
            views: "+300",
            stores: "10",
            genre: "health"
        },
        {
            id: 39,
            image: "",
            title: "ترازوی دیجیتال شیائومی",
            price: "۷۰۰,۰۰۰",
            views: "+500",
            stores: "25",
            genre: "health"
        },
        {
            id: 40,
            image: "",
            title: "فرش ماشینی 6 متری",
            price: "۱۲,۰۰۰,۰۰۰",
            views: "+200",
            stores: "8",
            genre: "home"
        },
        {
            id: 41,
            image: "",
            title: "مبل راحتی 7 نفره",
            price: "۳۰,۰۰۰,۰۰۰",
            views: "+150",
            stores: "6",
            genre: "home"
        },
        {
            id: 42,
            image: "",
            title: "لوستر مدرن پذیرایی",
            price: "۵,۰۰۰,۰۰۰",
            views: "+100",
            stores: "7",
            genre: "home"
        },
        {
            id: 43,
            image: "",
            title: "پرده زبرا پذیرایی",
            price: "۲,۰۰۰,۰۰۰",
            views: "+120",
            stores: "9",
            genre: "home"
        },
        {
            id: 44,
            image: "",
            title: "سرویس قابلمه گرانیتی",
            price: "۳,۰۰۰,۰۰۰",
            views: "+250",
            stores: "18",
            genre: "home"
        },
        {
            id: 45,
            image: "",
            title: "سرویس کارد و چنگال",
            price: "۱,۰۰۰,۰۰۰",
            views: "+180",
            stores: "20",
            genre: "home"
        },
        {
            id: 46,
            image: "",
            title: "پتو گلبافت دو نفره",
            price: "۸۰۰,۰۰۰",
            views: "+300",
            stores: "30",
            genre: "home"
        },
        {
            id: 47,
            image: "",
            title: "حوله حمام نخی",
            price: "۱۵۰,۰۰۰",
            views: "+400",
            stores: "45",
            genre: "home"
        },
        {
            id: 48,
            image: "",
            title: "ملحفه و روبالشی ترک",
            price: "۵۰۰,۰۰۰",
            views: "+250",
            stores: "35",
            genre: "home"
        },
        {
            id: 49,
            image: "",
            title: "ماگ سرامیکی فانتزی",
            price: "۸۰,۰۰۰",
            views: "+700",
            stores: "55",
            genre: "kitchenware"
        },
        {
            id: 50,
            image: "",
            title: "فنجان و نعلبکی چینی",
            price: "۳۰۰,۰۰۰",
            views: "+350",
            stores: "40",
            genre: "kitchenware"
        }
    ];
    let spre = products.filter((item) => {
        return item.genre == 'digital'
    })
    const router = useRouter()
    const { product } = router.query
    return (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{product}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

            <Header_Main></Header_Main>

            <div className="container-custom">
                نتیجه جستجو : {product ? product : "در حال "}
                <div className="row">
                    <div className="col-2">
                        <div className="side-search">
                            <div className="box-filter">
                                <div className="container">
                                    <Accordion >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>دسته بندی</Accordion.Header>
                                            <Accordion.Body>
                                                محتوا
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <br />
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>دسته بندی</Accordion.Header>
                                            <Accordion.Body>
                                                محتوا
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-10">
                        <div className="search-result row">
                            {spre.map((item) => {
                                return <div className="col mt-4">
                                    <div className="" style={{ height: '350px', width: '16rem', cursor: 'pointer' }}>
                                        <div className="card-header-search">
                                            <img className="card-img-top" src={item.image} height='255px' />
                                        </div>
                                        <h6 className="card-body-search mt-2">{item.title}</h6>
                                        <div className="">

                                            <span> شروع از : {item.price} تومان </span>


                                        </div>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
            <FooterMain></FooterMain>

        </>
    )
}