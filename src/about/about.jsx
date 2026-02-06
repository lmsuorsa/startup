import React from 'react';

export function About() {
  return (
    <main class="container-fluid bg-secondary text-center">
      <div class="about-container">
        <div id="picture"><img src="placeholder.jpg" alt="random" /></div>
        <div class="about-text">
          <p>
            As seen in Pirate's of the Caribbean, Liar's Dice is the game of choice among scallywags at sea. 
            To put it simply, you can raise the number of dice, the value of the dice, or call out the last man 
            for being a dirty liar and empty his cup! It's simple, engaging, and anyone can win if they play 
            their hand right, making it fun for everyone involved. Try your luck (without gambling decades of 
            service in Davy Jone's crew!)
          </p>
          <p>
            Each player starts with 5 dice. At the beginning of a round, players roll their dice to get values. 
            With each turn, a player must either up the ante on the number or value of dice. For example, if 
            the current bet was "two 3's", the next call could be "three 3's" (raising the number of dice) or "two 4's" 
            (raising the value of the dice). If a player believes the current bet is not in the combined pool of dice, 
            they can call the bluff, ending the round. Everyone shows their dice. If the accuser is right, the better 
            loses a die. If the better is right, the accuser loses a die. Play until only one player remains.
          </p>
        </div>
      </div>
    </main>
  );
}