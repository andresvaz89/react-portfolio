/*

import React from 'react';
import './Testimonials.css';
import billGates from '../assets/bill gates.jpg';
import elonMusk from '../assets/Elon Musk.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    id: 1,
    avatar: billGates,
    name: 'Bill Gates',
    review: 'I would love Andrés to revive Internet Explorer'
  },
  {
    id: 2,
    avatar: elonMusk,
    name: 'Elon Musk',
    review: "I wish Andrés could refactor Twitter's code"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from peers teachers & employers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Bill Gates" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

*/
