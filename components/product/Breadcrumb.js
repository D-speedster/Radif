export default function Breadcrumb() {
    return (
        <div className="rooter mt-3">
            <div className="container-custom">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-end" style={{ direction: 'ltr' }}>
                        <li className="breadcrumb-item breadcrumb-li active" aria-current="page">دیتا</li>
                        <li classNameName="breadcrumb-item breadcrumb-li"><a href="#">کتابخانه</a></li>
                        <li className="breadcrumb-item breadcrumb-li"><a href="/">خانه</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}