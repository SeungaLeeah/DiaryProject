import React, { memo } from 'react';
import {useNavigate, useSearchParams } from 'react-router-dom';

const Edit = memo(() => {
    const navigate = useNavigate();
    // setSearchParams는 searchParams를 변경시킬 수 있다.
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    console.log("id: ", id);

    const mode= searchParams.get("mode");
    console.log("mode : ", mode);
    return (
        <div>
            <h1>Edit</h1>
            <p>일기 수정 페이지입니다</p>
            <button onClick={()=> setSearchParams({who: "leeah"})}>Qs 변경</button>
            {/* 로그인이 안된 사용자가 로그인 후 사용 가능한 페이지로 갈때 -> 로그인 검사 -> 로그인이 안되었다면, 로그인 페이지로 강제이동 */}
            <button onClick={()=>{
                navigate('/');
            }}>Home으로 이동</button>

            <button 
                onClick={()=>{
                    navigate(-1);
            }}>뒤로가기</button>

        </div>
    );
});

export default Edit;