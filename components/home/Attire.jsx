import { BiSolidChevronRight, BiSolidChevronLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useCallback } from 'react';
import attire from '../../public/images/attire.png'
import Image from 'next/image';

function Attire() {

    const swiperRef = useRef(null);

    const prevSlide = useCallback(() => {
        swiperRef.current?.swiper.slidePrev();
    }, [swiperRef]);

    const nextSlide = useCallback(() => {
        swiperRef.current?.swiper.slideNext();
    }, [swiperRef]);

    return (
        <section className="attire container">
            <div className="row d-flex">
                <div className="col-lg-8">
                    <p className="bolditalic text-uppercase" >OUR <span className="redtext">attire</span></p>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus quos facilis molestiae officiis consequatur numquam accusamus sapiente, quo eos.</p>
                </div>
                <div className="col-lg-4 align-self-end">
                    <div className="d-flex justify-content-end">
                        <button className='borderbtn' onClick={prevSlide}>
                            <BiSolidChevronLeft size={30} fill='red' />
                        </button>
                        <button className="borderbtn" onClick={nextSlide}>
                            <BiSolidChevronRight size={30} fill='red' />
                        </button>
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={3}
                    className='mt-5'
                    loop
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="attire-item">
                            <Image src={attire} alt='image' />
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default Attire
