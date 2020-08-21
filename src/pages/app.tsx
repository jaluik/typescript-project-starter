import React, { FC } from 'react';
import Header from '@components/header';
import './app.less';

const App: FC = () => {
  return (
    <div className="App">
      <Header name="aa" />
      Hello World
    </div>
  );
};

export default App;
