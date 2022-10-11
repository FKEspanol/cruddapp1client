import { useState, useEffect, createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { initialState, reducer } from './reducer';

export const ContextAPI = createContext(null);

function App() {
   const [currentState, dispatch] = useReducer(reducer, initialState);

   const [currentLink, setCurrentLink] = useState();
   useEffect(() => console.log(`welcome ${currentState.userInfo?.firstname}`))
   return (
      <ContextAPI.Provider value={{ currentLink, setCurrentLink, currentState, dispatch }}>
         <div className="App">
            <Header />
            <Main />
            {/* <Footer /> */}
         </div>
      </ContextAPI.Provider>
   );
}

export default App;
