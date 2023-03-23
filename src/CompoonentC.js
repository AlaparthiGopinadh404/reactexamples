import React from 'react';
import { UserContext } from './App';
const CompoonentC = ()=> {
  return (
    <div>
        <UserContext.Consumer>
        {/* <h1>CompoonentC</h1> */}
        {value=><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default CompoonentC