import Link from "next/link"


export default function Header_Main() {
    return (

        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid"
                    style={{ maxWidth: '1450.8px' }}
                >

                    <Link class="" href="/">
                        <img src="/img/radif-logo.svg" alt="logo" class="ms-2 logos" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        style={{ marginRight: '-40px' }}
                        class="collapse navbar-collapse justify-content-between"
                        id="navbarNav">
                        <ul className="navbar-nav header-item">
                            <li className="nav-item "><Link href="/Category" className="nav-link header-item">همه دسته‌بندی‌ها</Link></li>
                            <li className="nav-item "><Link href="/Special-Offers" className="nav-link header-item">فروش ویژه</Link></li>
                            <li className="nav-item "><Link href="/Blog" className="nav-link header-item">وبلاگ</Link></li>
                            <li className="nav-item "><Link href="/how-to-use" className="nav-link header-item">نحوه استفاده</Link></li>
                            <li className="nav-item "><Link href="/info/About" className="nav-link header-item">درباره ما</Link></li>
                        </ul>


                        <div class="">
                            <button class="sign-in-button">ورود</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}