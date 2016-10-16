import React    from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h3>Welcome username</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home/todo">Todo</Link></li>
        <li><Link to="/home/blog">blog</Link></li>
      </ul>
    </div>
  );
};

export default Home;
