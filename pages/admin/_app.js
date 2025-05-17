import Script from "next/script";
import AdminLayout from "../AdminLayout";

export default function MyApp({ Component, pageProps }) {

  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );

}