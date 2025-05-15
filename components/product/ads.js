export default function AdsComponent(prop) {
    return (
        <aside class="col-lg-3 position-relative"
            style={{ marginTop: '10px' }}
        >
            <div class="ads">
                <img class="img-fluid rounded-2" src={prop.img} alt="" />

            </div>
        </aside>
    )
}