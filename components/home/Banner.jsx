import Image from "next/image"
import Navbar from "./Navbar"
import curl from '../../public/images/curl.png'
import { BsArrowRightShort } from 'react-icons/bs'
import profiles from '../../public/images/profiles.png'


function Banner() {
    return (
        <section className="homebanner">
            <Navbar />
            <div className=" mt-5 container">
                <div className="row">
                    <div className="col-lg-7 col-sm-12 banner-text" data-aos="fade-right" data-aos-duration="900">
                        <p className="redtext bolditalic">WELCOME TO ORCA</p>
                        <p className="bolditalic bigtext">EVERY GREAT</p>
                        <p className="bolditalic mediumtext">JOURNEY STARTS WITH ONE STEP!</p>
                        <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vel dolores illo quis maxime facere et consectetur placeat officiis soluta? Et nihil sint, asperiores quas, cumque eveniet distinctio beatae quo provident, saepe tempora quibusdam? Quam odit fugit, tempora laboriosam ipsum similique odio repellat deleniti voluptas, officiis blanditiis quaerat est quae.</p>
                        <Image src={curl} alt="arrow" className="my-5  mx-4" />
                        <div className="blackpill">
                            <Image src={profiles} alt="profiles" />
                            <p>Join over <b>4,000+</b></p>
                            <button className="redbtn">Apply Now <BsArrowRightShort size={25} /></button>
                        </div>
                        <div className="borderpill"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
