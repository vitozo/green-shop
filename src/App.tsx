import React from "react";
import s from "./App.module.css"

import Header from "./components/Header/Heder";
import InfoForm from "./components/InfoForm/InfoForm";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";




const App: React.FC = () => {
    return (
        <div className={s.container}>
            <Header/>
            <InfoForm/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
