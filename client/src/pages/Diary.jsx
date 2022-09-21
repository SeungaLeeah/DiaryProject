import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getList } from '../slices/EmotionDiarySlice';

const Diary = memo(() => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getList());
    }, [dispatch]);
    
    return (
        <div>
            
            <h1>Diary</h1>
            <p>일기 상세 페이지입니다</p>
        </div>
    );
});

export default Diary;
