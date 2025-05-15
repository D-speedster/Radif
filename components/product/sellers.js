export default function SellersComponent(props) {



    return (
        <>
            {
                Object.entries(props).map(([key, item]) => {
                    return <div class="items-shop mt-3 ">
                        <div class="row">
                            <ul style={{ listStyle: 'none' }}>


                                <div class="card shadow-sm rounded-4 border-0">
                                    <div class="card-body p-3">


                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <div class="d-flex align-items-center gap-2">

                                                <box-icon name="chevron-down"></box-icon>
                                                <div
                                                    style={{ width: '1px', height: '24px', backgroundColor: '#dee2e6', margin: '0 10px' }} >
                                                </div>

                                                <img src={item.img} width="32" height="32"
                                                    style={{ borderRadius: '50%' }} />
                                                <span style={{ fontSize: '18px' }} class="fw-semibold">

                                                    {item.seller}
                                                </span>
                                            </div>

                                            <button
                                                class="btn btn-sm btn-light border rounded-pill px-3 d-flex align-items-center gap-1">
                                                <box-icon name="dots-horizontal-rounded"></box-icon>
                                                <span>گزینه‌ها</span>
                                            </button>
                                        </div>

                                        <hr class="my-2" />


                                        <div class="mb-2">
                                            <span class="fw-medium">
                                                {item.title}
                                            </span>
                                        </div>


                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="fw-bold text-success fs-5">{item.price} تومان</span>
                                            <div class="d-flex align-items-center gap-1 text-primary">
                                                <box-icon name="truck" color="#0d6efd"></box-icon>
                                                <span>ارسال رایگان</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </ul>

                        </div>

                    </div >

                })
            }
            <button className="btn btn-danger d-flex  mx-auto text-center">نمایش تمام فروشندگان</button>

        </>
    )

}

