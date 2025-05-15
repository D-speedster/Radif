import { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Filler,
    Tooltip,
    Legend
  );
export default function PriceHistory() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // اگر قبلاً چارت ساخته شده، حذفش کن
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['20 فروردین', '21 فروردین', '24 فروردین', '25 فروردین', '28 فرودین', '31 فروردین', '1 اردیبهشت'],
                datasets: [
                    {
                        label: 'تومان',
                        data: [91500000, 88600000, 86400000, 84100000, 83000000, 81400000, 78000000],
                        borderColor: 'rgba(128, 90, 213, 0.8)',
                        backgroundColor: 'rgba(128, 90, 213, 0.1)',
                        fill: true,
                        tension: 0.9,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: {
                        position: 'right',
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'تومان',
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'تاریخ',
                        },
                    },
                },
            },
        });
    }, []);

    return (
        <>
            <section id="section3" classNae="priceHistory">
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
       
        </>


    )
}