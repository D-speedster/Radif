import { RiFindReplaceLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { BiExpandAlt } from "react-icons/bi";


function AboutComponent() {
    return (
        <section className="About mb-5">
            <div className="container-custom"
         
            >
                <h6>درباره ردیف</h6>
                <div className="row-cols-lg-2">
                    <div className="col">
                        <h3 style={{
                            fontWeight: '800',
                            fontSize: '25px',
                            fontFamily: 'IRANYEKAN'
                        }}
                        >هدف ما خلق یک سرویس و تجربه‌ی فوق‌العاده برای همه‌ی مصرف‌کنندگان است. </h3>

                    </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 parent-About">
                    <div className="col">
                        <div className="About-Item">
                            <div className="icon-About">
                                <div className="me-5 mb-3">
                                    <RiFindReplaceLine style={{ fontSize: '54px' }} />

                                </div>
                            </div>
                            <div className="title-About">
                                <strong>یافتن کالا با بهترین قیمت</strong>
                            </div>
                            <div className="text-about">
                                ردیف با هدف ایجاد تجربه‌ی خریدی مطمئن و هوشمندانه برای شما ایجاد شده است. ما دسترسی رایگان
                                به اطلاعات جامع قیمت و کالا را فراهم می‌کنیم تا بتوانید بهترین انتخاب را با مناسب‌ترین هزینه
                                داشته باشید. در ردیف، جستجو کنید و آگاهانه خرید کنید. </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="About-Item">
                            <div className="icon-About">
                                <div className="me-5 mb-3">
                                    <TiTick style={{ fontSize: '54px' }} />
                                </div>


                            </div>
                            <div className="title-About">
                                <strong>مستقل و قابل اعتماد</strong>
                            </div>
                            <div className="text-about">
                                ردیف یک سرویس اطلاع‌رسانی مستقل است که مقایسه‌های واقعی قیمت را ارائه می‌دهد. هیچ فروشگاهی
                                نمی‌تواند بر اطلاعات موجود در سایت ما تأثیر بگذارد، خواه مشتری ردیف باشد یا خیر. فروشندگان
                                می‌توانند در سایت ما تبلیغ کنند، اما این موضوع به هیچ وجه بر جایگاه آن‌ها در نتایج مقایسه
                                قیمت محصولات تأثیری ندارد.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="About-Item">
                            <div className="icon-About">
                                <div className="me-5 mb-3">
                                    <BiExpandAlt style={{fontSize : '54px'}} />

                                </div>
                            </div>
                            <div className="title-About">
                                <strong>استفاده رایگان</strong>
                            </div>
                            <div className="text-about">
                                در ردیف می‌توانید قیمت‌های پایین‌تر بیش از 8 میلیون محصول از هزاران فروشگاه آنلاین را پیدا و
                                مقایسه کنید. ما دائماً در حال افزودن محصولات و فروشگاه‌های جدید هستیم و تلاش می‌کنیم تا
                                اطمینان حاصل کنیم که مرتبط‌ترین اطلاعات در مورد محصولات، فروشندگان و قیمت‌ها را دریافت
                                می‌کنید. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutComponent