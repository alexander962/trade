import 'animate.css/animate.min.css';

import type { NextPage } from 'next';
import React from 'react';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import cn from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={cn.wrapper}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Home;
