import React, { useRef } from "react";
import '../styles.scss'
import Typewriter from 'typewriter-effect/dist/core';
import introductions from "../data/introductions";
import IconBar from "../components/IconBar";

// var info = `
//     I am an active member of RIT's Society of Software Engineers, or the SSE. I was the SSE's
//     Head of Talks for Fall 2023 semester, and I am Tech Head for Spring 2024 semester.
// `

var introduction = `
    Second-year software engineering major at the Rochester Institute of Technology.
`

function Home() {
    const codeTextRef = useRef(null);

    const codeTextElement = codeTextRef.current;

    new Typewriter(codeTextElement, {
        loop: true,
        strings: introductions,
        delay: 100,
        pauseFor: 5000,
        autoStart: true
        });

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="home-image-container">
                <div className="home-text">
                    <p className="code-text" ref={codeTextRef}></p>
                    <h1 className="display-1">Tess Hacker</h1>
                    <p className="mt-4 lead text-white centered">{introduction}</p>
                </div>
                <div className="home-images">
                    <img
                        src="https://img2.wikia.nocookie.net/__cb20120830141031/adventuretimewithfinnandjake/images/4/4b/Princess_bubblegum_character.png"
                        alt="princess bubblegum!"
                    />
                </div>
            </div>
            {/* <div className="mt-5 d-flex flex-col text-center justify-content-center w-50 mx-auto">
                <h2>More about me</h2>
                <p className="mt-4 lead text-white centered">{info}</p>
            </div> */}
            <IconBar className={"mt-3"}/>
        </div>
    );
}

export default Home;