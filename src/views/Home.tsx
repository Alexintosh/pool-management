import React from 'react';
import styled from 'styled-components';
import MyLiquidity from '../components/Home/MyLiquidity';
import PrivatePools from '../components/Home/PrivatePools';

const HomeWrapper = styled.div`
    position: relative;
    padding: 32px 30px 0px 30px;

    @media screen and (max-width: 1024px) {
        padding: 32px 10px 0px 10px;
    }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <MyLiquidity />
            <PrivatePools />
        </HomeWrapper>
    );
};

export default Home;
