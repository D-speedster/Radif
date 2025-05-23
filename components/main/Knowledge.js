import { LuNewspaper } from "react-icons/lu";

function Knowledge(prop) {

    return (
        <section className="Knowledge" style={{ background: '#FFF !important' }}>
            <div className="container-custom">

                <div className="title">

                    <LuNewspaper fontSize={'24px'} />
                    <span style={{ fontSize: '19px' , marginRight : '8px' , fontWeight : '800' , marginTop : '3px'}}>خبر روز </span>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 ">
                    {Object.entries(prop).map(([key, item]) => (

                        <div className="col mt-4" key={key}>
                            <div className="card">
                                <img src={item.img} alt="" className="card-img-top" />
                                <div className="container-fluid">
                                    <div className="card-title bg-white">
                                        {item.title}
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <span className="footer-item">
                                            <box-icon name="news"></box-icon>
                                            <span>{item.genre}</span>
                                        </span>
                                        <span className="footer-item">
                                            <box-icon name="calendar"></box-icon>
                                            <span>{item.createdAt}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>

            </div>
        </section >
    )
}

export default Knowledge