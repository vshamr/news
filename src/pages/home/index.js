import {Link} from "react-router-dom";

import './styles.scss';

const Home = () => (
    <div className="wrapper">
        <Link to={'/latest-news'}>
            <h1 className="main-title">Front-end news</h1>
        </Link>
    </div>
);

export default Home;