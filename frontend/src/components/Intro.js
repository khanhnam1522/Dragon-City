import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Intro = () => {
    return (
        <div>
            <header className="main_menu single_page_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link to='/#sectionInfo' className="navbar-brand"> <img src="img/logo.png" alt="logo" style={{width: "65px", height: "65px"}}/> </Link>

                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <section className="banner_part" id={'sectionInfo'}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 col-md-8">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h1>Dragon City</h1>
                                    <h4 style={{marginBottom: "2.0em"}}>Welcome to the world of the dragons. </h4>
                                    <Link to='/#sectionsignup' className="btn_1">Join us today</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us section_padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-lg-6 col-xl-6">
                            <div className="learning_img">
                                <img src="img/about_img.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <div className="about_us_text">
                                <h2>Let's hear about the story of the dragons</h2>
                                <p> I am the Great Dragon Kilgharrah. I take it you are here because you wish to know more about dragons. I believe I can be of some use in that department. We are not all alike, you see. Just like you humans, we have our differences. Different strengths and abilities, different personalities and appearances, different beliefs and legends, and we come from different areas of the world. I myself am a British dragon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro;
