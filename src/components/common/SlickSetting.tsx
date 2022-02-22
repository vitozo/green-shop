import React from "react";
import Slider from "react-slick";
import s from "../MainBanner/css/MainBanner.module.css";
import bannerPic from "../../images/content/main-banner1.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SlickSetting = () => {
    const settings = {
        arrows: false,
        dots: true,
        slideToScroll: 1,
        slidesToShow: 1,
        autoplaySpeed: 500
    };
    return (
        <Slider {...settings}>
            <div>
                <div className={s.mainBanner}>
                    <div className={s.leftCol}>
                        <div className={s.supTitle}>
                            Welcome to GreenShop
                        </div>
                        <h1 className={s.title}>
                            Let’s Make a Better <span className={s.titleGreen}>Planet</span>
                        </h1>
                        <div className={s.text}>
                            <p>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use our
                                plants to
                                create an unique Urban Jungle. Order your favorite plants!
                            </p>
                        </div>
                        <div className={s.button}>
                            <a className={s.btn}>
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <div className={s.rightCol}>
                        <div className={s.image}>
                            <img src={bannerPic} className={s.img} alt="Banner picture"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={s.mainBanner}>
                    <div className={s.leftCol}>
                        <div className={s.supTitle}>
                            Welcome to GreenShop
                        </div>
                        <h1 className={s.title}>
                            Let’s Make a Better <span className={s.titleGreen}>Planet</span>
                        </h1>
                        <div className={s.text}>
                            <p>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use our
                                plants to
                                create an unique Urban Jungle. Order your favorite plants!
                            </p>
                        </div>
                        <div className={s.button}>
                            <button className={s.btn}>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                    <div className={s.rightCol}>
                        <div className={s.image}>
                            <img src={bannerPic} className={s.img} alt="Banner picture"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={s.mainBanner}>
                    <div className={s.leftCol}>
                        <div className={s.supTitle}>
                            Welcome to GreenShop
                        </div>
                        <h1 className={s.title}>
                            Let’s Make a Better <span className={s.titleGreen}>Planet</span>
                        </h1>
                        <div className={s.text}>
                            <p>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use our
                                plants to
                                create an unique Urban Jungle. Order your favorite plants!
                            </p>
                        </div>
                        <div className={s.button}>
                            <button className={s.btn}>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                    <div className={s.rightCol}>
                        <div className={s.image}>
                            <img src={bannerPic} className={s.img} alt="Banner picture"/>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
};

export default React.memo(SlickSetting);