import { BiSolidChevronRight, BiSolidChevronLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useCallback } from 'react';
import Image from 'next/image';
import quote from '../../public/icons/quote.png'
import star from '../../public/icons/stars.svg'
import client from '../../public/images/client.png'


function Testimonial() {

    const swiperRef = useRef(null);

    const prevSlide = useCallback(() => {
        swiperRef.current?.swiper.slidePrev();
    }, [swiperRef]);

    const nextSlide = useCallback(() => {
        swiperRef.current?.swiper.slideNext();
    }, [swiperRef]);


    return (
        <section className="testimonial container">
            <div className="row d-flex">
                <div className="col-lg-8">
                    <p className="bolditalic text-uppercase" >OUR <span className="redtext"> TESTIMONIAL</span></p>
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

                <div className="row">
                    <div className="col-8">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={50}
                            slidesPerView={2}
                            className='mt-5'
                            loop
                        >
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <Image src={quote} alt='image' />
                                    <p className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='bolditalic m-0'>Randall Schwartz</p>
                                            <p className='m-0'>Women's Trainner</p>
                                        </div>
                                        <Image src={star} alt='stars' />
                                    </div>
                                    <Image src={client} alt='image' className='image' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <Image src={quote} alt='image' />
                                    <p className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='bolditalic m-0'>Randall Schwartz</p>
                                            <p className='m-0'>Women's Trainner</p>
                                        </div>
                                        <Image src={star} alt='stars' />
                                    </div>
                                    <Image src={client} alt='image' className='image' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <Image src={quote} alt='image' />
                                    <p className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='bolditalic m-0'>Randall Schwartz</p>
                                            <p className='m-0'>Women's Trainner</p>
                                        </div>
                                        <Image src={star} alt='stars' />
                                    </div>
                                    <Image src={client} alt='image' className='image' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <Image src={quote} alt='image' />
                                    <p className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='bolditalic m-0'>Randall Schwartz</p>
                                            <p className='m-0'>Women's Trainner</p>
                                        </div>
                                        <Image src={star} alt='stars' />
                                    </div>
                                    <Image src={client} alt='image' className='image' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <Image src={quote} alt='image' />
                                    <p className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dignissimos.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='bolditalic m-0'>Randall Schwartz</p>
                                            <p className='m-0'>Women's Trainner</p>
                                        </div>
                                        <Image src={star} alt='stars' />
                                    </div>
                                    <Image src={client} alt='image' className='image' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-4">
                        <div className="add-card">
                            <p className='bolditalic'>MASTER UPPER CUT</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial
