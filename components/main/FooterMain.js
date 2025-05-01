export default function FooterMain (){

    return (
        <footer className="pb-5 pt-4">
        <div className="container-custom">
            <div className="row row-cols-2 row-cols-lg-4">
                <div className="col">
                    <img src="/img/radif-logo.svg" alt="logo" className="ms-2 logos"/>
                    <p>
                        ردیف، همراه شما در جستجوی هوشمندانه محصولات در سراسر وب.
                    </p>
                    <p>
                        ما در ردیف تلاش می‌کنیم تا بهترین و متنوع‌ترین کالاها را از سراسر اینترنت گردآوری کرده و به شما
                        در یافتن آنچه نیاز دارید، یاری رسانیم.


                    </p>
                </div>
                <div className="col list-footer mt-2 ">
                    <button>دسترسی سریع</button>
                    <a className="d-block" href="">لیست فروشگاه ها</a>
                    <a className="d-block" href="">ثبت نام فروشگاه </a>
                    <a className="d-block" href="">پنل فروشگاه </a>
                    <a className="d-block" href="">فرصت شغلی</a>

                </div>
                <div className="col list-footer mt-2 ">
                    <button>خدمات</button>
                    <a className="d-block" href="">پیگیری سفارش</a>
                    <a className="d-block" href="">پشتیبانی </a>
                    <a className="d-block" href="">راهنمای خرید امن </a>
                    <a className="d-block" href="">درباره ردیف </a>
                </div>

                <div className="col">
                    <div className="row row-cols-2 ms-2 enamad">
                        <div className="col"><img src="/img/new-enamad.png" alt=""/></div>
                        <div className="col"><img src="/img/markazi.webp" alt=""/></div>
                        <div className="col"><img src="/img/work.webp" alt=""/></div>
                        <div className="col"><img src="/img/samandehi.webp" alt=""/></div>
                
                    </div>
                </div>

            </div>

        </div>
        <div className="copyright">
            © تمام حقوق مادی و معنوی این سایت متعلق به ردیف است.
        </div>
    </footer>
    )

}