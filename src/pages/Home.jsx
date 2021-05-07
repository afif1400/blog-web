import React from "react";
import Hero from "../components/Hero";
import "../styles/home.css";
import PopularPost from "../components/Sidebar/PopularPost";
import Explore from "../components/Sidebar/Explore";
import Newsletter from "../components/Sidebar/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="blog">
        <div className="blog_card">
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
        <div className="right_side_bar">
          <div className="popular_post">
            <h5 className="title">Popular Post</h5>
            <PopularPost imgUrl="https://static.toiimg.com/photo/72975551.cms" />
            <PopularPost imgUrl="https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg" />
            <PopularPost imgUrl="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg" />
          </div>
          <div className="popular_post explore_topic">
            <h5 className="title">Explore Topic</h5>
            <Explore />
          </div>
          <div className="popular_post newsletter_container">
            <h5 className="title">Newsletter</h5>
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
