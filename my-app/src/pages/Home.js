import React from "react";
import '../styles.scss'

function Home() {
    return (
        <>
            <div className="home-image-container">
                <div className="home-text">
                    <div className="d-inline">
                        <p className="code-text">hello world, i'm</p>
                    </div>
                    <h1 className="name display-1">Tess Hacker</h1>
                    <p className="mt-4 lead">A second-year software engineering major at the Rochester Institute of Technology</p>
                </div>
                <div className="home-images">
                    <img
                        src="https://img2.wikia.nocookie.net/__cb20120830141031/adventuretimewithfinnandjake/images/4/4b/Princess_bubblegum_character.png"
                        alt="princess bubblegum!"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;