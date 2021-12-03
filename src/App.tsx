import * as React from "react";
import s from "./App.module.css"
import Header from "./Components/Header/Heder";




const App:React.FC = () => {
  return (
    <div className={s.container}>
      <Header/>
    </div>
  );
}

export default App;
