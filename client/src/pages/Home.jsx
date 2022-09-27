import React, { memo, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = memo(() => {

    const [nowDate, setNowDate]= useState(new Date());
    const mainText = `${nowDate.getFullYear()}년 ${nowDate.getMonth() +1} 월`;

    const increaseMonth = ()=>{
        setNowDate(
            new Date(nowDate.getFullYear(), nowDate.getMonth()+1, nowDate.getDate())
        );
    };
    const decreaseMonth = ()=>{
        setNowDate(
            new Date(nowDate.getFullYear(), nowDate.getMonth()-1, nowDate.getDate())
        );
    }

    return (
        <div>
            <Header 
            mainText={mainText}
            leftBtn={<Button text={"<"} onClick={decreaseMonth}/>}
            rightBtn={<Button text={">"} onClick={increaseMonth}/>}
            />
        </div>
    );
});

export default Home;