"use client";

import { useState } from "react";

const notes = [
  {
    icon: "01",
    title: "For the competitor",
    copy: "Your discipline, determination, and ability to keep pushing are genuinely inspiring. The medals are impressive—but the work behind them is even more impressive.",
  },
  {
    icon: "02",
    title: "For the friend",
    copy: "You bring a calm, funny, unmistakably Daniel energy wherever you go. Life is simply better with you in the group and in the memories.",
  },
  {
    icon: "03",
    title: "For the year ahead",
    copy: "May this year bring bigger wins, louder laughs, new adventures, and the confidence to go after everything you want. You deserve an incredible one.",
  },
];

const wishes = ["More memories", "More medals", "More adventures", "More laughter"];

export default function Home() {
  const [celebrating, setCelebrating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  const celebrate = () => {
    setCelebrating(true);
    setWishMade(true);
  };

  return (
    <main className={celebrating ? "site party-on" : "site"}>
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="Daniel Xu birthday home">
          <span>DX</span>
          <small>BIRTHDAY<br />EDITION</small>
        </a>
        <div className="nav-date">THE BEIJING BEAST · 2026</div>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav id="navigation" className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#memories" onClick={() => setMenuOpen(false)}>MEMORIES</a>
          <a href="#notes" onClick={() => setMenuOpen(false)}>BIRTHDAY NOTES</a>
          <a href="#wish" onClick={() => setMenuOpen(false)}>MAKE A WISH</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-decorations" aria-hidden="true">
          <i className="balloon balloon-one" />
          <i className="balloon balloon-two" />
          <i className="balloon balloon-three" />
          <b className="spark spark-one">✦</b>
          <b className="spark spark-two">✦</b>
          <b className="spark spark-three">✦</b>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span /> A VERY SPECIAL BIRTHDAY WEBSITE</p>
          <h1>
            HAPPY
            <span>BIRTHDAY</span>
            <em>DANIEL!</em>
          </h1>
          <p className="nickname"><b>AKA</b> THE BEIJING BEAST</p>
          <p className="intro">
            Today is about celebrating the wins, the laughs, the memories, and
            one genuinely unforgettable friend.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#notes">OPEN YOUR BIRTHDAY CARD <b>↓</b></a>
            <button className="secondary" onClick={celebrate}>
              🎉 START THE PARTY
            </button>
          </div>
        </div>

        <div className="hero-collage" aria-label="Birthday photo collage for Daniel Xu">
          <div className="photo-card main-photo">
            <img src="/photos/medals-bright.webp" alt="Daniel and a friend smiling with swimming medals" />
            <span>CHAMPION ENERGY</span>
          </div>
          <div className="round-photo">
            <img src="/photos/daniel-face.webp" alt="Daniel Xu smiling" />
          </div>
          <div className="birthday-seal">
            <strong>HBD</strong>
            <span>DANIEL · DANIEL · DANIEL ·</span>
          </div>
          <div className="cake-badge">🎂<small>WISH BIG</small></div>
          <p className="photo-note">ONE OF ONE<br /><b>EST. LEGEND</b></p>
        </div>
      </section>

      <div className="ticker" aria-label="Birthday celebration">
        <div>
          HAPPY BIRTHDAY DANIEL <i>★</i> CELEBRATE THE BEAST <i>★</i>
          ANOTHER YEAR MORE LEGENDARY <i>★</i> HAPPY BIRTHDAY DANIEL <i>★</i>
          CELEBRATE THE BEAST <i>★</i> ANOTHER YEAR MORE LEGENDARY <i>★</i>
        </div>
      </div>

      <section className="birthday-intro section">
        <div className="intro-number">01</div>
        <div>
          <p className="section-kicker">THE BIRTHDAY BOY</p>
          <h2>BUILT<br />DIFFERENT.</h2>
        </div>
        <div className="intro-letter">
          <span>Dear Daniel,</span>
          <p>
            You are one of those people who makes an ordinary day more memorable.
            Your drive, humour, and loyalty are a rare combination—and your
            friends are lucky to have you.
          </p>
          <p>
            We are proud of everything you have achieved, but even more grateful
            for the person you are. This page is a small celebration of a very
            big legend.
          </p>
          <strong>HERE’S TO YOUR BEST YEAR YET. ♥</strong>
        </div>
      </section>

      <section className="memories section" id="memories">
        <div className="section-heading light">
          <div>
            <p>02 / THE MEMORY WALL</p>
            <h2>GOOD TIMES.<br /><em>GREAT PEOPLE.</em></h2>
          </div>
          <p className="heading-note">
            The best pictures are never just pictures. They are proof that the
            good days really happened.
          </p>
        </div>

        <div className="photo-wall">
          <figure className="memory-wide">
            <div className="tape" aria-hidden="true" />
            <img src="/photos/crew-landscape.webp" alt="Daniel smiling outside with friends" />
            <figcaption><b>01</b><span>THE CREW</span><small>Blue skies & good company</small></figcaption>
          </figure>
          <figure className="memory-tall">
            <div className="tape" aria-hidden="true" />
            <img src="/photos/medals-bright.webp" alt="Daniel and a friend after a swimming competition" />
            <figcaption><b>02</b><span>MEDAL MOMENT</span><small>Hard work looks good on you</small></figcaption>
          </figure>
          <figure className="memory-portrait">
            <div className="tape" aria-hidden="true" />
            <img src="/photos/daniel-portrait.webp" alt="Portrait of Daniel Xu" />
            <figcaption><b>03</b><span>BEAST SIGHTING</span><small>Rare photographic evidence</small></figcaption>
          </figure>
          <blockquote>
            <span>“</span>
            A great friend, a serious competitor, and a completely unserious
            amount of aura.
          </blockquote>
        </div>
      </section>

      <section className="notes section" id="notes">
        <div className="section-heading">
          <div>
            <p>03 / A FEW THINGS YOU SHOULD KNOW</p>
            <h2>THREE NOTES<br />FOR DANIEL.</h2>
          </div>
          <div className="mini-celebration" aria-hidden="true">
            <span>✦</span><b>🎈</b><span>✦</span>
          </div>
        </div>
        <div className="note-grid">
          {notes.map((note) => (
            <article key={note.title}>
              <span>{note.icon}</span>
              <div className="note-icon">{note.icon === "01" ? "🏆" : note.icon === "02" ? "♥" : "🚀"}</div>
              <h3>{note.title}</h3>
              <p>{note.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wishes">
        <p>THE OFFICIAL BIRTHDAY FORECAST</p>
        <div className="wish-list">
          {wishes.map((wish, index) => (
            <div key={wish}><span>0{index + 1}</span>{wish}<b>↗</b></div>
          ))}
        </div>
      </section>

      <section className="make-a-wish section" id="wish">
        <div className="wish-copy">
          <p>04 / ONE LAST THING</p>
          <h2>{wishMade ? <>WISH<br /><em>GRANTED.</em></> : <>MAKE A<br /><em>BIG WISH.</em></>}</h2>
          <p className="wish-message">
            {wishMade
              ? "The candles are out, the confetti is flying, and your best year has officially begun."
              : "Take a second. Think of something huge. You only get one official Beijing Beast birthday wish."}
          </p>
          <button onClick={celebrate}>
            {wishMade ? "KEEP CELEBRATING 🎉" : "BLOW OUT THE CANDLES →"}
          </button>
        </div>
        <div className={wishMade ? "cake wish-complete" : "cake"} aria-label="Birthday cake illustration">
          <div className="flame" />
          <div className="candle">DX</div>
          <div className="cake-top"><i /><i /><i /><i /><i /></div>
          <div className="cake-bottom"><span>HAPPY BIRTHDAY DANIEL</span></div>
          <div className="cake-plate" />
        </div>
      </section>

      <section className="final-message">
        <span>FROM ALL OF US, TO YOU</span>
        <h2>KEEP WINNING.<br />KEEP LAUGHING.<br /><em>KEEP BEING DANIEL.</em></h2>
        <p>
          More adventures. More memories. More reasons to celebrate.<br />
          Happy birthday to the one and only Beijing Beast.
        </p>
      </section>

      <footer>
        <a className="footer-brand" href="#top"><b>DX</b><span>BIRTHDAY EDITION · 2026</span></a>
        <p>MADE FOR DANIEL XU, WITH FRIENDSHIP & UNREASONABLE LEVELS OF RESPECT.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      {celebrating && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 42 }).map((_, index) => <i key={index} />)}
        </div>
      )}
    </main>
  );
}
