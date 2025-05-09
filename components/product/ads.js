export default function AdsComponent(prop) {
    return (
        <aside class="col-lg-3 position-relative"
            style={{ marginTop: '72.5px' }}
        >
            <div class="ads">
                <img class="img-fluid rounded-2" src={prop.img} alt="" />

            </div>
        </aside>
    )
}