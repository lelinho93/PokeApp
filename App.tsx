import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/pages/Home';


function App(){
  return (
  <Provider store={store}>
    <Home></Home>
  </Provider>
  )}

export default App;
