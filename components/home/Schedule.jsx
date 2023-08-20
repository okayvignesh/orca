import Image from "next/image"
import football from '../../public/images/about-video.png'

function Schedule() {
    return (
        <section className="schedules container">
            <div className="d-flex justify-content-center">
                <div className="col-lg-6">
                    <p className="bolditalic">OUR <span className="redtext">TRAINING</span> SCHEDULE</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe voluptates omnis accusamus aliquam. Quia nemo temporibus dolore? Animi, quidem.</p>
                </div>
            </div>
            <div className="table-container">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>
                                Routine
                            </th>
                            <th>10 am</th>
                            <th>12 am</th>
                            <th>02 am</th>
                            <th>05 am</th>
                            <th>07 am</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Sunday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Monday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tuesday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Wednesday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Thursday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Friday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Saturday
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                            <td>
                                Cycling<br />
                                10 am - 11 am
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Image src={football} alt="image" width={300} height={600} />
            </div>
        </section>
    )
}

export default Schedule
