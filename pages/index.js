import AboutComponent from "../components/main/About";
import Category from "../components/main/Category";
import FooterMain from "../components/main/FooterMain";
import Knowledge from "../components/main/Knowledge";
import SliderProduct from "../components/main/SliderProduct";
import Header_Main from "../components/main/header";
import HeroSection from "../components/main/hero";
import Topic from "../components/main/topic";

export default function HomePage() {

  return (
    <>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ردیف | موتور جستجو</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="/css/index.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

      <Header_Main></Header_Main>
      <HeroSection></HeroSection>
      <Category></Category>
      <SliderProduct></SliderProduct>
      <SliderProduct></SliderProduct>
      <Topic></Topic>
      <Knowledge></Knowledge>
      <AboutComponent></AboutComponent>
      <FooterMain></FooterMain>

    </>
  );
}