import React from 'react';
import Hero from '../components/Hero';
import RightSideBar from '../components/Sidebar/RightSideBar';
import Blog from '../components/Blog/Blog';
import '../styles/home.css';
import PopularPost from '../components/Sidebar/PopularPost';
import Explore from '../components/Sidebar/Explore';
import Newsletter from '../components/Sidebar/Newsletter';
import Underline from '../assets/images/components/underline';

const HomePage = () => {
  return (
    <div className='Home'>
      <Hero />
      <div className='blog'>
        <div className='blog_card'>
          <Blog />
        </div>
        <div className='right_side_bar'>
          <div className='popular_post'>
            <h5 className='title'>Popular Post</h5>
            <Underline />
            <PopularPost imgUrl='https://static.toiimg.com/photo/72975551.cms' />
            <PopularPost imgUrl='https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg' />
            <PopularPost imgUrl='https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg' />
          </div>
          <div className='popular_post explore_topic'>
            <h5 className='title'>Explore Topic</h5>
            <Underline />
            <Explore />
          </div>
          <div className='popular_post newsletter_container'>
            <h5 className='title'>Newsletter</h5>
            <Underline />
            <Newsletter />
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
