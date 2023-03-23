import React from 'react';

import './App.css';
import Hook1 from './Components/Hook1/Effect';
import CompoonentC from './CompoonentC';
 export const  UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      <h1>ReactHookExamples</h1>
      <UserContext.Provider value={"usercontext hook"}>
      <Hook1></Hook1>
      <CompoonentC></CompoonentC>
      </UserContext.Provider>
    
    </div>
  );
}

export default App;
