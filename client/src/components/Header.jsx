import React, { memo } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 20px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

    &>div{
        display: flex;
    }
    .main_text{
        width: 50%;
        font-size: 25px;
        justify-content: center;
    }
    .left_btn{
        width: 25%;
        justify-content: start;
    }
    .right_btn{
        width: 25%;
        justify-content: end;
    }
`;

const Header = memo(({mainText, leftBtn, rightBtn}) => {
    return (
        <HeaderContainer>
            <div className='left_btn'>{leftBtn}</div>
            <div className='main_text'>{mainText}</div>
            <div className='right_btn'>{rightBtn}</div>
        </HeaderContainer>
    );
});

export default Header;