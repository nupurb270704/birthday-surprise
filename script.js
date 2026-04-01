const message = `Happy Birthday, my love ❤️

I don’t even know where to begin, because words never feel enough when it comes to you. But today is special, because it’s the day the most amazing person came into this world — the person who unknowingly changed my life in the most beautiful way.

I still remember how life felt before you… and then you came in, and everything just became brighter. My days became happier, my heart felt lighter, and suddenly there was so much more laughter, joy, and warmth in my life. You didn’t just enter my life, you made it more meaningful, more alive.

You are truly so special to me — in ways I can’t fully explain. Your smile, your presence, your silly moments, the way you make me feel safe and loved… everything about you is something I cherish deeply. I’m so grateful to have you, and I thank God every day for bringing you into my life.

On your birthday, I just want to wish you all the happiness and success in the world. May you achieve everything you dream of and more. I pray that you are always healthy, fit, cute, handsome, smiling, and as jolly as you are right now — because that’s the version of you I fell in love with.

And I hope life gives us countless more moments together — more laughter, more memories, more love, and a beautiful journey of togetherness ahead.

Happy Birthday once again, my love. You mean everything to me ❤️
`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  } else {
    startConfetti();
  }
}

function startConfetti() {
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 1000);
}

typeWriter();