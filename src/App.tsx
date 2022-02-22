import React from "react";
import s from "./App.module.css"
import Header from "./components/Header/Header";
import InfoForm from "./components/InfoForm/InfoForm";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ContainerFlowers from "./components/DirectoryFlowers/ContainerFlowers";
import MainBanner from "./components/MainBanner/MainBanner";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";



const App: React.FC = () => {

    return (
        <div className={s.container}>
            <Header/>
            <MainBanner/>
            <ContainerFlowers />
            <InfoForm/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
