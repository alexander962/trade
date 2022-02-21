import React, { useContext, useEffect, useState } from 'react';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import cn from '../styles/Home.module.css';
import { Context } from './_app';

const Home = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className={cn.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
