import React from 'react';
import Hero from '../components/Hero';
import RightSideBar from '../components/Sidebar/RightSideBar';
// import Blog from '../components/Blog/Blog';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className='blog'>
        <div className='blog_card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          consequuntur earum iure quisquam quasi, ex in quod adipisci voluptates
          ullam deserunt, obcaecati beatae nostrum sapiente minima sequi, vel
          amet! Ipsa maiores veniam commodi aliquid architecto impedit ducimus
          vero animi iure quia dolores, illo qui eligendi praesentium, soluta
          accusantium deleniti consectetur at iusto nihil. Quisquam quia
          provident, totam consequuntur dolorem, adipisci id architecto non
          tempora dolore repellat distinctio sunt debitis, perspiciatis
          obcaecati molestiae expedita consequatur nam nulla. Commodi ducimus
          cum pariatur ex voluptatum modi iure nisi quaerat, alias tempora
          porro, incidunt quos. Ducimus nihil itaque quas id atque nam hic qui?
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
