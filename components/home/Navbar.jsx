import { BsArrowRightShort } from 'react-icons/bs'
import menu from '../../public/icons/menu.svg'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <section className="navbar navbar-expand-lg">
            <div class="container d-flex justify-content-between">
                <a class="navbar-brand" href="#">Logo</a>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="d-flex align-items-center nav-center">
                    <button className='clearbtn'>
                        <Image src={menu} alt='menu-item' />
                        <p >MENU</p>
                    </button>
                    <span></span>
                    <Link href='/'>TRAINING</Link>
                </div>

                <div className="d-flex align-items-center">
                    <div className="nav-item">
                        <p className="text-uppercase fst-italic fw-bold">Call Us Free</p>
                        <p>+65 3259 36523</p>
                    </div>
                    <div className="nav-item">
                        <p className="text-uppercase fst-italic fw-bold">Address</p>
                        <p>123, New Lenox Chicago, IL 60606</p>
                    </div>
                    <button className="whitebtn">GET IN TOUCH <BsArrowRightShort size={25} /></button>
                </div>



            </div>
        </section>
    )
}

export default Navbar
