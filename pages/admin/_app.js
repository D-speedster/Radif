import "@/public/style.css"; // فایل استایل عمومی (اختیاری)
import MainLayout from "@/layouts/MainLayout"; // اگر بخوای همه صفحات از یک Layout استفاده کنن
import Script from "next/script";
export default function MyApp({ Component, pageProps }) {

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );

}