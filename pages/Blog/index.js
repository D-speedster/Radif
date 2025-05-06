import FooterMain from "../../components/main/FooterMain";
import Header_Main from '../../components/main/header';
import Knowledge from '../../components/main/Knowledge';
export default function BlogPage() {

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <Header_Main></Header_Main>
            <div className="container-custom">
                <Knowledge></Knowledge>
            </div>
            <FooterMain></FooterMain>
        </>

    )

}