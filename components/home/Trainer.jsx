import Image from "next/image"
import trainer from '../../public/images/trainer.png'
import { BsArrowRightShort } from 'react-icons/bs'


function Trainer() {
    return (
        <section className='orca-trainer'>
            <div className="container ">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-5">
                        <p className="bolditalic">OUR <span className="redtext">EXPERT</span> TRAINNER</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur nulla doloremque aperiam obcaecati ab quibusdam a, hic veritatis quisquam?</p>
                    </div>
                </div>
                <div className="d-flex mt-5">
                    <div className="trainer-item">
                        <div className="trainer-img">
                            <Image src={trainer} alt="trainer" />
                        </div>
                        <p className="bolditalic text-uppercase m-0">Trainer </p>
                        <p>lorem ipsum</p>
                    </div>
                    <div className="trainer-item">
                        <div className="trainer-img">
                            <Image src={trainer} alt="trainer" />
                        </div>
                        <p className="bolditalic text-uppercase m-0">Trainer </p>
                        <p>lorem ipsum</p>
                    </div>
                    <div className="trainer-item">
                        <div className="trainer-img">
                            <Image src={trainer} alt="trainer" />
                        </div>
                        <p className="bolditalic text-uppercase m-0">Trainer </p>
                        <p>lorem ipsum</p>
                    </div>
                    <div className="trainer-item">
                        <div className="trainer-img">
                            <Image src={trainer} alt="trainer" />
                        </div>
                        <p className="bolditalic text-uppercase m-0">Trainer </p>
                        <p>lorem ipsum</p>
                    </div>
                </div>

                <button className="redbtn mt-5 m-auto">
                    View All <BsArrowRightShort size={25} />
                </button>
            </div>
        </section>
    )
}

export default Trainer
