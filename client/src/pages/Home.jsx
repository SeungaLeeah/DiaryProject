import React, { memo, useState } from 'react';

const Home = memo(() => {

    const [nowDate, setNowDate]= useState(new Date());
    console.log(nowDate)

    return (
        <div>
            
        </div>
    );
});

export default Home;