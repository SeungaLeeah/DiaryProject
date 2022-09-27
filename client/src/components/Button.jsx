import React, { memo } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    button{
        cursor: pointer;
        border: none;
        border-radius: 3px;
        background-color: #f6f6f6;

        padding:10px 20px;

        font-size: 18px;

        white-space: nowrap;
    }
`;

const MyButton = memo(({text, type, onClick}) => {
    
    return (
        <ButtonContainer>
            <button className={["Button", `button_${type}`].join(" ")} onClick={onClick}>{text}</button>
        </ButtonContainer>
    );
});

export default MyButton;