import React from 'react';
import PopularPost from './PopularPost';
import Explore from './Explore';
import Newsletter from './Newsletter';
import Underline from '../../assets/images/components/underline';
import RecentPost from './RecentPost';
import { Chip } from '@material-ui/core';
import '../../styles/recentpost.css';

const RightSideBar = () => {
  const tags = [1, 2, 3, 4, 5];
  return (
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
      <div className='popular_post recent_post'>
        <h5 className='title'>Recent Post</h5>
        <Underline />
        <RecentPost />
      </div>
      <div className='popular_post tags'>
        <h5 className='title'>Tag Clouds</h5>
        <Underline />
        {tags.map(() => (
          <Chip label='# Custom' variant='outlined' />
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
