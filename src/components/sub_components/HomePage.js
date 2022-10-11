import React, { useContext } from 'react';
import { ContextAPI } from '../../App';

const HomePage = () => {
   const { currentState, dispatch } = useContext(ContextAPI);
   return (
      <h1>
         Welcome {currentState.userInfo?.firstname}
      </h1>
   )
}

export default HomePage