import React, { memo } from 'react';
import styled from 'styled-components';

// slice
import {postItem} from '../slices/EmotionDiarySlice';

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

const MyButton = memo(() => {
    return (
        <ButtonContainer>
            <button>버튼</button>
        </ButtonContainer>
    );
});

export default MyButton;