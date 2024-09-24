import React from 'react';
import MainSection from './MainSection';
import Header from './Header';
import Footer from './Footer';
import Expert from './Expert'
import Corousel from './Corousel';
import Learner from './Learner';

// import Header from './Header'
const LandingPage=()=>{
    
    return<div>
        <Header/>
        <MainSection/>
        {/* <Expert/> */}
        <Learner/>
        <Corousel/>
        <Footer/>
    </div>
}
export default LandingPage;