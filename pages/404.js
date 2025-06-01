import React from 'react'
import Header_Main from '../components/main/header'
import FooterMain from '../components/main/FooterMain'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Error404() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ردیف | موتور جستجو</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <Header_Main></Header_Main>
            <div className='container-custom'>
                <div className='row'>
                    <h4>متاسفانه صفحه مورد نظر یافت نشد !</h4>
                </div>
            </div>

            <FooterMain></FooterMain>
        </>
    )
}
