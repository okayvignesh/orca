import Image from "next/image"
import news1 from '../../public/images/news1.png'
import news2 from '../../public/images/news2.png'
import news3 from '../../public/images/news3.png'

function News() {
    return (
        <section className="orca-news container">
            <div className="col-lg-5 col-sm-12 m-auto">
                <p className="bolditalic text-uppercase">LATEST <span className="redtext">NEWS</span> from orca</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore nesciunt sit recusandae libero dignissimos!</p>
            </div>
            <div className="d-flex justify-content-center mt-5 row" data-aos="fade-up" data-aos-duration="800" >
                <div className="news-card">
                    <Image src={news1} alt="image" />
                    <div className="date-tag">Feb 10, 2022</div>
                    <p className="my-2">By : Sword Joy <span className="redtext">Karate</span></p>
                    <p className="fw-bold">THE UPCOMING WBC CHAMPION SHIPS 2022 IN FEB</p>
                </div>
                <div className="news-card">
                    <Image src={news2} alt="image" />
                    <div className="date-tag">Feb 10, 2022</div>
                    <p className="my-2">By : Sword Joy <span className="redtext">Karate</span></p>
                    <p className="fw-bold">THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORIES</p>
                </div>
                <div className="news-card">
                    <Image src={news3} alt="image" />
                    <div className="date-tag">Feb 10, 2022</div>
                    <p className="my-2">By : Sword Joy <span className="redtext">Karate</span></p>
                    <p className="fw-bold">EFFECTIVE STRATEGIES AND TIPS FROM THE BEST</p>
                </div>
            </div>
        </section>
    )
}

export default News
