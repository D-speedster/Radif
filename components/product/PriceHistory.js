export default function PriceHistory() {
    return (
        <section id="section3" className="priceHistory">
            <h2 className="pt-4"> تاریخچه قیمت و محبوبیت</h2>
            <h6>
                آیا قیمت فعلی معامله خوبی است؟
            </h6>
            <p className="w-75 mb-4">
                نمودار تاریخچه قیمت، کمترین قیمت را در طول زمان، بدون احتساب هزینه های حمل و نقل، نشان می
                دهد.
                <br />
                نمودار محبوبیت محبوبیت محصول را در دسته بندی خود نشان می دهد.
            </p>
            <canvas id="myChart" width={700} height={300} />
        </section>
    )
}