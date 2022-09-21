import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages 
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import GlobalStyles from './GlobalStyles';

// components
import MyButton from './components/MyButton';

const AppContainer = styled.div`
    @media (min-width: 650px) {
      width: 640px;
    }
    @media (max-width: 650px) {
      width: 90vw;
    }

    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
`;
const App = memo(() => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <div>
      <GlobalStyles/>
      <AppContainer>
      <h1>App.jsx</h1>

      <MyButton/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/diary' element={<Diary/>}/>
      </Routes>
      </AppContainer>
    </div>
  );
});

export default App;
