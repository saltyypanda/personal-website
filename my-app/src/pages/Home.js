import React, { useRef, useEffect } from "react";
import '../styles.scss'
import TypewriterComponent from "typewriter-effect";
import Typewriter from 'typewriter-effect/dist/core';

// var introduction = `
//     I am second-year software engineering major at the Rochester Institute of Technology.
//     I am an active member of RIT's Society of Software Engineers, or the SSE. I was the SSE's
//     Head of Talks for Fall 2023 semester, and I am Tech Head for Spring 2024 semester.
// `

var introduction = `
    Second-year software engineering major at the Rochester Institute of Technology.
`

function Home() {
    const codeTextRef = useRef(null);

    useEffect(() => {
        const codeTextElement = codeTextRef.current;

        var typewriter = new Typewriter(codeTextElement, {
            loop: true,
            delay: 75,
          });
          
          typewriter
            .pauseFor(2500)
            .typeString("hello world, i'm")
            .pauseFor(4000)
            .deleteChars(10)
            .pauseFor(500)
            .start();

        const handleAnimationEnd = () => {
            console.log("ended")
        };

        // Add event listener for animationend
        codeTextElement.addEventListener('animationend', handleAnimationEnd);

        // Cleanup the event listener when the component is unmounted
        return () => { 
            codeTextElement.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <>
            <div className="home-image-container">
                <div className="home-text">
                    <div className="d-inline">
                        <p className="code-text" ref={codeTextRef}></p>
                    </div>
                    <h1 className="name display-1">Tess Hacker</h1>
                    <p className="mt-4 lead text-white centered">{introduction}</p>
                </div>
                <div className="home-images">
                    <img
                        src="https://img2.wikia.nocookie.net/__cb20120830141031/adventuretimewithfinnandjake/images/4/4b/Princess_bubblegum_character.png"
                        alt="princess bubblegum!"
                    />
                </div>
            </div>
            {/* <div className="d-flex flex-col text-center justify-content-center w-50 mx-auto">
                <p className="mt-4 lead text-white centered">{introduction}</p>
            </div> */}
        </>
    );
}

export default Home;