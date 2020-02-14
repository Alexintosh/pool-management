import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 32px 30px 0px 30px;
`

const Warning = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: var(--warning);
	height: 67px;
	border: 1px solid var(--warning);
	border-radius: 4px;
	padding-left: 26px;
`

const Message = styled.div`
	display: inline;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
`

const WarningIcon = styled.img`
	width: 22px;
	height: 26px;
	margin-righ: 26px;
	color: var(--warning)
`

const WarningMessage = () => {

    return (
        <Wrapper>
        	<Warning>
        		<WarningIcon src="WarningSign.svg" />
        		<Message>
		    		This is still beta software. Please use small amounts of funds to start. Please reach out in our
		    		<a> Discord Channel </a>
		    		for any questions or issues!
        		</Message>
        	</Warning>
        </Wrapper>
    );
};

export default WarningMessage;
