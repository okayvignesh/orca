import Image from 'next/image'
import ball from '../../public/images/football.png'
import shoe from '../../public/images/shoes.png'
import { BsArrowRightShort } from 'react-icons/bs'


function About() {
    return (
        <section className="about-orca">
            <div className="container ">
                <div className="row ">
                    <div className="col-6">
                        hello
                    </div>
                    <div className="col-lg-6 about-text ">
                        <div>
                            <p className="bolditalic">ABOUT <span className="redtext">ORCA</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi inventore qui sequi voluptate nobis fuga aut hic unde, autem iure et molestias expedita ab, nostrum repellat molestiae. Sit, quos.</p>
                            <div className="d-flex align-items-center">
                                <Image src={ball} alt='football' width={60} />
                                <div>
                                    <p className='fw-bold m-0'>FREE FITNESS TRAINING</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam culpa quod voluptates reprehenderit a placeat. Commodi fugit vero odit!</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
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
