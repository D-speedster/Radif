export default function AdsComponent(prop) {
    return (
        <aside className="col-lg-3 position-relative"
            style={{ marginTop: '10px' }}
        >
            <div className="ads">
                <img className="img-fluid rounded-2" src={prop.img} alt="" />

            </div>
        </aside>
    )
}