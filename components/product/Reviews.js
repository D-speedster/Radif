export default function ReviewsComponent() {
    <section id="section2" className="Reviews py-5">
        <div className="container-custom">
            <h6 className="mt-4">تست ها و بررسی های تخصصی</h6>
            <div className="row row-cols-1 row-cols-md-3 g-4">


                <div className="col">
                    <div
                        className="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center gap-2">
                                <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                <strong className="text-dark">نقد دیجی کالا</strong>
                            </div>
                            <small className="text-muted">۱۴۰۳/۰۲/۰۵</small>
                        </div>
                        <p className="text-secondary small">
                            دوربین‌های با کیفیت iPhone 16، تجربه عکاسی فوق‌العاده‌ای را ارائه می‌دهند و
                            با فناوری‌های نوین، امکان ثبت لحظات خاص با جزئیات بالا را فراهم می‌کنند
                            <span
                                style={{ color: 'blue' }}
                            >ادامه ...</span>
                        </p>
                        <div className="d-flex gap-1 mt-2">
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star-half' type='solid' color='#f9d635'
                                size="sm"></box-icon>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div
                        className="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center gap-2">
                                <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                <strong className="text-dark">کاربر نرگس</strong>
                            </div>
                            <small className="text-muted">۱۴۰۳/۰۲/۰۴</small>
                        </div>
                        <p className="text-secondary small">طراحی بسیار زیباست ولی شارژدهی می‌تونست بهتر
                            باشه.</p>
                        <div className="d-flex gap-1 mt-2">
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#e4e4e4' size="sm"></box-icon>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div
                        className="top-comment-item p-3 rounded-4 shadow-sm bg-white h-100 border border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center gap-2">
                                <box-icon type="solid" name="user" size="sm" color="#6c757d"></box-icon>
                                <strong className="text-dark">کاربر امین</strong>
                            </div>
                            <small className="text-muted">۱۴۰۳/۰۲/۰۳</small>
                        </div>
                        <p className="text-secondary small">قیمتش بالاست ولی کیفیت خوبی داره. پیشنهاد
                            می‌کنم.</p>
                        <div className="d-flex gap-1 mt-2">
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#f9d635' size="sm"></box-icon>
                            <box-icon name='star-half' type='solid' color='#f9d635'
                                size="sm"></box-icon>
                            <box-icon name='star' type='solid' color='#e4e4e4' size="sm"></box-icon>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <h3>نظرات : </h3>
            <h5>قبل از خرید نگاهی به نظرات دیگران بیندازید.</h5>
            <br />
            <div className="row align-items-start">

                <div className="col-lg-6 mb-4">
                    <div>
                        <div className="d-flex align-items-center mb-2">
                            <span className="fs-1 fw-bold ms-2">4.6</span>
                            <span className="text-warning fs-4">
                                <i className="fas fa-star"></i>
                            </span>
                            <span className="text-muted ms-2">از ۲۳۵ رأی</span>
                        </div>

                        <div
                            style={{ maxWidth: '350px' }}
                            className="mb-2"
                        >
                            <div className="d-flex align-items-center mb-1">
                                <span className="ms-2"
                                    style={{ width: '24px' }}

                                >۵</span>
                                <i className="fas fa-star text-warning ms-2"></i>
                                <div className="progress flex-grow-1 ms-2"

                                    style={{ height: '6px', backgroundColor: '#f2f2f2' }}
                                >
                                    <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
                                </div>
                                <span className="text-muted" style={{ width: '36px' }}>70%</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <span className="ms-2" style={{ width: '24px' }}>۴</span>
                                <i className="fas fa-star text-warning ms-2"></i>
                                <div className="progress flex-grow-1 ms-2" style={{ height: '6px', background: '#f2f2f2' }}
                                >
                                    <div className="progress-bar bg-warning"
                                        style={{ width: '15%' }}
                                    ></div>
                                </div>
                                <span className="text-muted" style={{ width: '36px' }}>15%</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <span className="ms-2" style={{ width: '24px' }}>۳</span>
                                <i className="fas fa-star text-warning ms-2"></i>
                                <div className="progress flex-grow-1 ms-2"
                                    style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                    <div className="progress-bar bg-warning" style={{ width: '8%' }}></div>
                                </div>
                                <span className="text-muted" style={{ width: '36px' }}>8%</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <span className="ms-2" style={{ width: '24px' }}>۲</span>
                                <i className="fas fa-star text-warning ms-2"></i>
                                <div className="progress flex-grow-1 ms-2"
                                    style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                    <div className="progress-bar bg-warning" style={{ width: '4%' }}></div>
                                </div>
                                <span className="text-muted" style={{ width: '36px' }}>4%</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <span className="ms-2" style={{ width: '24px' }}>۱</span>
                                <i className="fas fa-star text-warning ms-2"></i>
                                <div className="progress flex-grow-1 ms-2"
                                    style={{ height: '6px', backgroundColor: '#f2f2f2' }}>
                                    <div className="progress-bar bg-warning" style={{ width: '3%' }}></div>
                                </div>
                                <span className="text-muted" style={{ width: '36px' }}>3%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div>
                        <div className="mb-3">
                            <span className="fw-bold">علی رضایی</span>
                            <span className="text-warning ms-1">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="fas fa-star-half-alt"></i>
                            </span>
                            <span className="text-muted"
                                style={{ fontSize: '12px' }}
                            >۲ روز پیش</span>
                            <div className="mt-1 text-secondary"
                                style={{ fontSize: '15px' }}
                            >
                                خیلی راضی‌ام، کیفیت عالی و ارسال سریع بود.
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="fw-bold">مریم محمدی</span>
                            <span className="text-warning ms-1">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="far fa-star"></i>
                            </span>
                            <span className="text-muted" style={{ fontSize: '12px' }}>۱ هفته پیش</span>
                            <div className="mt-1 text-secondary"
                                style={{ fontSize: '15px' }}
                            >
                                نسبت به قیمتش ارزش خرید داره، اما بسته‌بندی بهتر می‌تونست باشه.
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn-more-comment">مشاهده بیشتر</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}