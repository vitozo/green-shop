import React from "react";
import s from "./App.module.css"
import Header from "./Components/Header/Heder";
import Footer from "./Components/Footer/Footer";
import InfoForm from "./Components/InfoForm/InfoForm";
import Contacts from "./Components/Contacts/Contacts";



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
