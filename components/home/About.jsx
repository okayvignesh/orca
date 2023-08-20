import Image from 'next/image'
import ball from '../../public/images/football.png'
import shoe from '../../public/images/shoes.png'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiMiniPlay } from 'react-icons/hi2'


function About() {
    return (
        <section className="about-orca">
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-6 about-video">
                        <div className="video-container">
                            <button className="playbtn"> <HiMiniPlay fill='white' /></button>
                        </div>
                    </div>
                    <div className="col-lg-5 about-text " data-aos="fade-left" data-aos-duration="900">
                        <div>
                            <p className="bolditalic">ABOUT <span className="redtext">ORCA</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi inventore qui sequi voluptate nobis fuga aut hic unde, autem iure et molestias expedita ab, nostrum repellat molestiae. Sit, quos.</p>
                            <div className="d-flex align-items-start">
                                <Image src={ball} alt='football' width={60} />
                                <div>
                                    <p className='fw-bold m-0'>FREE FITNESS TRAINING</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam culpa quod voluptates reprehenderit a placeat. Commodi fugit vero odit!</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start">
                                <Image src={shoe} alt='football' width={60} />
                                <div >
                                    <p className='fw-bold m-0'>CARDIO AND STRENGTH</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam culpa quod voluptates reprehenderit a placeat. Commodi fugit vero odit!</p>
                                </div>
                            </div>
                            <div className="redbtn">Read More <BsArrowRightShort size={25} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
