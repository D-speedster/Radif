import AboutComponent from "../components/main/About";
import Category from "../components/main/Category";
import FooterMain from "../components/main/FooterMain";
import Knowledge from "../components/main/Knowledge";
import SliderProduct from "../components/main/SliderProduct";
import Header_Main from "../components/main/header";
import HeroSection from "../components/main/hero";
import Topic from "../components/main/topic";
import 'bootstrap/dist/css/bootstrap.min.css';

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




  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ردیف | موتور جستجو</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="/css/index.css" />
      <link rel="stylesheet" href="/css/theme.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>



      <Header_Main></Header_Main>
      <HeroSection></HeroSection>
      <Category></Category>
      <SliderProduct title='دیجیتال' Category='digital'></SliderProduct>
      <SliderProduct title='منزل' Category='home'></SliderProduct>
      <Knowledge {...newsAray}></Knowledge>
      <SliderProduct title='ورزشی' Category='sports'></SliderProduct>
      {/* <AboutComponent></AboutComponent> */}
      <Topic></Topic>
      <FooterMain></FooterMain>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    </>
  );
}