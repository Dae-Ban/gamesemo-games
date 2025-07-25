import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {


    return (
        <div className="container">
            <h1>홈 페이지</h1>
            <Link to="/game">
                <button>게임 목록 보기</button>
            </Link>
        </div>
    );
};

export default HomePage;

