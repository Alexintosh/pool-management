import React, { Component } from 'react';
import styled from 'styled-components';
import ChartPanel   from '../components/Pool/ChartPanel';
import AddRemovePanel   from '../components/Pool/AddRemovePanel';
import InfoPanel from '../components/Pool/InfoPanel';

const PoolViewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 27px 25px 0px 25px;
`

const InfoPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    div {
    }
`

const BalancesTable = styled.div`
`

const SwapsTable = styled.div`
`

const Pool = () => {

    return (
        <PoolViewWrapper>
        	<ChartPanel />
        	<AddRemovePanel />
            <InfoPanelWrapper>
            	<InfoPanel text="$ 8,024,093.89" subText="Liquidity" />
                <InfoPanel text="$ 1,252,425.65" subText="Trade Volume (24hr)" />
                <InfoPanel text="0.1%" subText="Pool Swap Fee" />
                <InfoPanel text="10.00%" subText="My Pool Share" />
            </InfoPanelWrapper>
            <BalancesTable />
            <SwapsTable />
        </PoolViewWrapper>
    );
};

export default Pool;
