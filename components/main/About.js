function AboutComponent() {
    return (
        <section class="About mb-5">
            <div class="container-custom">
                <h6>درباره ردیف</h6>
                <div class="row-cols-2">
                    <div class="col">
                        <h3 style={{
                            fontWeight: '800',
                            fontSize: '25px',
                            fontFamily: 'IRANYEKAN'
                        }}
                        >هدف ما خلق یک سرویس و تجربه‌ی فوق‌العاده برای همه‌ی مصرف‌کنندگان است. </h3>

                    </div>
                </div>
                <div class="row row-cols-lg-3 row-cols-md-3 row-cols-1">
                    <div class="col">
                        <div class="About-Item">
                            <div class="icon-About">
                                <div>
                                    <img style={{ width: '50px', height: '50px' }} src="/img/search-product-icon.svg"
                                        alt="" />
                                </div>
                            </div>
                            <div class="title-About">
                                <strong>یافتن کالا با بهترین قیمت</strong>
                            </div>
                            <div class="text-about">
                                ردیف با هدف ایجاد تجربه‌ی خریدی مطمئن و هوشمندانه برای شما ایجاد شده است. ما دسترسی رایگان
                                به اطلاعات جامع قیمت و کالا را فراهم می‌کنیم تا بتوانید بهترین انتخاب را با مناسب‌ترین هزینه
                                داشته باشید. در ردیف، جستجو کنید و آگاهانه خرید کنید. </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="About-Item">
                            <div class="icon-About">
                                <img style={{ width: '50px', height: '50px' }} src="/img/shield-checkmark-line-icon.svg"
                                    alt="" />
                            </div>
                            <div class="title-About">
                                <strong>مستقل و قابل اعتماد</strong>
                            </div>
                            <div class="text-about">
                                ردیف یک سرویس اطلاع‌رسانی مستقل است که مقایسه‌های واقعی قیمت را ارائه می‌دهد. هیچ فروشگاهی
                                نمی‌تواند بر اطلاعات موجود در سایت ما تأثیر بگذارد، خواه مشتری ردیف باشد یا خیر. فروشندگان
                                می‌توانند در سایت ما تبلیغ کنند، اما این موضوع به هیچ وجه بر جایگاه آن‌ها در نتایج مقایسه
                                قیمت محصولات تأثیری ندارد.
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="About-Item">
                            <div class="icon-About">
                                <img style={{ width: '50px', height: '50px' }} src="/img/free-tag-line-icon.svg" alt="" />
                            </div>
                            <div class="title-About">
                                <strong>استفاده رایگان</strong>
                            </div>
                            <div class="text-about">
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