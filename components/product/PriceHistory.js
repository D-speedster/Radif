export default function PriceHistory() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['20 فروردین', '21 فروردین', '24 فروردین', '25 فروردین', '28 فرودین', '31 فروردین', '1 اردیبهشت'],
            datasets: [{
                label: 'تومان',
                data: [91500000, 88600000, 86400000, 84100000, 83000000, 81400000, 78000000], // تعداد داده‌ها باید با تعداد لیبل‌ها برابر باشد!
                borderColor: 'rgba(128, 90, 213, 0.8)',
                backgroundColor: 'rgba(128, 90, 213, 0.1)',
                fill: true,
                tension: 0.9
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    position: 'right', // اینجا درست است
                    beginAtZero: false,
                    title: { display: true, text: 'تومان' }
                },
                x: {
                    title: { display: true, text: 'تاریخ' }
                }
            }
        }
    });
    return (
        <>
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
                <canvas ref={chartRef} width={600} height={300}></canvas>;
            </section>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </>


    )
}