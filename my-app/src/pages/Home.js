import React, { useRef, useEffect } from "react";
import '../styles.scss'
import Typewriter from 'typewriter-effect/dist/core';
import introductions from "../data/introductions";
import IconBar from "../components/IconBar";

var introduction = `
    Second-year software engineering major at the Rochester Institute of Technology.
`

function Home() {
    const codeTextRef = useRef(null);

    useEffect(() => {
        const codeTextElement = codeTextRef.current;
    
        const typewriter = new Typewriter(codeTextElement, {
            loop: true,
            strings: introductions,
            delay: 100,
            pauseFor: 5000,
            autoStart: true
        });
    
        return () => {
            // Clean up the typewriter instance when the component unmounts
            typewriter.stop();
        };
        }, []); // Empty dependency array ensures this effect runs only once on mount
        

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="home-container">
                <div className="home-child text-white">
                    <p className="code-text" ref={codeTextRef}></p>
                    <h1 className="display-1">Tess Hacker</h1>
                    <h3 className="mt-4 lead">{introduction}</h3>
                    <IconBar className={"mt-5"}/>
                </div>
                <div className="home-child">
                    {/* <img
                        src="https://img2.wikia.nocookie.net/__cb20120830141031/adventuretimewithfinnandjake/images/4/4b/Princess_bubblegum_character.png"
                        alt="princess bubblegum!"
                    /> */}
                    <p className="mt-4 lead text-white">
                        I began my software engineering journey in my first year of college
                        at RIT, just learning <em>Hello, World!</em> in Python. One year later,
                        and I am just as in love with programming as I was during that very first class.
                        <br/><br/>
                        Below are links to my GitHub, LinkedIn, and email. Feel
                        free to shoot me a message. On the right of the top navbar are links to other
                        pages in this website. Thank you for being here!
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;