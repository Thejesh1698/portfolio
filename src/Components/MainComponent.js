import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";

function MainComponent() {

    return (
        <div className="outer-body-wrapper">
            <div className="outer-wrapper">
                <div className="main-wrapper">
                    {/*<Header/>*/}
                    <LandingPage/>
                    <div className="sidebar-editor-footer full-box">
                        <div className="sidebar-editor full-box">
                            <DetailsPage/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;