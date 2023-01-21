import React from "react";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Child from './Componants/Child.jsx'
// import CheckStatus from './Componants/ConditionalRendering/CheckStatus.jsx';
// import PrepBytes from './Componants/ConditionalRendering/PrepBytes.jsx';

import FirstComp from "./Componants/Routing/FirstComp";
import FifthComp from "./Componants/Routing/FifthComp";
import ThirdComp from "./Componants/Routing/ThirdComp";
import FourthComp from "./Componants/Routing/FourthComp";
import SecondComp from "./Componants/Routing/SecondComp";
import PageNotFound from "./Componants/Routing/PageNotFound";

import UseState from "./Componants/Hookss/UseState";
import UseEffect from "./Componants/Hookss/UseEffect";


// import { Route } from "react-router-dom";
const App = () => {
  // const Clicked =()=>{
  //   alert("Button is Clicked");
  // }
  // return (<div className="Div">
  //   {/* <Child/>
  //   <h1>Hello Rushikesh</h1>
  //   <br/>
  //   <button onClick={Clicked}>Ckick me!! </button>
  //   <PrepBytes/>
  //   <CheckStatus status={true}/>*/}
  //   {/* <FirstComp/> */}
  // </div>)

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/"  element={<FirstComp />} />
  //       <Route path="/second"  element={<SecondComp />} />
  //       <Route path="/third" element={<ThirdComp />} />
  //       <Route path="/fourth" element={<FourthComp />} />
  //       <Route path="/fifth" element={<FifthComp />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  // return(<UseState/>);
  return(<UseEffect/>);
};

export default App;
