import Image from "next/image"
import img1 from '../../public/images/feature1.png'
import img2 from '../../public/images/feature2.png'
import img3 from '../../public/images/feature3.png'
import img4 from '../../public/images/feature4.png'

function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-4">
                        <p className="bolditalic">OUR  FEATURES</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eaque dolorum </p>
                    </div>
                </div>

                <div className="d-flex justify-content-center my-5">
                    <div className="feature-item">
                        <div className="d-flex justify-content-between">
                            <Image src={img1} alt="image" />
                            <p className="number">01</p>
                        </div>
                        <p className="fw-bold">FREE CONSULTATION</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vel nostrum nisi. Minima praesentium error voluptatibus nemo, vel labore?</p>
                    </div>
                    <div className="feature-item">
                        <div className="d-flex justify-content-between">
                            <Image src={img2} alt="image" />
                            <p className="number">02</p>
                        </div>
                        <p className="fw-bold">EXCELLENT SERVICE</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vel nostrum nisi. Minima praesentium error voluptatibus nemo, vel labore?</p>
                    </div>
                    <div className="feature-item">
                        <div className="d-flex justify-content-between">
                            <Image src={img3} alt="image" />
                            <p className="number">03</p>
                        </div>
                        <p className="fw-bold">BEST TRAINERS</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vel nostrum nisi. Minima praesentium error voluptatibus nemo, vel labore?</p>
                    </div>
                    <div className="feature-item">
                        <div className="d-flex justify-content-between">
                            <Image src={img4} alt="image" />
                            <p className="number">04</p>
                        </div>
                        <p className="fw-bold">WORK PROGRAMS</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vel nostrum nisi. Minima praesentium error voluptatibus nemo, vel labore?</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Features
