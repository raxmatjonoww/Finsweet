import React from 'react';
import HomePage from './containers/HomePage/container/HomePage';
import BlogPage from './containers/BlogPage/container/BlogPage';
import BlogPost from './containers/BlogPost/container/BlogPost';
import AboutPage from './containers/AboutPage/container/AboutPage';
import Business from './containers/Business/container/Business';
import Startup from './containers/Startup/container/Startup';
import Economy from './containers/Economy/container/Economy';
import Floyd from './containers/Floyd/container/Floyd';
import Jenny from './containers/Jenny/container/Jenny';
import Diana from './containers/Diana/container/Diana';
import Leslie from './containers/Leslie/container/Leslie'
import Technology from './containers/Technology/container/Technology';
import MyLayout from './components/Layout/MyLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/post' element={<BlogPost/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/startup' element={<Startup/>}/>
          <Route path='/floyd' element={<Floyd/>}/>
          <Route path='/jenny' element={<Jenny/>}/>
          <Route path='/leslie' element={<Leslie/>}/>
          <Route path='/diana' element={<Diana/>}/>
          <Route path='/economy' element={<Economy/>}/>
          <Route path='/technology' element={<Technology/>}/>

        </Routes>
        
      </MyLayout>
    </div>
  );
}

export default App;
