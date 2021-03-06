import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import React, { createContext } from 'react';
import Store from '../store/store';

const store = new Store();

export const Context = createContext({
  store,
});

function MyApp({ Component, pageProps }) {
  return (
    <Context.Provider value={{ store }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
