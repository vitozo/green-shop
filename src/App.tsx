import * as React from "react";
import s from "./App.module.css"
import Header from "./components/Header/Heder";



const App:React.FC = () => {
  return (
    <div className={s.body}>
      <Header/>
    </div>
  );
}

export default App;
