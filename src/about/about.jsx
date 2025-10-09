import React from 'react';
import "./about.css"

export function About() {
  return (
    <main className="bg-light text-dark">
        <div>
            <h2>This is a picture of me after writing some css</h2>
            <img src="placeholder.jpg"/>
            <hr />
            <p>
                In CrossWordPuzz, you race with other people online to solve the crossword puzzle of 
                the day. As you work on the puzzle, you can see the progress of others who started 
                around the same time as you and the leaderboards of that day's fastest solvers.
            </p>
            <p>
                CrossWordPuzz is a name that I made up. It wasn't taken in any top-level domain. 
                Regardless, I opted for .click because I am poor.
            </p>
            <hr /><hr />
            <p id="quote">
                "I hope to find a 3rd party API that can pull crossword puzzles for users to play, 
                but if I am unable to find one, I will put quotes on this page."
            </p>
            <p id="author">
                - Luke Suorsa
            </p>
        </div>
    </main>
  );
}