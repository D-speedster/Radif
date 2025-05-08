import { useRouter } from "next/router"
import Header_Main from "../../components/main/header"
import FooterMain from "../../components/main/FooterMain"


export default function SearchPage() {
    const router = useRouter()
    const { product } = router.query
    return (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{product}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

            <Header_Main></Header_Main>

            <div className="container-custom">
            نتیجه جستجو : {product ? product : "در حال c"}
            </div>
            <FooterMain></FooterMain>

        </>
    )
}