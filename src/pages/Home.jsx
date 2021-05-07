import React from 'react';
import Hero from '../components/Hero';
import RightSideBar from '../components/Sidebar/RightSideBar';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className='blog'>
        <div className='blog_card'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          illo odio unde veniam voluptates? Cum error modi sint. Ab aspernatur
          cum cumque dolorem enim exercitationem, hic illum molestiae nihil nisi
          officia quia quibusdam, quidem tempora tempore temporibus voluptatem!
          Doloribus fugit ipsum quos voluptate voluptatibus. Accusamus aliquid
          aperiam consequatur cum dignissimos dolore dolorum et exercitationem
          explicabo, fugit incidunt inventore libero magnam minima neque nobis,
          officia provident quaerat qui ratione reiciendis rem sint sit
          temporibus, veniam? At explicabo laboriosam magni molestias nam
          pariatur possimus sapiente soluta, vel voluptate? Autem commodi
          doloremque, eligendi, et eum facilis inventore itaque mollitia, natus
          neque rem totam?
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
