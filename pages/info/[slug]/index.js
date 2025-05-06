import { useRouter } from "next/router"
import FooterMain from "../../../components/main/FooterMain"
import Header_Main from '../../../components/main/header'
import Link from "next/link"


export default function AboutUs() {
    const router = useRouter()
    const { slug } = router.query;
    let infoList = [
        { id: 1, title: 'Team', headerText: 'تیم ما', des: '' },
        { id: 1, title: 'About', headerText: 'درباره ردیف', des: '' },
        { id: 1, title: 'Contact', headerText: 'تماس با ردیف', des: '' },
        { id: 1, title: 'Rules', headerText: 'قوانین ردیف', des: '' },
    ];
    let TypeSelect = infoList.filter((item => {
        return item.title == slug
    }))
    return (

        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <Header_Main></Header_Main>
            <hr style={{ border: '1px solid black' }} />
            <div className="container-custom">

                <div className="row justify-content-center">
                    <div className="col-lg-2 col-12 mt-5">
                        <ul className="list-unstyled">
                            <li className="pt-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} href='About'>
                                    درباره ردیف
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} href='Rules'>
                                    دستور عمل ها
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} href='Contact'>
                                    ارتباط با ردیف
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} href='Team'>
                                    تیم ردیف
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-7 col-12">
                        {TypeSelect.map((type => {
                            return (
                                <>
                                    <h2 className="fw-bold">{type.headerText}</h2>
                                    <br />
                                    <p>
                                        هدف پرایس رانر ارائه خدمات فوق‌العاده به مصرف‌کنندگان است. می‌توانید مطمئن باشید که ما همیشه در کنار شما به عنوان یک مصرف‌کننده در میان انبوهی از خرده‌فروشان و محصولات آنلاین هستیم. ما عاشق کاری هستیم که انجام می‌دهیم و فوق‌العاده مفتخریم که به مردم کمک می‌کنیم تا تصمیمات عاقلانه‌ای بگیرند و در هر روز از سال پول زیادی پس‌انداز کنند.
                                    </p>
                                    <ul>
                                        <li>سرویس مقایسه قیمت مستقل بریتانیا با بیش از ۸ میلیون محصول.</li>
                                        <li>پیشنهادات عالی هر روز - قیمت‌ها و پیشنهادات بیش از ۶۳۰۰ خرده‌فروش را مقایسه کنید.</li>
                                        <li>قیمت‌ها، شامل هزینه ارسال، را از کشورهای خارجی مقایسه کنید - ما فقط خرده‌فروشانی را معرفی می‌کنیم که به بریتانیا ارسال دارند.</li>
                                        <li>۱۴.۴ میلیون بازدید ماهانه در همه کشورها.</li>
                                        <li>رایگان برای استفاده.</li>
                                        <li>
                                            طرح حفاظت از خریدار PriceRunner خریدهای شما را تا سقف ۵۰۰۰ پوند - رایگان - پوشش می‌دهد!
                                        </li>
                                    </ul>
                                    <p>
                                        پرایس رانر در سال ۱۹۹۹ تأسیس شد و در بریتانیا، سوئد، دانمارک و نروژ فعال است. پرایس رانر به عضویت کلارنا ۲۰۲۲ درآمد.

                                    </p>
                                    <p>
                                        ما تیمی از PriceRunnerهای جاه‌طلب هستیم که برای توسعه بهترین خدمات برای خرید مقایسه‌ای تلاش می‌کنیم. PriceRunner کاملاً مستقل است؛ ما متعلق به یا وابسته به هیچ تولیدکننده، خرده‌فروش یا سازمان دیگری نیستیم که ممکن است در ارائه اطلاعات جانبدارانه ذینفع باشد.


                                    </p>
                                    <p>
                                        ماموریت پرایس رانر کمک به مصرف‌کنندگان برای یافتن محصولات بهتر و قیمت‌های بهتر است. هر ماه ما با مقایسه قیمت‌های یک محصول خاص، به صدها هزار مصرف‌کننده کمک می‌کنیم تا محصولات بهتر و ارزان‌تری پیدا کنند و در هزینه‌های خود صرفه‌جویی کنند.
                                    </p>
                                    <p>
                                        چشم‌انداز ما این است که یک منبع مستقل و معتبر باشیم که مصرف‌کننده همیشه بتواند هنگام مقایسه محصولات آنلاین به آن اعتماد کند. ما فکر می‌کنیم کاری که انجام می‌دهیم واقعاً هیجان‌انگیز است - تجارت الکترونیک شاهد رشد چشمگیری است و ما می‌خواهیم به خریداران کمک کنیم تا تصمیمات هوشمندانه‌تری بگیرند!
                                    </p>
                                </>
                            )

                        }))}

                    </div>
                </div>
            </div>
            <FooterMain></FooterMain>
        </>
    )
}

