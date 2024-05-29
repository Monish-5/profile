import React, {createContext,useContext, useEffect,useReducer, useState,} from "react";
import ReactDOM from "react-dom/client";

import { useRef } from "react";
import HeaderPage from "./component/headerpage/headerPage";
import MiddelPage from "./component/middelPage/MiddelPage";
import FooterPage from "./component/footerpage/FooterPage";

function MasterPage() {
  return (
    <>
      <div >
        <HeaderPage />
        <MiddelPage />
        
        <FooterPage />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MasterPage />
  </React.StrictMode>
);
