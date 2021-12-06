import React from "react";
import s from "./App.module.css"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Heder";


const App:React.FC = () => {
  return (
    <div className={s.container}>
      <Header/>
        <Footer/>
    </div>
  );
}

export default App;
