export default function AdsComponent(prop) {
    return (
        <aside className="col-lg-3 position-sticky"
            style={{ top: '20px', height: 'calc(100vh - 40px)' }}
        >
            <div className="ads">
                <img className="img-fluid rounded-2" src={prop.img} alt="" />
            </div>
        </aside>
    )
}