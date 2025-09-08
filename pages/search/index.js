import { useRouter } from "next/router"
import Head from "next/head"
import Header_Main from "../../components/main/header"
import FooterMain from "../../components/main/FooterMain"
import BottomNavigation from "../../components/main/BottomNavigation"
import SearchResults from "../../components/search/SearchResults"

export default function SearchPage() {
    const router = useRouter();
    const { q, category, brand } = router.query;

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>جستجو</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async></script>
            </Head>

            <Header_Main />

            <main>
                <SearchResults query={q} initialCategory={category} initialBrand={brand} />
            </main>

            <FooterMain />
            <BottomNavigation />
        </>
    )
}