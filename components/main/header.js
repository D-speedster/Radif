export default function Header_Main() {
    return (

        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid"
                    style={{ maxWidth: '1450.8px' }}
                >

                    <a class=" " href="#">
                        <img src="/img/radif-logo.svg" alt="logo" class="ms-2 logos" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        style={{ marginRight: '-40px' }}
                        class="collapse navbar-collapse justify-content-between"
                        id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="#" class="nav-link">همه دسته‌بندی‌ها</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">فروش ویژه</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">وبلاگ</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">نحوه استفاده</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">درباره ما</a></li>
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