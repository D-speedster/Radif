import AboutComponent from "../components/main/About";
import Category from "../components/main/Category";
import FooterMain from "../components/main/FooterMain";
import Knowledge from "../components/main/Knowledge";
import SliderProduct from "../components/main/SliderProduct";
import Header_Main from "../components/main/header";
import HeroSection from "../components/main/hero";
import Topic from "../components/main/topic";

export default function HomePage() {
  let KnowledgeArray = [
    {
      id: 2,
      title: 'سال بین‌المللی علم و فناوری کوانتومی',
      desc: 'سازمان ملل سال ۲۰۲۵ را به عنوان سال بین‌المللی علم و فناوری کوانتومی اعلام کرد تا آگاهی عمومی از اهمیت علم کوانتوم افزایش یابد.',
      img: '/img/quantum-year-2025.png',
      createdAt: '2025-05-07',
      genre: 'علمی'
    },
    {
      id: 4,
      title: 'Qualtrics آینده‌ای با هوش مصنوعی عامل‌محور پیش‌بینی می‌کند',
      desc: 'رئیس محصول Qualtrics پیش‌بینی می‌کند که هوش مصنوعی عامل‌محور نقش مهمی در بهبود ارتباطات مشتری و جمع‌آوری داده‌ها در محیط‌های کاری ایفا خواهد کرد.',
      img: '/img/qualtrics-agentic-ai.png',
      createdAt: '2025-05-07',
      genre: 'هوش مصنوعی'
    },
    {
      id: 1,
      title: 'Manus: عامل هوش مصنوعی مستقل از چین',
      desc: 'استارتاپ چینی Monica عامل هوش مصنوعی Manus را معرفی کرد که قادر است بدون دخالت مستقیم انسان، وظایف پیچیده آنلاین را انجام دهد.',
      img: '/img/manus-ai-agent.png',
      createdAt: '2025-05-07',
      genre: 'هوش مصنوعی'
    },
    {
      id: 13,
      title: 'رکورد تاریخی بیت‌کوین',
      desc: 'بیت‌کوین با عبور از مرز ۱۰۰٬۰۰۰ دلار، رکورد جدیدی ثبت کرد و توجه سرمایه‌گذاران جهانی را جلب نمود.',
      img: 'img/bitcoin-record.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 14,
      title: 'پیش‌بینی بیت‌وایز: بیت‌کوین به ۲۰۰٬۰۰۰ دلار می‌رسد',
      desc: 'بیت‌وایز پیش‌بینی می‌کند که قیمت بیت‌کوین در سال ۲۰۲۵ به بیش از ۲۰۰٬۰۰۰ دلار خواهد رسید، با افزایش پذیرش نهادی و ایجاد ذخایر استراتژیک توسط دولت‌ها.',
      img: '/img/bitwise-prediction.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 3,
      title: 'ذخیره استراتژیک بیت‌کوین در آمریکا',
      desc: 'دولت آمریکا با ایجاد ذخیره استراتژیک بیت‌کوین به ارزش ۱۷ میلیارد دلار، گامی مهم در جهت پذیرش دارایی‌های دیجیتال برداشت.',
      img: '/img/us-bitcoin-reserve.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 10,
      title: 'پیشرفت‌های جدید در اتریوم و پولکادات',
      desc: 'اتریوم با ارتقاء Pectra و پولکادات با نسخه ۲.۰ بهبودهای قابل توجهی در مقیاس‌پذیری و کارایی شبکه‌های خود ایجاد کردند.',
      img: '/img/ethereum-polkadot-upgrades.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 5,
      title: 'پیش‌بینی فرانکلین تمپلتون: آمریکا پیشتاز نوآوری‌های رمزارزی در ۲۰۲۵',
      desc: 'فرانکلین تمپلتون پیش‌بینی می‌کند که با تنظیم مقررات دوستانه‌تر برای ETFها، آمریکا در سال ۲۰۲۵ پیشتاز نوآوری‌های رمزارزی خواهد بود.',
      img: '/img/franklin-templeton-کریپتو.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 6,
      title: 'پیش‌بینی اسکاراموچی: چین ذخیره استراتژیک بیت‌کوین ایجاد می‌کند',
      desc: 'آنتونی اسکاراموچی پیش‌بینی می‌کند که چین در سال ۲۰۲۵ ذخیره استراتژیک بیت‌کوین ایجاد خواهد کرد، مشابه اقدام اخیر آمریکا.',
      img: '/img/china-bitcoin-reserve.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 7,
      title: 'رسوایی رمزارزی در آرژانتین: $LIBRA',
      desc: 'پروژه رمزارزی $LIBRA که توسط رئیس‌جمهور آرژانتین تبلیغ شد، با سقوط شدید قیمت مواجه شد و منجر به از دست رفتن ۲۵۰ میلیون دلار سرمایه سرمایه‌گذاران گردید.',
      img: '/img/libra-scandal.png',
      createdAt: '2025-05-07',
      genre: 'کریپتو'
    },
    {
      id: 8,
      title: 'زاکربرگ: دوستان آینده شما هوش مصنوعی خواهند بود',
      desc: 'مارک زاکربرگ اعلام کرد که در آینده، هوش مصنوعی نقش مهمی در تعاملات اجتماعی انسان‌ها ایفا خواهد کرد، از جمله دوستان، درمانگران و نمایندگان تجاری.',
      img: '/img/zuckerberg-ai-friends.png',
      createdAt: '2025-05-07',
      genre: 'هوش مصنوعی'
    },
    {
      id: 9,
      title: 'OpenAI برای کشورهای دموکراتیک',
      desc: 'OpenAI ابتکار جهانی "OpenAI برای کشورها" را راه‌اندازی کرد تا زیرساخت‌های هوش مصنوعی را در کشورهای دموکراتیک توسعه دهد و نسخه‌های محلی ChatGPT را ارائه کند.',
      img: '/img/openai-democratic.png',
      createdAt: '2025-05-07',
      genre: 'هوش مصنوعی'
    },

    {
      id: 11,
      title: 'اپل به دنبال افزودن موتورهای جستجوی هوش مصنوعی به سافاری',
      desc: 'اپل در حال بررسی افزودن موتورهای جستجوی مبتنی بر هوش مصنوعی مانند Perplexity و OpenAI به مرورگر سافاری است تا تجربه جستجوی کاربران را بهبود بخشد.',
      img: '/img/apple-ai-search.png',
      createdAt: '2025-05-07',
      genre: 'هوش مصنوعی'
    },
    {
      id: 12,
      title: 'گوگل به توسعه نیروگاه‌های هسته‌ای برای پشتیبانی از هوش مصنوعی کمک می‌کند',
      desc: 'گوگل با همکاری Elementl Power به توسعه سه نیروگاه هسته‌ای در آمریکا کمک می‌کند تا نیازهای انرژی فزاینده مراکز داده و هوش مصنوعی را تأمین کند.',
      img: '/img/google-nuclear-ai.png',
      createdAt: '2025-05-07',
      genre: 'technology'
    },


    {
      id: 15,
      title: 'فرود موفقیت‌آمیز مأموریت Blue Ghost بر سطح ماه',
      desc: 'شرکت Firefly Aerospace با موفقیت مأموریت Blue Ghost را بر سطح ماه فرود آورد تا ابزارهایی برای مطالعه خاک ماه و تعاملات باد خورشیدی با میدان مغناطیسی زمین ارائه دهد.',
      img: '/img/blue-ghost-moon-landing.png',
      createdAt: '2025-05-07',
      genre: 'علمی'
    },
    {
      id: 16,
      title: 'کاهش جمعیت پروانه‌ها در آمریکا',
      desc: 'مطالعه‌ای نشان داد که جمعیت پروانه‌ها در آمریکا بین سال‌های ۲۰۰۰ تا ۲۰۲۰ به میزان ۲۲٪ کاهش یافته است، که نگرانی‌هایی درباره از دست رفتن تنوع زیستی ایجاد کرده است.',
      img: '/img/butterfly-decline.png',
      createdAt: '2025-05-07',
      genre: 'علمی'
    }
  ];
  let newsAray = KnowledgeArray.filter((item) => {
    return item.id < 5
  })
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+1",
      title: "گوشی موبایل سامسونگ مدل Galaxy A55",
      price: "۱۲,۵۰۰,۰۰۰",
      views: "+500",
      stores: "15",
      genre: "digital"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+2",
      title: "لپ تاپ ایسوس مدل VivoBook 15",
      price: "۲۲,۰۰۰,۰۰۰",
      views: "+300",
      stores: "10",
      genre: "digital"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+3",
      title: "تلویزیون ال جی مدل 55 اینچ",
      price: "۳۵,۰۰۰,۰۰۰",
      views: "+700",
      stores: "8",
      genre: "electronics"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150/FFFF33/000000?text=Product+4",
      title: "یخچال فریزر دوقلو امرسان",
      price: "۲۸,۰۰۰,۰۰۰",
      views: "+400",
      stores: "12",
      genre: "home"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Product+5",
      title: "ماشین لباسشویی اسنوا 8 کیلویی",
      price: "۱۵,۰۰۰,۰۰۰",
      views: "+250",
      stores: "7",
      genre: "home"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150/33FFFF/FFFFFF?text=Product+6",
      title: "هدفون بی‌سیم سونی مدل WH-1000XM5",
      price: "۸,۰۰۰,۰۰۰",
      views: "+600",
      stores: "18",
      genre: "digital"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150/8D33FF/FFFFFF?text=Product+7",
      title: "ساعت هوشمند اپل واچ سری 9",
      price: "۲۰,۰۰۰,۰۰۰",
      views: "+900",
      stores: "25",
      genre: "digital"
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150/33FF8D/FFFFFF?text=Product+8",
      title: "دوربین عکاسی کانن مدل EOS 250D",
      price: "۲۵,۰۰۰,۰۰۰",
      views: "+350",
      stores: "9",
      genre: "electronics"
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150/FF8D33/FFFFFF?text=Product+9",
      title: "اسپیکر بلوتوثی قابل حمل JBL",
      price: "۳,۰۰۰,۰۰۰",
      views: "+800",
      stores: "30",
      genre: "digital"
    },
    {
      id: 10,
      image: "https://via.placeholder.com/150/33FFD1/FFFFFF?text=Product+10",
      title: "مایکروویو سامسونگ",
      price: "۷,۰۰۰,۰۰۰",
      views: "+200",
      stores: "6",
      genre: "home"
    },
    {
      id: 11,
      image: "https://via.placeholder.com/150/D133FF/FFFFFF?text=Product+11",
      title: "پلی استیشن 5 اسلیم",
      price: "۱۸,۵۰۰,۰۰۰",
      views: "+1200",
      stores: "22",
      genre: "digital"
    },
    {
      id: 12,
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+12",
      title: "کنسول بازی Xbox Series X",
      price: "۱۹,۰۰۰,۰۰۰",
      views: "+950",
      stores: "19",
      genre: "digital"
    },
    {
      id: 13,
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+13",
      title: "مانیتور گیمینگ ایسوس 27 اینچ",
      price: "۱۰,۰۰۰,۰۰۰",
      views: "+400",
      stores: "14",
      genre: "digital"
    },
    {
      id: 14,
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+14",
      title: "کارت گرافیک NVIDIA GeForce RTX 4070",
      price: "۴۰,۰۰۰,۰۰۰",
      views: "+600",
      stores: "10",
      genre: "digital"
    },
    {
      id: 15,
      image: "https://via.placeholder.com/150/FFFF33/000000?text=Product+15",
      title: "موس و کیبورد بی‌سیم لاجیتک",
      price: "۲,۵۰۰,۰۰۰",
      views: "+300",
      stores: "28",
      genre: "digital"
    },
    {
      id: 16,
      image: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Product+16",
      title: "هارد اکسترنال وسترن دیجیتال 2 ترابایت",
      price: "۳,۵۰۰,۰۰۰",
      views: "+550",
      stores: "17",
      genre: "digital"
    },
    {
      id: 17,
      image: "https://via.placeholder.com/150/33FFFF/FFFFFF?text=Product+17",
      title: "مودم روتر وای فای تندا",
      price: "۱,۰۰۰,۰۰۰",
      views: "+700",
      stores: "35",
      genre: "digital"
    },
    {
      id: 18,
      image: "https://via.placeholder.com/150/8D33FF/FFFFFF?text=Product+18",
      title: "پرینتر جوهرافشان اپسون",
      price: "۴,۰۰۰,۰۰۰",
      views: "+200",
      stores: "9",
      genre: "electronics"
    },
    {
      id: 19,
      image: "https://via.placeholder.com/150/33FF8D/FFFFFF?text=Product+19",
      title: "کولر گازی 12000 اجنرال",
      price: "۲۵,۰۰۰,۰۰۰",
      views: "+300",
      stores: "11",
      genre: "home"
    },
    {
      id: 20,
      image: "https://via.placeholder.com/150/FF8D33/FFFFFF?text=Product+20",
      title: "جاروبرقی بوش",
      price: "۹,۰۰۰,۰۰۰",
      views: "+450",
      stores: "16",
      genre: "home"
    },
    {
      id: 21,
      image: "https://via.placeholder.com/150/33FFD1/FFFFFF?text=Product+21",
      title: "قهوه ساز دلونگی",
      price: "۸,۰۰۰,۰۰۰",
      views: "+150",
      stores: "5",
      genre: "home"
    },
    {
      id: 22,
      image: "https://via.placeholder.com/150/D133FF/FFFFFF?text=Product+22",
      title: "اتو بخار تفال",
      price: "۲,۰۰۰,۰۰۰",
      views: "+350",
      stores: "20",
      genre: "home"
    },
    {
      id: 23,
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+23",
      title: "دوچرخه کوهستان سایز 26",
      price: "۶,۰۰۰,۰۰۰",
      views: "+180",
      stores: "10",
      genre: "sports"
    },
    {
      id: 24,
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+24",
      title: "راکت تنیس ویلسون",
      price: "۱,۵۰۰,۰۰۰",
      views: "+80",
      stores: "6",
      genre: "sports"
    },
    {
      id: 25,
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+25",
      title: "کفش ورزشی نایک مدل Air Zoom",
      price: "۴,۰۰۰,۰۰۰",
      views: "+500",
      stores: "25",
      genre: "sports"
    },
    {
      id: 26,
      image: "https://via.placeholder.com/150/FFFF33/000000?text=Product+26",
      title: "لباس ورزشی آدیداس",
      price: "۱,۰۰۰,۰۰۰",
      views: "+300",
      stores: "30",
      genre: "clothing"
    },
    {
      id: 27,
      image: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Product+27",
      title: "شلوار جین مردانه",
      price: "۸۰۰,۰۰۰",
      views: "+400",
      stores: "40",
      genre: "clothing"
    },
    {
      id: 28,
      image: "https://via.placeholder.com/150/33FFFF/FFFFFF?text=Product+28",
      title: "مانتو زنانه تابستانی",
      price: "۷۰۰,۰۰۰",
      views: "+350",
      stores: "38",
      genre: "clothing"
    },
    {
      id: 29,
      image: "https://via.placeholder.com/150/8D33FF/FFFFFF?text=Product+29",
      title: "عینک آفتابی ری بن",
      price: "۳,۰۰۰,۰۰۰",
      views: "+600",
      stores: "20",
      genre: "accessories"
    },
    {
      id: 30,
      image: "https://via.placeholder.com/150/33FF8D/FFFFFF?text=Product+30",
      title: "کیف چرمی زنانه",
      price: "۲,۵۰۰,۰۰۰",
      views: "+450",
      stores: "15",
      genre: "accessories"
    },
    {
      id: 31,
      image: "https://via.placeholder.com/150/FF8D33/FFFFFF?text=Product+31",
      title: "کمربند چرمی مردانه",
      price: "۵۰۰,۰۰۰",
      views: "+250",
      stores: "22",
      genre: "accessories"
    },
    {
      id: 32,
      image: "https://via.placeholder.com/150/33FFD1/FFFFFF?text=Product+32",
      title: "کتاب رمان خارجی",
      price: "۳۰۰,۰۰۰",
      views: "+1000",
      stores: "50",
      genre: "books"
    },
    {
      id: 33,
      image: "https://via.placeholder.com/150/D133FF/FFFFFF?text=Product+33",
      title: "کتاب آشپزی ایرانی",
      price: "۲۰۰,۰۰۰",
      views: "+700",
      stores: "45",
      genre: "books"
    },
    {
      id: 34,
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+34",
      title: "مداد رنگی فابر کاستل",
      price: "۸۰۰,۰۰۰",
      views: "+300",
      stores: "18",
      genre: "stationery"
    },
    {
      id: 35,
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+35",
      title: "دفترچه یادداشت فانتزی",
      price: "۵۰,۰۰۰",
      views: "+600",
      stores: "60",
      genre: "stationery"
    },
    {
      id: 36,
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+36",
      title: "خودکار روان‌نویس یونی بال",
      price: "۳۰,۰۰۰",
      views: "+900",
      stores: "70",
      genre: "stationery"
    },
    {
      id: 37,
      image: "https://via.placeholder.com/150/FFFF33/000000?text=Product+37",
      title: "ماشین اصلاح سر و صورت فیلیپس",
      price: "۴,۰۰۰,۰۰۰",
      views: "+400",
      stores: "15",
      genre: "health"
    },
    {
      id: 38,
      image: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Product+38",
      title: "مسواک برقی اورال بی",
      price: "۱,۵۰۰,۰۰۰",
      views: "+300",
      stores: "10",
      genre: "health"
    },
    {
      id: 39,
      image: "https://via.placeholder.com/150/33FFFF/FFFFFF?text=Product+39",
      title: "ترازوی دیجیتال شیائومی",
      price: "۷۰۰,۰۰۰",
      views: "+500",
      stores: "25",
      genre: "health"
    },
    {
      id: 40,
      image: "https://via.placeholder.com/150/8D33FF/FFFFFF?text=Product+40",
      title: "فرش ماشینی 6 متری",
      price: "۱۲,۰۰۰,۰۰۰",
      views: "+200",
      stores: "8",
      genre: "home"
    },
    {
      id: 41,
      image: "https://via.placeholder.com/150/33FF8D/FFFFFF?text=Product+41",
      title: "مبل راحتی 7 نفره",
      price: "۳۰,۰۰۰,۰۰۰",
      views: "+150",
      stores: "6",
      genre: "home"
    },
    {
      id: 42,
      image: "https://via.placeholder.com/150/FF8D33/FFFFFF?text=Product+42",
      title: "لوستر مدرن پذیرایی",
      price: "۵,۰۰۰,۰۰۰",
      views: "+100",
      stores: "7",
      genre: "home"
    },
    {
      id: 43,
      image: "https://via.placeholder.com/150/33FFD1/FFFFFF?text=Product+43",
      title: "پرده زبرا پذیرایی",
      price: "۲,۰۰۰,۰۰۰",
      views: "+120",
      stores: "9",
      genre: "home"
    },
    {
      id: 44,
      image: "https://via.placeholder.com/150/D133FF/FFFFFF?text=Product+44",
      title: "سرویس قابلمه گرانیتی",
      price: "۳,۰۰۰,۰۰۰",
      views: "+250",
      stores: "18",
      genre: "home"
    },
    {
      id: 45,
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+45",
      title: "سرویس کارد و چنگال",
      price: "۱,۰۰۰,۰۰۰",
      views: "+180",
      stores: "20",
      genre: "home"
    },
    {
      id: 46,
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+46",
      title: "پتو گلبافت دو نفره",
      price: "۸۰۰,۰۰۰",
      views: "+300",
      stores: "30",
      genre: "home"
    },
    {
      id: 47,
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+47",
      title: "حوله حمام نخی",
      price: "۱۵۰,۰۰۰",
      views: "+400",
      stores: "45",
      genre: "home"
    },
    {
      id: 48,
      image: "https://via.placeholder.com/150/FFFF33/000000?text=Product+48",
      title: "ملحفه و روبالشی ترک",
      price: "۵۰۰,۰۰۰",
      views: "+250",
      stores: "35",
      genre: "home"
    },
    {
      id: 49,
      image: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Product+49",
      title: "ماگ سرامیکی فانتزی",
      price: "۸۰,۰۰۰",
      views: "+700",
      stores: "55",
      genre: "kitchenware"
    },
    {
      id: 50,
      image: "https://via.placeholder.com/150/33FFFF/FFFFFF?text=Product+50",
      title: "فنجان و نعلبکی چینی",
      price: "۳۰۰,۰۰۰",
      views: "+350",
      stores: "40",
      genre: "kitchenware"
    }
  ];



  return (
    <>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ردیف | موتور جستجو</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="/css/index.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

      <Header_Main></Header_Main>
      <HeroSection></HeroSection>
      <Category></Category>
      <SliderProduct Category='digital'></SliderProduct>
      <SliderProduct Category='home'></SliderProduct>
      <Topic></Topic>
      <Knowledge {...newsAray}></Knowledge>
      <SliderProduct Category='health'></SliderProduct>
      <AboutComponent></AboutComponent>
      <FooterMain></FooterMain>

    </>
  );
}