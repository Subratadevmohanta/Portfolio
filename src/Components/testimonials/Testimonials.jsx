import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avater1.png'
import AVTR2 from '../../assets/avater2.png'
import AVTR3 from '../../assets/avater3.png'
import AVTR4 from '../../assets/avater4.png'
import AVTR5 from '../../assets/avater5.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_-container"
                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Sumon Mohanta" />
                    </div>
                    <h5 className='client__name'>Sumon Mohanta</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae at ratione quos dignissimos ipsam dolores accusantium officia fugiat nobis harum dolor fugit quis voluptas quibusdam, magni nesciunt facilis aspernatur.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Sumon Mohanta" />
                    </div>
                    <h5 className='client__name'>Subhas Mohanta</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae at ratione quos dignissimos ipsam dolores accusantium officia fugiat nobis harum dolor fugit quis voluptas quibusdam, magni nesciunt facilis aspernatur.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Sumon Mohanta" />
                    </div>
                    <h5 className='client__name'>Ujjal Mohanta</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae at ratione quos dignissimos ipsam dolores accusantium officia fugiat nobis harum dolor fugit quis voluptas quibusdam, magni nesciunt facilis aspernatur.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Sumon Mohanta" />
                    </div>
                    <h5 className='client__name'>Simul Mohanta</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae at ratione quos dignissimos ipsam dolores accusantium officia fugiat nobis harum dolor fugit quis voluptas quibusdam, magni nesciunt facilis aspernatur.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR5} alt="Sumon Mohanta" />
                    </div>
                    <h5 className='client__name'>Rithu Mohanta</h5>
                    <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae at ratione quos dignissimos ipsam dolores accusantium officia fugiat nobis harum dolor fugit quis voluptas quibusdam, magni nesciunt facilis aspernatur.</small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials