import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import cn from '../styles/Home.module.css';
import 'animate.css/animate.compat.css';

const Home: NextPage = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }
  }, [user]);

  return (
    <div className={cn.wrapper}>
      <Header user={user} setUser={setUser} />
      <Main user={user} />
      <Footer />
    </div>
  );
};

export default Home;
