import Link from "next/link"


export default function Header_Main() {
    return (

        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid"
                    style={{ maxWidth: '1450.8px' }}
                >

                    <Link className="" href="/">
                        <img src="/img/radif-logo.svg" alt="logo" className="ms-2 logos" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        style={{ marginRight: '-40px' }}
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarNav">
                        <ul className="navbar-nav header-item">
                            <li className="nav-item "><Link href="/Category" className="nav-link header-item">همه دسته‌بندی‌ها</Link></li>
                            <li className="nav-item "><Link href="/Special-Offers" className="nav-link header-item">فروش ویژه</Link></li>
                            <li className="nav-item "><Link href="/Blog" className="nav-link header-item">وبلاگ</Link></li>
                            <li className="nav-item "><Link href="/how-to-use" className="nav-link header-item">نحوه استفاده</Link></li>
                            <li className="nav-item "><Link href="/info/About" className="nav-link header-item">درباره ما</Link></li>
                        </ul>


                        <div className="">
                            <button className="sign-in-button">ورود</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}