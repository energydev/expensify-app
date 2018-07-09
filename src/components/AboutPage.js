import React from "react";

export const AboutPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">About</h1>
            </div>
        </div>
        <div className="content-container">
            <p>We're excited that you're visiting our demo React web application for managing expenses!
               Please, feel free to play around with managing expenses using this demo application.
               As this is a demo application, please, only enter demo data. Such demo data may be
               removed at some point in the future and could possibly be seen by system administrators.
            </p>
            <p>The code for this React application is available at&nbsp;
                <a className="external-link"
                    target="_blank"
                    href="https://github.com/energydev/expensify-app">https://github.com/energydev/expensify-app
                </a>
            </p>
            .
        </div>
    </div>
);

export default AboutPage;